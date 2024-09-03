import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})



export class SeriesComponent {

 series = [ 'un','deux','trois','quatre']


  delete(i: number):void {
   this.series.splice(i, 1);
  }

}
