import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  productCode=""
  productName=""
  manufDate=""
  expDate=""
  brand=""
  price=""
  sellerName=""
  distribName=""
product:any=[{"id":1,"productCode":"123","productName":"Shoes","manufDate":"2020-06-21","expDate":"2025-06-25","brand":"Adidas","price":3000,"sellerName":"ABC","distribName":"XYZ"},{"id":2,"productCode":"456","productName":"Shoes","manufDate":"2018-04-13","expDate":"2023-05-15","brand":"Nike","price":3500,"sellerName":"ABC","distribName":"XYZ"},{"id":3,"productCode":"135","productName":"Watch","manufDate":"2022-07-09","expDate":"2030-05-15","brand":"Titan","price":4000,"sellerName":"ABC","distribName":"XYZ"},{"id":4,"productCode":"678","productName":"Watch","manufDate":"2022-07-12","expDate":"2030-05-08","brand":"Tissot","price":5000,"sellerName":"ABC","distribName":"XYZ"},{"id":52,"productCode":"198","productName":"Shoes","manufDate":"2020-06-21","expDate":"2025-06-25","brand":"Puma","price":4000,"sellerName":"ABC","distribName":"XYZ"}]
}
