import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '../purchaserequest.service';
import { Purchaserequest } from '../purchaserequest.class';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {

  purchaserequests: Purchaserequest[];

  constructor(private purchaserequestsvc: PurchaserequestService) { }

  ngOnInit() {
    this.purchaserequestsvc.list()
      .subscribe(resp=> {
        console.log("Purchase Requests:",resp.data);
        this.purchaserequests = resp.data;
      });
  }
  
} 