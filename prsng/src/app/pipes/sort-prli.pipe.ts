import { Pipe, PipeTransform } from '@angular/core';
import { Prli } from '../prli/prli.class';

@Pipe({
  name: 'sortPrlis'
})
export class SortPrliPipe implements PipeTransform {

  transform(prlis: Prli[]): Prli[] {
    
    let sortColumn = "id";
    return prlis.sort(compareFunction);

    function compareFunction(a,b) {
      let x=(a[sortColumn]).toUpperCase();
      let y=(b[sortColumn]).toUpperCase();

      if(x === y) return 0;
      if(x < y) return -1;
      else return 1;
    }
  }
 
}
