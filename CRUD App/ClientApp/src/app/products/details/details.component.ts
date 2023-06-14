import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  productResult: Product;

  constructor(public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    this.productService.getProductbyId(this.id).subscribe((data: Product) => {
      this.productResult = data;
      console.log(this.productResult.productName);
    });
  }
  }
