import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texto'
})
export class TextoPipe implements PipeTransform {
    transform(text: string, format: string): any {
    text = text.trim();
    if (text != null) {
      if (format == 'capitalize' || format == null) {
        return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
      } else {
        if (format == 'lower') {
          return text.toLowerCase();
        } else {
          if (format == 'upper'){
            return text.toUpperCase();
          }
        }
      }
    }
  }

}
