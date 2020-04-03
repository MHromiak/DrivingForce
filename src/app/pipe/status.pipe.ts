import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case '0':
        return 'Available';
      case '1':
        return 'On Going';
      case '2':
        return 'Done';
    }
    return '';
  }

}
