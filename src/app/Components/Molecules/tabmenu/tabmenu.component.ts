import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'r-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent implements OnInit {

  constructor(private router : Router) { }

  @Input() model : any ;
  public isactive = []
  public index = 0
  ngOnInit(): void {
    this.model.forEach(element => {
      this.isactive.push(false)
    });
  }
  navigate(routerlink,i){
    console.log(i)
    for(let j=0;j<this.isactive.length;j++){
     this.isactive[j] = false
    }
    this.isactive[i] = true
    this.router.navigateByUrl('/'+routerlink)
  }
}
