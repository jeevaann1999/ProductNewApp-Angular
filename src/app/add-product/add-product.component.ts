import { Component } from '@angular/core';

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

  }
}
