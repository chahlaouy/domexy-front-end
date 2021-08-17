import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front-end';

  ngOnInit(){
    this.appendScript();
  }
  appendScript(){

    const perfectScrollbar = document.createElement("script");
    perfectScrollbar.src = `assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js`;
    // perfectScrollbar.async = true;
    document.body.appendChild(perfectScrollbar);

    const offCanvas = document.createElement("script");
    offCanvas.src = `assets/js/off-canvas.js`;
    offCanvas.async = true;
    document.body.appendChild(offCanvas);
    
    const hoverableCollapse = document.createElement("script");
    hoverableCollapse.src = `assets/js/hoverable-collapse.js`;
    // hoverableCollapse.async = true;
    document.body.appendChild(hoverableCollapse);

    const misc = document.createElement("script");
    misc.src = `assets/js/misc.js`;
    // misc.async = true;
    document.body.appendChild(misc);

    const settings = document.createElement("script");
    settings.src = `assets/js/settings.js`;
    // settings.async = true;
    document.body.appendChild(settings);

    const todolist = document.createElement("script");
    todolist.src = `assets/js/todolist.js`;
    // todolist.async = true;
    document.body.appendChild(todolist);
    
  }
}
