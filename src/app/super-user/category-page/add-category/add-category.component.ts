import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(
    private scriptService: ScriptService
  ) {}

  ngOnInit(): void {
    this.scriptService.appendFileUploadScript()
  }
}
