import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrliService } from '../prli.service';
import { Prli } from '../prli.class';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})
export class PrliEditComponent implements OnInit {

  prli: Prli;

  save():void {
    this.prlisvc.change(this.prli)
    .subscribe(resp=> {
     console.log("resp",resp);
     this.router.navigateByUrl('/prlis/list');
    });
  }
  
  constructor(
    private prlisvc: PrliService,
    private route:ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.prlisvc.get(id)
    .subscribe(resp=> {
      console.log("resp: ", resp);
      this.prli = resp.data;
    });
  }

}