import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'r-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  @Input() model : any ;
  @Input() home : any ;
  @Input() border = false ;

  ngOnInit(): void {
  }

}
