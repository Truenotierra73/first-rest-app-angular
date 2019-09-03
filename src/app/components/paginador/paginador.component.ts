import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent implements OnInit {
  @Input() config: any = {};

  @Output() pageSeleccionada: EventEmitter<number>;

  pages: any = [];

  constructor() {
    this.pageSeleccionada = new EventEmitter();
  }

  ngOnInit() {
    this.pages = Array.from(Array(this.config.total_pages).keys()).map( i => i + 1);
  }

  setPage(page: number) {
    this.pageSeleccionada.emit(page);
  }

}
