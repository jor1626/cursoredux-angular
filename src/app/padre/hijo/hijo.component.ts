import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as contadorActions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  // @Output() cambioContador = new EventEmitter<number>();

  // @Input() contador: number;

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  multiplicar(){
    // this.contador *=  2;
    // this.emitir();
    const action = new contadorActions.MultiplicarAction(2);
    this.store.dispatch(action);
  }

  dividir(){
    // this.contador /= 2;
    // this.emitir();
    const action = new contadorActions.DividirAction(2);

    this.store.dispatch(action);
  }

  emitir(){
    // this.cambioContador.emit(this.contador);
  }

  resetContador(event: number){
    // this.contador = event;
    // this.emitir();
  }

}
