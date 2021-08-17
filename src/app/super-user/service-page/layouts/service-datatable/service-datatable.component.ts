import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/shared/models/service.model';

@Component({
  selector: 'service-datatable',
  templateUrl: './service-datatable.component.html',
  styleUrls: ['./service-datatable.component.scss']
})
export class ServiceDatatableComponent implements OnInit {

  @Input() services$: Observable<Service[]> | undefined ;
  constructor() { }

  ngOnInit(): void {
  }

}
