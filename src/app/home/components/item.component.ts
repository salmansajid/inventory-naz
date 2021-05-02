import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ToDoActions from '../store/product.action';
import { ToDoHttpService } from '../store/product.httpservice';
import Product from '../store/product.model';
import ToDoState from '../store/product.state';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor(private store: Store<{ todos: ToDoState }>, private service: ToDoHttpService) {
    this.todo$ = store.pipe(select('todos'));

  }

  ngOnInit() {
    this.ToDoSubscription = this.todo$
      .pipe(
        map(x => {
          console.log(x)
          this.Product = x.ToDos;
          this.productError = x.ToDoError;
        })
      )
      .subscribe();

    this.store.dispatch(ToDoActions.BeginGetToDoAction());
  }

  todo$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  Product: Product[] = [];
  name: string = '';
  status: boolean = false;
  brand: string = '';
  amount: number;
  id: string = null
  stockCode: string = '';
  productError = null;
  createToDo() {
    const product: Product = { id: this.id, name: this.name, brand:  this.brand, amount : this.amount, status : this.status, stockCode: this.stockCode };
    if(this.id !=null){
      this.service.updateToDos(product).subscribe(res=>{
        this.store.dispatch(ToDoActions.BeginGetToDoAction());
      })
    }else{
     this.store.dispatch(ToDoActions.BeginCreateToDoAction({ payload: product }));
    }
    
    this.name = '';
    this.brand = '';
    this.brand = '';
    this.stockCode = '';
    this.amount = 0;
    this.id = null;
    this.status = false;
  }

  delete(data){
    this.service.removeToDos(data).subscribe(res=>{
      this.store.dispatch(ToDoActions.BeginGetToDoAction());
    })
  }
  edit(data){
    this.id = data.id;  
    this.name = data.name;
    this.amount = data.amount;
    this.status = data.status;
    this.brand = data.brand;
    this.stockCode = data.stockCode;
    
  }


  ngOnDestroy() {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
}
