import { Component, OnInit } from '@angular/core';
import { PrliService } from '../prli.service';
import { Prli } from '../prli.class';

@Component({
  selector: 'app-prli-list',
  templateUrl: './prli-list.component.html',
  styleUrls: ['./prli-list.component.css']
})
export class PrliListComponent implements OnInit {

  prlis: Prli[];

  constructor(private prlisvc: PrliService) { }

  ngOnInit() {
    this.prlisvc.list()
      .subscribe(resp=> {
        console.log("Purchase request line items:",resp.data);
        this.prlis = resp.data;
      });
  }
  
} 