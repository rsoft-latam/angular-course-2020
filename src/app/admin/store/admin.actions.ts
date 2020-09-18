import {createAction, props} from '@ngrx/store';

export const GetReport = createAction('[ADMIN]GetReport', props<{ vaccinated: number, notVaccinated: number }>());




