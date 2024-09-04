import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable',
  standalone: true
})
export class FilterTablePipe implements PipeTransform {

  transform(values: string[], orderBy: 'desc' | 'asc'): string[] {
    if (!values || !Array.isArray(values)) {
      return [];
    }
    if (orderBy === 'asc') {
      return values.sort();
    }
    else if (orderBy === 'desc') {
      return values.sort().reverse();
    }
    else
      return values;
  }
}
