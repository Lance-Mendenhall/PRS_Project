import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.class';

@Pipe({
  name: 'sortProducts'
})
export class SortProductPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    
    let sortColumn = "name";
    return products.sort(compareFunction);

    function compareFunction(a,b) {
      let x=(a[sortColumn]).toUpperCase();
      let y=(b[sortColumn]).toUpperCase();

      if(x === y) return 0;
      if(x < y) return -1;
      else return 1;
    }
  }

}
