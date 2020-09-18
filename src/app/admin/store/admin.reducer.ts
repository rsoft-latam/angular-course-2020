import {Action, createReducer, on} from '@ngrx/store';
import {GetReport} from './admin.actions';

export interface HomeState {
  vaccinated: number;
  notVaccinated: number;
}

export const initialState: HomeState = {
  vaccinated: 0,
  notVaccinated: 0
};

const featureReducer = createReducer(
  initialState,
  on(GetReport, (state, {vaccinated, notVaccinated}) => ({vaccinated: vaccinated, notVaccinated: notVaccinated}))
);


export function reducer(state: HomeState, action: Action): any {
  return featureReducer(state, action);
}
