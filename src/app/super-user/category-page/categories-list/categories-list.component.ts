import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/shared/models/category.model';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { getCategoriesEntities } from '../srore/categories.selectors';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories$: Observable<Category[]> | undefined;

  constructor(
    private store: Store<AppState>,
    private scriptService: ScriptService
  ) {}

  ngOnInit(): void {
    this.scriptService.appendDataTableScripts();
    this.categories$ = this.store.select(getCategoriesEntities);
  }
}
