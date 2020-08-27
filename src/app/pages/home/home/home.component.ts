import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {

    this.products = this.productService.getProducts();

  }

}
