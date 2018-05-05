import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lengthPipe'
})
export class LengthPipe implements PipeTransform {
  transform(text: String): String {
      return text.substr(0, 20);
  }
}
