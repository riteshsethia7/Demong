import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'r-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  @Input() popup :boolean ;
  @Input() model : any ;
  public clicked : boolean
  ngOnInit(): void {
    this.clicked = !this.popup
    console.log(this.clicked,this.popup)
  }
  showmenu(){
    this.clicked = (!this.clicked) ? true : false
  }
}
