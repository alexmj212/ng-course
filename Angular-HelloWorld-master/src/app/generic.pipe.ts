import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'generic' })
export class GenericPipe implements PipeTransform {

    transform(value: any, format: string) {
        if (value) {
            return value + ' ' + format;
        } else {
            return value;
        }
    }

}