import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  @Input() pageName: string = "Non défini";
  @Input() className: string = "mdi mdi-home";
  
  constructor() { }

  ngOnInit(): void {
  }

}
