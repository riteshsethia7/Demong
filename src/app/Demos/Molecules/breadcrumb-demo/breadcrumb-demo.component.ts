import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-demo',
  templateUrl: './breadcrumb-demo.component.html',
  styleUrls: ['./breadcrumb-demo.component.css']
})
export class BreadcrumbDemoComponent implements OnInit {

  public items : any ;
  constructor(){
    this.items= [
      {label :'Categories'},
      {label :'Movies'},
      {label : 'Action'},
      {label : 'Iron man'},
      {label : 'Cast'},
      {label : 'Tony Stark'}
    ]
  }

  ngOnInit(): void {
  }

}
