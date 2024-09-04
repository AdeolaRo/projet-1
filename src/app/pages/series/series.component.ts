import { Component } from '@angular/core';
import {FilterTablePipe} from "../../utils/pipes/filter-table.pipe";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [
    FilterTablePipe
  ],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})



export class SeriesComponent {

 series = [ 'un','deux','trois','quatre']


  delete(i: number):void {
   this.series.splice(i, 1);
  }

  protected readonly FilterTablePipe = FilterTablePipe;

  sortSeries(order: 'asc' | 'desc'): void {
    this.series = new FilterTablePipe().transform(this.series, order);
  }



}
