import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
    Avremo in input un array per identificare i bottoni che possono essere premuti
    Un output per emmettere il nome del bottone
    Una funzione associata a un click
  */

  @Input() headerNames: String[];

  @Output() buttonClicked = new EventEmitter<String>();

  simpleFunction(arg: String) {
    this.buttonClicked.emit(arg);
  }


}
