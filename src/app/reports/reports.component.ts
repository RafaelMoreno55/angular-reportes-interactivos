import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  rows: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      // console.log(JSON.parse(params['rows']));
      this.rows = JSON.parse(params['rows']);
    });
    /* this.route.params.subscribe((params: Params) => {
      console.log(params);
      
      this.rows = params['rows'];
    }); */
  }

  ObtenerNombre(): any {
    return this.rows[0].name; 
  } 
}
