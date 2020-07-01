import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'r-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  constructor() { }

  @Input() rtype : any ;
  @Input() rplaceholder  = "";
  @Output() inputdata = new EventEmitter();

  ngOnInit(): void {
  }
  inputfielddata(input){
    this.inputdata.emit(input)
  }

}
