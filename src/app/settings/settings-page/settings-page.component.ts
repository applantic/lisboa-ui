import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
import { DictionaryService } from '../../dictionary/dictionary.service';
import {Category} from '../../dictionary/category.model';

@Component({
  selector: 'pt-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  public customerType =  'company';
  public userProgress: Number = 0;
  public progressStyle = 'danger';
  public form: FormGroup;
  public categoryList: Category[];
  public selectedCategory = new Array<String>();

  constructor(private formBuilder: FormBuilder, private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.initForm();
    this.dictionaryService.getCategoryList()
    .map((item) => this.mapToCategoryList(item))
    .do(list => console.log(list))
    .subscribe((list) => this.categoryList = list);
  }

  private mapToCategoryList(categoryList: Category[]): Category[] {
    return Object.keys(categoryList).map((id) => Object.assign({}, categoryList[id], {id}));
  }

  public customerIsPrivate(): boolean {
    return this.customerType === 'private';
  }

  public customerIsCompany(): boolean {
    return this.customerType === 'company';
  }

  public addCategory(categoryKey: string): void {
    if (this.selectedCategory.indexOf(categoryKey) > -1) {
      this.selectedCategory = this.selectedCategory.filter(category => category !== categoryKey);
    } else {
      this.selectedCategory.push(categoryKey);
    }
    this.form.value.private.cultivations = [].concat(this.selectedCategory);
  }

  public changeCustomerType(event: any): void {
    this.customerType = event.target.value;
    this.form.reset();
    this.selectedCategory = [];
  }

  private changeUserProgressSettings(data: any): void {
    const numberOfElements: number = this.getNumberOfElements();
    const numberOfCompletedElements: number = this.getNumberOfCompletedElements(data);
    this.userProgress =  Math.floor(numberOfCompletedElements / numberOfElements * 100);
  }

  private getNumberOfElements(): number {
    let allElements: Array<String> = Object.keys(this.form.value.base);
    let additionalElements: Array<String>;
    if (this.customerIsCompany()) {
      additionalElements = Object.keys(this.form.value.company);
    } else {
      additionalElements = Object.keys(this.form.value.private);
    }
    allElements = allElements.concat(additionalElements);
    return allElements.length;
  }

  private getNumberOfCompletedElements(data): number {
    let numberOfCompletedBaseElements: Array<String> = Object.values(data.base);
    let numberOfCompletedAdditionalElements: Array<String>;
    if (this.customerIsCompany()) {
       numberOfCompletedAdditionalElements = Object.values(data.company);
    } else {
       numberOfCompletedAdditionalElements =  Object.values(data.private);
    }
    numberOfCompletedBaseElements = numberOfCompletedBaseElements.concat(numberOfCompletedAdditionalElements);
    return numberOfCompletedBaseElements.filter((el) => (Array.isArray(el) && el.length > 0) || (!Array.isArray(el) && !!el)).length;
  }

  private changeProgressStyle(): void {
    if (this.userProgress <= 30) {
      this.progressStyle = 'danger';
    } else if (this.userProgress > 30 && this.userProgress <= 60) {
      this.progressStyle = '';
    } else if (this.userProgress > 60) {
      this.progressStyle = 'success';
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      customerType: [''],
      company: this.formBuilder.group({
        companyName: [''],
        nip: [''],
      }),
      private: this.formBuilder.group({
        farmerId: [''],
        area: [''],
        cultivations: this.formBuilder.array([]),
        fullName: ['']
      }),
      base: this.formBuilder.group({
        country: [''],
        address: [''],
        zipCode: [''],
        city: [''],
        phone: [''],
        region: [''],
        email: ['']
      })
    });

    this.form.valueChanges
    .do((data) => this.changeUserProgressSettings(data))
    .do(() => this.changeProgressStyle())
    .subscribe((data) => console.log('data: ' + data));
  }

}
