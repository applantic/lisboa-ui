import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {Category, DELIVERY_TYPE, DeliveryTypeMap, PERIOD_LIST, Product} from '../../config';
import {CategoryListService} from '../../core/services/category-list.service';
import {AnnouncementService} from '../announcement.service';
import {DeliveryEnum, NewAnnouncement} from '../announcement.model';

@Component({
  selector: 'pt-new-announcement-page',
  templateUrl: './new-announcement-page.component.html',
  styleUrls: ['./new-announcement-page.component.scss']
})

export class NewAnnouncementPageComponent implements OnInit, OnDestroy {
  public categoryList: Category[];
  public periodList = PERIOD_LIST;
  public deliveryType: DeliveryTypeItem[] = mapToDeliveryTypeList(DELIVERY_TYPE);
  public deliveryFlag: boolean;
  public choseProductName: string;
  public form: FormGroup;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private categoryListService: CategoryListService,
              private announcementService: AnnouncementService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    console.log(DELIVERY_TYPE);
    this.categoryListService.getCategoryList()
      .takeUntil(this.ngUnsubscribe)
      // .map((data) => mapToCategoryList(data))
      .subscribe((data) => this.categoryList = data);

    this.initForm();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      productKey: ['default', [Validators.required]],
      price: [''],
      minQuantity: [''],
      maxQuantity: [''],
      period: ['default'],
      remarks: [''],
      deliveryType: [String(DeliveryEnum.WITH_DELIVERY), [Validators.required, validateType]],
      deliveryDate: [''],
      deliveryRange: [''],
      zipCode: ['']
    });

    this.actualDeliveryFlag(this.form.get('deliveryType').value);

    this.form.valueChanges
      .takeUntil(this.ngUnsubscribe)
      .do((data) => this.actualDeliveryFlag(data.deliveryType))
      .do((data) => this.actualChoseProduct(data.productKey))
      .subscribe((data) => console.log('this form: ', data));
  }

  private actualChoseProduct(productKey: string) {
    this.choseProductName = getProductNameByKey(this.categoryList, productKey);
  }

  private actualDeliveryFlag(deliveryTypeKey: DeliveryEnum) {
    this.deliveryFlag = deliveryTypeKey === DeliveryEnum.WITH_DELIVERY;
  }

  public clickedSave() {
    this.announcementService.addNewAnnouncement((this.form.value as NewAnnouncement))
      .do((data) => this.router.navigate([`/ogloszenia/dodano`, {id: data.id}], {relativeTo: this.route}))
      .subscribe();
  }
}

function validateType(control: AbstractControl): ValidationErrors | null {
  if (!Object.keys(DELIVERY_TYPE).some((key) => key === control.value)) {
    return {validUrl: true};
  } else {
    return null;
  }
}

function getProductNameByKey(list: Item[] = [], productKey): string {
  const newList = [...list];

  return newList.reduce((acc, item, i, arr) => {
    if (item.key === productKey && acc === '') {

      arr.splice(1);
      return item.name;
    } else {

      if (item.products && acc === '') {
        acc += getProductNameByKey(item.products, productKey);
      }

      return acc;
    }
  }, '');
}

function mapToCategoryList(categoryList: Category[]): Category[] {
  return Object.keys(categoryList).map((id) => Object.assign({}, categoryList[id], {id}));
}

function mapToDeliveryTypeList(deliveryTypeMap: DeliveryTypeMap): DeliveryTypeItem[] {
  return Object.keys(deliveryTypeMap).map((id) => ({id, labelName: deliveryTypeMap[String(id)]}));
}

interface DeliveryTypeItem {
  id: string;
  labelName: string;
}


export interface Item extends Product {
  products?: Item[];
}
