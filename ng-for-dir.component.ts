import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-ng-for-dir',
  templateUrl: './ng-for-dir.component.html',
  styleUrls: ['./ng-for-dir.component.css']
})
export class NgForDirComponent implements OnInit {
  pro:Product[]=[];
  constructor() { 
    this.pro=[
      new Product(1,"Product1",1500),
      new Product(2,"Product2",2500),
      new Product(3,"Product3",3500),
      new Product(4,"Product4",4500),
      new Product(5,"Product5",5500)

    ]
  }

  ngOnInit(): void {
  }

}
