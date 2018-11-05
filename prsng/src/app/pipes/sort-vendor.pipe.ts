import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe({
  name: 'sortVendors'
})
export class SortVendorsPipe implements PipeTransform {

  transform(vendors: Vendor[]): Vendor[] {
    
    let sortColumn = "name";
    return vendors.sort(compareFunction);

    function compareFunction(a,b) {
      let x=(a[sortColumn]).toUpperCase();
      let y=(b[sortColumn]).toUpperCase();

      if(x === y) return 0;
      if(x < y) return -1;
      else return 1;
    }
  }

}
