import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listproducts: Product[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProduct().subscribe((data: Product[]) => {
      this.listproducts = data;
    });
  }

  deleteProduct(id : any) {
    this.productService.deleteProduct(id).subscribe(res => {
      this.listproducts = this.listproducts.filter(item => item.productId !== id);
    });
  }

}
