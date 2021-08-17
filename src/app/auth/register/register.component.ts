import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.appendScript();
  }
  appendScript(){

    const fileUpload = document.createElement("script");
    fileUpload.src = `/assets/js/file-upload.js`;
    document.body.appendChild(fileUpload);

    const jqueryEasing = document.createElement("script");
    jqueryEasing.src = `/assets/plugins/jquery.easing/jquery.easing.min.js`;
    document.body.appendChild(jqueryEasing);
    
    const login = document.createElement("script");
    login.src = `/assets/js/login.js`;
    document.body.appendChild(login);

  }

}
