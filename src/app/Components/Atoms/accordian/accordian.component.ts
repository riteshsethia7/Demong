import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'r-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  constructor() { }

  @Input() width : any ;

  ngOnInit(): void {
  }

}
