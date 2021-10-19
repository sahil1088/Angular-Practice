import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl : './new.component.html',

  styleUrls: ['./new.component.css']
})
export class NewComponent {

  total=0;
  added:any[]=[];
  products=[
    {brand:"Samsung",price:20,image:"samsumg.jpg",discount:2,quantity:20,add:0,am:0,tot:0}
    ,{brand:"Apple",price:50,image:"apple.jpg",discount:3,quantity:10,add:0,am:0,tot:0}
    ,{brand:"Blackberry",price:40,image:"bb.jpg",discount:2,quantity:25,add:0,am:0,tot:0}
    ,{brand:"LG",price:70,image:"lg.jpg",discount:10,quantity:5,add:0,tot:0,am:0}
  ];


  Update(pdt:any){
    if(pdt.quantity==0){
      return ;
    }
    pdt.quantity=pdt.quantity-1;
    pdt.add=pdt.add+1;
    pdt.am=( (pdt.add)*(pdt.price) ) - ( ( (pdt.price)*(pdt.discount) )/100 );
    //$scope.total=(pdt.am+parseInt($scope.total)).toFixed(2);
    //$scope.added[pdt.brand]=pdt;
    this.total=(pdt.am+this.total).toFixed(2);
    this.added[pdt.brand]=pdt;
    //  console.log(pdt);
  }


}
