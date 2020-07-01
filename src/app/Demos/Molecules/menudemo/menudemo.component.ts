import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menudemo',
  templateUrl: './menudemo.component.html',
  styleUrls: ['./menudemo.component.css']
})
export class MenudemoComponent implements OnInit {
  public items : any ;
  constructor() {
   }

  ngOnInit(): void {
    this.items = [
      {
        label : 'Atoms' ,
        items : [
          {label: 'button' , icon: 'check_box'},
          {label: 'Text' , icon : 'text_format'}
        ],
        icon : 'adjust'
      },
      {
        label : 'Molecules',
        items : [
          {label : 'Input Field' , icon :"input"},
          {label : 'Card',icon :'view_agenda'}
        ],
        icon : 'bubble_chart'
      },
      {
        label: 'Organisms',
        items : [
          {label : 'Signup',icon:'assignment_ind'},
          {label:'login',icon:'person'}
        ],
        icon: 'drag_indicator'
      }
    ]
  }

}
