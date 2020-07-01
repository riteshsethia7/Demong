import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'r-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() rtype : string ;
  @Input() rplaceholder = "";
  @Output() inputdata = new EventEmitter();

  public input : any ;

  ngOnInit(): void {
  }

  oninput(event){
    this.inputdata.emit(event.target.value)
  }
}
