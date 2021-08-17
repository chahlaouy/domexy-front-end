import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../services/script.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private scriptService: ScriptService
  ) { }

  ngOnInit(): void {
    this.scriptService.appendDashboardScript();
  }

}
