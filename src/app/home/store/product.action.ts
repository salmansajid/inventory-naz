import { createAction, props } from '@ngrx/store';
import Product from './product.model';

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const CreateToDoAction = createAction(
  '[ToDo] - Create ToDo',
  props<Product>()
);

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SuccessGetToDoAction = createAction(
  '[ToDo] - Sucess Get ToDo',
  props<{ payload: Product[] }>()
);

export const BeginCreateToDoAction = createAction(
  '[ToDo] - Begin Create ToDo',
  props<{ payload: Product }>()
);

export const SuccessCreateToDoAction = createAction(
  '[ToDo] - Sucess Create ToDo',
  props<{ payload: Product }>()
);


export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());
