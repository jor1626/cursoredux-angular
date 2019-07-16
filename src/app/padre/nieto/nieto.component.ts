import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as contadorActions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  // @Output() contadorCambio = new EventEmitter<number>();

  // @Input() contador: number;

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  reset(){
    const action = new contadorActions.ResetAction();

    this.store.dispatch(action);
    // this.contador = 0;
    // this.contadorCambio.emit(0);
  }

}
