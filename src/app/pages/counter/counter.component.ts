import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter: number= 0;

  color = {
    color1 : 'green',
    color2 : 'red',
  }

  plus(){
         this.counter+=1;
  }

  minus() {
          this.counter--;
  }
  
  getColor(){
    return  (this.counter%2!==0) ? 'red' : 'green';
  }

}
