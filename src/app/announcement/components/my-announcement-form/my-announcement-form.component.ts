import 'rxjs/add/operator/takeUntil';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {DeliveryEnum} from '../../../dictionary/delivery.model';
import {DELIVERY_TYPE, DeliveryTypeMap, PERIOD_LIST} from '../../../config';
import {DictionaryService} from '../../../dictionary/dictionary.service';
import {MyAnnouncementService} from '../../my-announcement.service';
import {Category, Option} from '../../../dictionary/category.model';
import {FormMyAnnouncement, INIT_FORM_MY_ANNOUNCEMENT} from '../../my-announcement.model';

@Component({
  selector: 'pt-my-announcement-form',
  templateUrl: './my-announcement-form.component.html',
  styleUrls: ['./my-announcement-form.component.scss']
})
export class MyAnnouncementFormComponent implements OnInit, OnDestroy {
  @Input() formMyAnnouncement: FormMyAnnouncement;

  public categoryList: Option[];
  public periodList = PERIOD_LIST;
  public deliveryType: DeliveryTypeItem[] = mapToDeliveryTypeList(DELIVERY_TYPE);

  public form: FormGroup;

  public deliveryFlag: boolean;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private locationRouter: Location,
              private dictionaryService: DictionaryService,
              private myAnnouncementService: MyAnnouncementService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm({...INIT_FORM_MY_ANNOUNCEMENT, ...this.formMyAnnouncement});
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private initForm(formMyAnnouncement2: FormMyAnnouncement) {

    this.form = this.formBuilder.group({
      productKey: [formMyAnnouncement2.productKey, [Validators.required]],
      price: [formMyAnnouncement2.price],
      minQuantity: [formMyAnnouncement2.minQuantity],
      maxQuantity: [formMyAnnouncement2.maxQuantity],
      period: [formMyAnnouncement2.period],
      remarks: [formMyAnnouncement2.remarks],
      deliveryType: [formMyAnnouncement2.deliveryType, [Validators.required, validateType]],
      deliveryDate: [formMyAnnouncement2.deliveryDate],
      deliveryRange: [formMyAnnouncement2.deliveryRange],
      zipCode: [formMyAnnouncement2.zipCode]
    });

    this.actualDeliveryFlag(this.form.get('deliveryType').value);

    this.form.valueChanges
      .takeUntil(this.ngUnsubscribe)
      .do((data) => this.actualDeliveryFlag(data.deliveryType))
      .subscribe((data) => console.log('this form: ', data));
  }

  private actualDeliveryFlag(deliveryTypeKey: DeliveryEnum) {
    this.deliveryFlag = deliveryTypeKey === DeliveryEnum.WITH_DELIVERY;
  }
}

function validateType(control: AbstractControl): ValidationErrors | null {
  if (!Object.keys(DELIVERY_TYPE).some((key) => key === control.value)) {
    return {validUrl: true};
  } else {
    return null;
  }
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
