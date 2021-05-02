import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { ItemComponent } from './home/components/item.component';
import ToDoState, { initializeState } from './home/store/product.state';

describe('AppComponent', () => {
  const initialState = initializeState();
  let store: MockStore<{ todos: ToDoState }>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent, ItemComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
      .then(() => {
        store = TestBed.get<Store<{ todos: ToDoState }>>(Store);
      });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
