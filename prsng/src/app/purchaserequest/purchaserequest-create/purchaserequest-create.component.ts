import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaserequestService } from '../purchaserequest.service';
import { Purchaserequest } from '../purchaserequest.class';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

  purchaserequest: Purchaserequest = new Purchaserequest();
  users: User[];

  save():void {
    this.purchaserequestsvc.add(this.purchaserequest)
    .subscribe(resp=> {
     console.log("resp",resp);
     this.router.navigateByUrl('/Purchaserequests/List');
    });
  }

  constructor(
    private purchaserequestsvc: PurchaserequestService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersvc.list()
    .subscribe(resp => {
      console.log("Users:", resp);
      this.users = resp.data;
    });
  }
 
}