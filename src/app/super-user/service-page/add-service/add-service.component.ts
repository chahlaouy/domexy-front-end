import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  constructor(
    private scriptService: ScriptService
  ) { }

  ngOnInit(): void {
    this.scriptService.appendFileUploadScript()
  }

}
