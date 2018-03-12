import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

import {PERIOD_LIST, DeliveryTypeMap, DELIVERY_TYPE, Category, Product} from '../../../config';
import {DeliveryEnum} from '../../model/my-announcement';

import {CategoryListService} from '../../../core/services/category-list.service';
import {MyAnnouncementService} from '../../services/my-announcement.service';


@Component({
  selector: 'pt-add-announcement-page',
  templateUrl: './add-announcement-page.component.html',
  styleUrls: ['./add-announcement-page.component.scss']
})

export class AddAnnouncementPageComponent implements OnInit, OnDestroy {
  public categoryList: Category[];
  public periodList = PERIOD_LIST;
  public deliveryType: DeliveryTypeItem[] = mapToDeliveryTypeList(DELIVERY_TYPE);
  public deliveryFlag: boolean;
  public choseProductName: string;
  public form: FormGroup;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private categoryListService: CategoryListService,
              private myAnnouncementService: MyAnnouncementService,
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
      description: [''],
      delivery: [String(DeliveryEnum.WITH_DELIVERY), [Validators.required, validateType]],
      deliveryDate: [''],
      deliveryRange: [''],
      zipCode: ['']
    });

    this.actualDeliveryFlag(this.form.get('delivery').value);

    this.form.valueChanges
      .takeUntil(this.ngUnsubscribe)
      .do((data) => this.actualDeliveryFlag(data.delivery))
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
    this.myAnnouncementService.addNewAnnouncement(this.form.value);
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
