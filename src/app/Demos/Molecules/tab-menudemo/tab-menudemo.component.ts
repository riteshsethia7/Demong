import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-menudemo',
  templateUrl: './tab-menudemo.component.html',
  styleUrls: ['./tab-menudemo.component.css']
})
export class TabMenudemoComponent implements OnInit {
  public items = []

  constructor() {
    this.items = [
      { label : 'Atoms',icon :'adjust',routerlink : 'atoms'},
      { label : 'Molecules',icon :'bubble_chart',routerlink : 'molecules'},
      { label : 'organisms',icon :'drag_indicator',routerlink : 'organisms'},
    ]
   }
  ngOnInit(): void {

  }

}
