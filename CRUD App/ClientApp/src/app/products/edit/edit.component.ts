import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from "../product";
import { ProductService } from "../product.service";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  product: Product;
  //products: Product[] = [];
  editForm : any;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder)
  { 
    this.editForm = this.formBuilder.group({
      productId: [''],
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      categoryId: [''],
    });
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['productId'];

    this.productService.getProductbyId(this.id).subscribe((data: Product) => {
      this.product = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData : any) {
    this.productService.updateProduct(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('products/list');
    });
  }

}
