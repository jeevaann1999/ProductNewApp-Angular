import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productCode=""
  productName=""
  manufDate=""
  expDate=""
  brand=""
  price=""
  sellerName=""
  distribName=""

  constructor(private api:ApiService){}
  
  readValues=()=>{
    let product:any={
    "productCode":this.productCode,
    "productName":this.productName,
    "manufDate":this.manufDate,
    "expDate":this.expDate,
    "brand":this.brand,
    "price":this.price,
    "sellerName":this.sellerName,
    "distribName":this.distribName
  
  }
  console.log(product)
  this.api.addCourses(product).subscribe(
    (response)=>{
      console.log(response)
    }
  )

  }
}
