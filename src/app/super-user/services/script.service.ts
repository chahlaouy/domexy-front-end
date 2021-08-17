import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor() { }

  appendDataTableScripts(){
    const jqueryDataTables = document.createElement("script");
    jqueryDataTables.src = `/assets/plugins/datatables.net/jquery.dataTables.min.js`;
    // jqueryDataTables.async = true;
    document.body.appendChild(jqueryDataTables); 

    const dataTablesBootstrap4 = document.createElement("script");
    dataTablesBootstrap4.src = `/assets/plugins/datatables.net-bs4/js/dataTables.bootstrap4.js`;
    document.body.appendChild(dataTablesBootstrap4);
    
    const customdataTable = document.createElement("script");
    customdataTable.src = `/assets/js/data-table.js`;
    document.body.appendChild(customdataTable);
  }

  appendFileUploadScript(){
    const fileUpload = document.createElement("script");
    fileUpload.src = `/assets/js/file-upload.js`;
    document.body.appendChild(fileUpload);
  }
  appendDashboardScript(){
    const chart = document.createElement("script");
    chart.src = `/assets/plugins/chartjs/chart.min.js`;
    document.body.appendChild(chart);

    const sparkline = document.createElement("script");
    sparkline.src = `/assets/plugins/jquery-sparkline/jquery.sparkline.min.js`;
    document.body.appendChild(sparkline);
    
    const datepicker = document.createElement("script");
    datepicker.src = `/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js`;
    document.body.appendChild(datepicker);

    const dashboard = document.createElement("script");
    dashboard.src = `/assets/js/dashboard.js`;
    document.body.appendChild(dashboard);
  }
}
