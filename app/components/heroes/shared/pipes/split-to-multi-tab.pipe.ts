// Split string 'a|b;c|d;e|f' to multi tab

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'splitToTab'})
export class SplitToTabPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    
    var arr = [];    
    arr = value.split(';');
    for (var i = 0; i < arr.length; i++){
      arr[i] = arr[i].split('|');
    }
    
    return arr;
  }
}