import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddProduct, CloseSidenav, DeleteProduct} from './store/home.actions';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  products = [];
  homeSubs: Subscription;
  productSubs: Subscription;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['title', 'price', 'description', 'acciones'];
  sidenavOpen$: Observable<boolean>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<any>,
              private productService: ProductService) {

  }

  ngOnInit(): void {
    this.loadProducts();
    this.sidenavOpen$ = this.store.select(s => s.home.sidenavOpen);
    this.homeSubs = this.store.select(s => s.home).subscribe(res => this.dataSource = Object.assign([], res.items));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.homeSubs ? this.homeSubs.unsubscribe() : '';
  }

  loadProducts(): void {
    this.products = [];
    this.homeSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onComprar(product): void {
    this.store.dispatch(AddProduct({product: Object.assign({}, product)}));
  }

  onDelete(product): void {
    this.store.dispatch(DeleteProduct({product: product}));
  }

  onClose(): void {
    this.store.dispatch(CloseSidenav());
  }

}
