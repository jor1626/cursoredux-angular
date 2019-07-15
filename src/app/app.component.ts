import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-angular';
  contador: number;

  constructor(private store: Store<AppState>){
    store.subscribe( state => {
      this.contador = state.contador;
    })
    // this.contador = 10;
  }

  incrementar(){
    console.log('entro');
    
    // this.contador += 1;
    const action : Action = {
      type: 'INCREMENTAR'
    };

    this.store.dispatch(action);
  }

  decrementar(){
    // this.contador -= 1;
    const action : Action = {
      type: 'DECREMENTAR'
    };

    this.store.dispatch(action);
  }
}
