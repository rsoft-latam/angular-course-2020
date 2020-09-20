import {createAction, props} from '@ngrx/store';

export const AddProduct = createAction('[HOME]AddProduct', props<{ product: any }>());
export const OpenSidenav = createAction('[HOME]OpenSidenav');
export const CloseSidenav = createAction('[HOME]CloseSidenav');
