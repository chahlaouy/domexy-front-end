import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { AppState } from 'src/app/store/app.state';
import { ScriptService } from '../../services/script.service';
import { getUsersEntites } from '../store/users.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]> | undefined ;

  constructor(
    private store: Store<AppState>,
    private scriptService: ScriptService
  ) { }

  ngOnInit(): void {
    this.scriptService.appendDataTableScripts();
    this.users$ = this.store.select(getUsersEntites);
  }

}
