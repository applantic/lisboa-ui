import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {KeyNamePair, Option} from '../../../dictionary/category.model';
import { DictionaryService } from '../../../dictionary/dictionary.service';

@Component({
  selector: 'pt-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  public categoryList: Option[] = [];
  public regionsList: Option[] = [];
  public form: FormGroup;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private dictionaryService: DictionaryService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.dictionaryService.getCategoryList()
      .map(transformCategories)
      .subscribe((list) => this.categoryList = list);

    this.dictionaryService.getVovoideshipList()
      .map(transformKeyNamePair)
      .subscribe((list) => this.regionsList = list);

    this.initForm();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      region: [''],
      productKey: ['']
    });

    this.form.valueChanges
      .takeUntil(this.ngUnsubscribe)
      .do(this.loadFilteredValues)
      .subscribe();
  }

  private loadFilteredValues(data) {
    console.log('Load new values for', data);
  }
}

function transformCategories(categories) {
  return categories.map(item => ({
    value: item.key,
    label: item.name,
    options: item.products && transformKeyNamePair(item.products)
  }));
}

function transformKeyNamePair(list) {
  return list.map(item => ({
    value: item.key,
    label: item.name
  }));
}
