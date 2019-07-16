import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as contadorActions from './padre/contador.actions';
import { AppState } from "./app.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-angular';
  contador: number;

  constructor(private store: Store<AppState>){
    // store.subscribe( state => {
    //   this.contador = state.contador;
    // })
    this.store.select('contador').subscribe(contador => this.contador = contador)
    // this.contador = 10;
  }

  incrementar(){
    
    // this.contador += 1;
    // const action : Action = {
    //   type: 'INCREMENTAR'
    // };
    const action = new contadorActions.IncrementarAction();

    this.store.dispatch(action);
  }

  decrementar(){
    // this.contador -= 1;
    // const action : Action = {
    //   type: 'DECREMENTAR'
    // };
    const action = new contadorActions.DecrementarAction();

    this.store.dispatch(action);
  }
}
