import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'r-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() btntype : string ;
  @Input() rclass : string ;
  @Output() event = new EventEmitter() ;

  ngOnInit(): void {
  }

  onbuttonclick(event){
    this.event.emit(event);
  }
}
