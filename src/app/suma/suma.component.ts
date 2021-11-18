import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() numero1 = 10;
  @Input() numero2=10;
  @Input() result=this.numero1+this.numero2;

  constructor() {
    console.log(this.result);
  }

  ngOnInit(): void {
  }
  calculator(){
    if(this.numero1+this.numero2){
      console.log(this.result)
    }
  }

}
