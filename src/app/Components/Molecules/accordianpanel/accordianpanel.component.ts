import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'r-accordianpanel',
  templateUrl: './accordianpanel.component.html',
  styleUrls: ['./accordianpanel.component.css']
})
export class AccordianpanelComponent implements OnInit {

  constructor() { }

  @Input() label : string

  public arrowkey = "keyboard_arrow_right"
  public isopen :boolean = false

  ngOnInit(): void {
  }
  showtab(){
    this.isopen = (this.isopen) ? false : true
    this.arrowkey = (this.isopen) ? "keyboard_arrow_down" : "keyboard_arrow_right"
  }
}
