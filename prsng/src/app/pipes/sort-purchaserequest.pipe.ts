import { Pipe, PipeTransform } from '@angular/core';
import { Purchaserequest } from '../purchaserequest/purchaserequest.class';

@Pipe({
  name: 'sortPurchaserequests'
})
export class SortPurchaserequestPipe implements PipeTransform {

  transform(purchaserequests: Purchaserequest[]): Purchaserequest[] {
    
    let sortColumn = "total";
    return purchaserequests.sort(compareFunction);

    function compareFunction(a,b) {
      let x=(a[sortColumn]).toUpperCase();
      let y=(b[sortColumn]).toUpperCase();

      if(x === y) return 0;
      if(x < y) return -1;
      else return 1;
    }
  }
 
}
