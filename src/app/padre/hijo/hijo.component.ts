import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Output() cambioContador = new EventEmitter<number>();

  @Input() contador: number;

  constructor() { }

  ngOnInit() {
  }

  multiplicar(){
    this.contador *=  2;
  }

  dividir(){
    this.contador /= 2;
  }

  emitir(){
    this.cambioContador.emit(this.contador);
  }

  resetContador(event: number){
    this.contador = event;
    this.cambioContador.emit(this.contador);
  }

}
