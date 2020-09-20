import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit, OnDestroy {

  createActive: boolean;
  products = [];
  productForm: FormGroup;
  idEdit: any;
  openSidenav$ = new BehaviorSubject<boolean>(false);

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadProduct();

    this.productForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });

  }

  loadProduct(): void {
    this.products = [];
    const userId = this.authService.getUserId();
    this.productGetSubs = this.productService.getProductsById(userId).subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onAdd(): void {
    this.productForm.reset();
    this.createActive = true;
    this.openSidenav();
  }

  onEdit(product): void {
    this.createActive = false;
    this.openSidenav();
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(() => this.loadProduct());
  }

  onUpdate(): void {
    this.productUpdateSubs = this.productService.updateProduct(
      this.idEdit,
      {...this.productForm.value, ownerId: this.authService.getUserId()}
    ).subscribe(() => {
      this.loadProduct();
      this.closeSidenav();
    });
  }

  onCreate(): void {
    this.productSubs = this.productService.addProduct({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(() => {
      this.loadProduct();
      this.closeSidenav();
    });
  }

  openSidenav(): void {
    this.openSidenav$.next(true);
  }

  closeSidenav(): void {
    this.openSidenav$.next(false);
  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }

}
