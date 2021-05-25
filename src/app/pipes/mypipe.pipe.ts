import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string): string {

    value = value.toLowerCase();
    let words = value.split(" ");
    
    words = words.map( w => (w[0].toUpperCase() + w.substr(1)));
    console.log(words);

    return words.join(' ');
  }

}
