import Product from './product.model';

export default class ToDoState {
  ToDos: Array<Product>;
  ToDoError: Error;
}

export const initializeState = (): ToDoState => {
  return { ToDos: Array<Product>(), ToDoError: null };
};
