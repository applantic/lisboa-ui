import { Component, OnInit } from '@angular/core';
import { Option } from '../../../config';
import { CategoryListService } from '../../../shared/services/category-list.service';

@Component({
  selector: 'pt-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public categoryList: Option[] = [];
  public regions: Option[] = [
    { label: 'dolnośląskie', value: '02' },
    { label: 'kujawsko-pomorskie', value: '04' },
    { label: 'lubelskie', value: '06' },
    { label: 'lubuskie', value: '08' },
    { label: 'łódzkie', value: '10' },
    { label: 'małopolskie', value: '12' },
    { label: 'mazowieckie', value: '14' },
    { label: 'opolskie', value: '16' },
    { label: 'podkarpackie', value: '18' },
    { label: 'podlaskie', value: '20' },
    { label: 'pomorskie', value: '22' },
    { label: 'śląskie', value: '24' },
    { label: 'świętokrzyskie', value: '26' },
    { label: 'warmińsko-mazurskie', value: '28' },
    { label: 'wielkopolskie', value: '30' },
    { label: 'zachodniopomorskie', value: '32' },
  ];
  constructor(private categoryListService: CategoryListService) { }

  ngOnInit() {
    this.categoryListService.getCategoryList()
      .map((item) => transformCategoryList(item))
      .do(list => console.log(list))
      .subscribe((list) => this.categoryList = list);
  }
}


function transformCategoryList(list) {
  return list.map(item => ({
    value: item.key,
    label: item.name,
    options: item.products && transformCategoryList(item.products)
  }));
}
