import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbs',
  standalone: true
})
export class ThumbsPipe implements PipeTransform {

  transform(value: boolean) : string {

    if (value) {  
      return `👍🏿`;
    }
    return `👎🏿`;  
  }
}
