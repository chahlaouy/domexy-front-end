import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Service } from 'src/app/shared/models/service.model';
import { AppState } from 'src/app/store/app.state';
import { getServicesEntities } from '../store/services.selectors';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  services$: Observable<Service[]> | undefined ;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.services$ = this.store.select(getServicesEntities);

  }

}
