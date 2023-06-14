import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from "../product";
import { ProductService } from "../product.service";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  products: Product[] = [];
  createForm : any;

  constructor(public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
  {
    this.createForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      categoryId : [''],
    });

  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  onSubmit(formData : any) {
    this.productService.createProduct(formData.value).subscribe(res => {
      this.router.navigateByUrl('products/list');
    });
  }

}
