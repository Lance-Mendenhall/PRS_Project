import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  save():void {
    this.productsvc.change(this.product)
    .subscribe(resp=> {
     console.log("resp",resp);
     this.router.navigateByUrl('/products/list');
    });
  }
  
  constructor(
    private productsvc: ProductService,
    private route:ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id)
    .subscribe(resp=> {
      console.log("resp: ", resp);
      this.product = resp.data;
    });
  }

}