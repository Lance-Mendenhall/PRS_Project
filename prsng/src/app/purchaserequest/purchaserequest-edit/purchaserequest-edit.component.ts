import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaserequestService } from '../purchaserequest.service';
import { Purchaserequest } from '../purchaserequest.class';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent implements OnInit {

  purchaserequest: Purchaserequest;

  save():void {
    this.purchaserequestsvc.change(this.purchaserequest)
    .subscribe(resp=> {
     console.log("resp",resp);
     this.router.navigateByUrl('/purchaserequests/list');
    });
  }
  
  constructor(
    private purchaserequestsvc: PurchaserequestService,
    private route:ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.purchaserequestsvc.get(id)
    .subscribe(resp=> {
      console.log("resp: ", resp);
      this.purchaserequest = resp.data;
    });
  }

}