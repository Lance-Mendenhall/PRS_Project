import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaserequestService } from '../purchaserequest.service';
import { Purchaserequest } from '../purchaserequest.class';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent implements OnInit {

  purchaserequest:Purchaserequest; 
 
  delete(): void {
    this.purchaserequestsvc.remove(this.purchaserequest)
    .subscribe(resp=> {
  console.log("resp",resp);
  this.router.navigateByUrl('/purchaserequests/list');
    }); 
  }
   
    constructor(
      private purchaserequestsvc: PurchaserequestService, 
      private route: ActivatedRoute,
      private router: Router) { 
    }
  
    ngOnInit() {
      // gets the :id from the router
      let id = this.route.snapshot.params.id;
      // get the user from the user service
      this.purchaserequestsvc.get(id)
      .subscribe(resp=> {
        console.log("resp: ", resp);
        this.purchaserequest = resp.data;
      });
    }
  
  }