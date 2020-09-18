import {ActionReducerMap} from '@ngrx/store';

import * as fromAdmin from '../admin/store/admin.reducer';

export const reducers: ActionReducerMap<any> = {
  admin: fromAdmin.reducer
};
