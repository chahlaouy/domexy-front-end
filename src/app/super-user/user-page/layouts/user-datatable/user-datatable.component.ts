import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'user-datatable',
  templateUrl: './user-datatable.component.html',
  styleUrls: ['./user-datatable.component.scss']
})
export class UserDatatableComponent implements OnInit {

  @Input() users$: Observable<User[]> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
