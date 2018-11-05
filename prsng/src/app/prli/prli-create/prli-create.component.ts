import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrliService } from '../prli.service';
import { Prli } from '../prli.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';
import { Purchaserequest } from '../../purchaserequest/purchaserequest.class';
import { PurchaserequestService } from '../../purchaserequest/purchaserequest.service';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {

  prid: number;
  prli: Prli = new Prli();
  products: Product[];
 
 
  save(): void {
    this.prli.id = Number(this.prid);
    console.log("prli:", this.prli, ", route:", this.prli.id);
    this.prlisvc.add(this.prli)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/lines/'+this.prid);
      });
  }

  constructor(
    private prlisvc: PrliService,
    private productsvc: ProductService,
    private purchaserequestsvc: PurchaserequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

 

  ngOnInit() {
    this.prid = this.route.snapshot.params.prid;
    this.productsvc.list()
    .subscribe(resp => {
      console.log("Response:", resp);
      this.products = resp.data;
    });
  }
 
}