import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'category-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() categories$: Observable<Category[]> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
