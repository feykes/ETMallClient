import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService:HttpClientService) {
    super(spinner);
    
  }
  ngOnInit(): void {
    // this.showSpinner(SpinnerType.BallFusion);
    // this.httpClientService.get<Create_Product[]>({
    //   controller:"products"
    // }).subscribe(data=>console.log(data));

    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name:"Kalem",
    //   stock:100,
    //   price:15
    // }).subscribe();

  //   this.httpClientService.put({
  //     controller:"products"
  //   },{
  //     id:"c2676603-358d-44db-8358-3458672e747b",
  //     name:"Renkli Kağıt",
  //     stock:1001,
  //     price:5.5
  //   }).subscribe();

  //   this.httpClientService.delete({
  //     controller:"products"
  //   },"c2676603-358d-44db-8358-3458672e747b").subscribe();

      // this.httpClientService.get({
      //   baseUrl:"https://jsonplaceholder.typicode.com",
      //   controller:"posts"
      // }).subscribe(data=> console.log(data));

      // this.httpClientService.get({
      //   fullEndPoint:"https://jsonplaceholder.typicode.com/posts",
      // }).subscribe(data=> console.log(data));
    }
}
