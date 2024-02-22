import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralSingular',
  standalone: true
})

export class PluralSingularPipe implements PipeTransform {
        transform(number: number, singularText: string, pluralText: string = ''): string {
      let pluralWord = pluralText ? pluralText : `${singularText}s`;
                return number > 1 ? `${number} ${pluralWord}` : `${number} ${singularText}`;
     }
}