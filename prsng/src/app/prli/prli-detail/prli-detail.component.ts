import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrliService } from '../prli.service';
import { Prli } from '../prli.class';

@Component({
  selector: 'app-prli-detail',
  templateUrl: './prli-detail.component.html',
  styleUrls: ['./prli-detail.component.css']
})
export class PrliDetailComponent implements OnInit {

  prli:Prli; 
 
  delete(): void {
    this.prlisvc.remove(this.prli)
    .subscribe(resp=> {
  console.log("resp",resp);
  this.router.navigateByUrl('/prlis/list');
    }); 
  }
   
    constructor(
      private prlisvc: PrliService, 
      private route: ActivatedRoute,
      private router: Router) { 
    }
  
    ngOnInit() {
      // gets the :id from the router
      let id = this.route.snapshot.params.id;
      // get the user from the user service
      this.prlisvc.get(id)
      .subscribe(resp=> {
        console.log("resp: ", resp);
        this.prli = resp.data;
      });
    }
  
  }