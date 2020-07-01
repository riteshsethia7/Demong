import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'r-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }
  @Input() rtype : string ;
  ngOnInit(): void {
  }

}
