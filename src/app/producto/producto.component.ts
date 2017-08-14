import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  Valor = 'Estas en la pagina de productos';
  constructor(private titleService: Title) {
    this.titleService.setTitle('Productos');
  }

  ngOnInit() {
  }

}
