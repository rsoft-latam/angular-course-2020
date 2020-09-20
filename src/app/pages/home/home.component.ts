import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddProduct, CloseSidenav} from './store/home.actions';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  products = [];

  productSubs: Subscription;

  homeSubs: Subscription;

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['title', 'price', 'description'];

  sidenavOpen$: Observable<boolean>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<any>,
              private productService: ProductService) {

  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

    this.sidenavOpen$ = this.store.select(s => s.home.sidenavOpen);

    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      this.dataSource = Object.assign([], res.items);
    });

    this.productSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map(p => this.products.push(p[1]));
    });

  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.homeSubs ? this.homeSubs.unsubscribe() : '';
  }

  onComprar(product): void {
    this.store.dispatch(AddProduct({product: Object.assign({}, product)}));
  }

  onClose(): void {
    this.store.dispatch(CloseSidenav());
  }

}
