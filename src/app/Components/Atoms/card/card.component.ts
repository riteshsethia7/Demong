import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'r-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() width : any ;
  ngOnInit(): void {
  }

}
