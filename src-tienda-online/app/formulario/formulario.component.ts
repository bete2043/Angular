import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  descripcionInput : string = '';
  precioInput : number | null = null;

  constructor(private productoService : ProductoService){}

  agregaProducto(evento : Event) {
    evento.preventDefault();
    if(this.descripcionInput.trim () === '' || this.precioInput == null || this.precioInput<=0){
      console.log("Debe ingresaruna descripcion y un precio validos");
      return;
    }

    const producto = new Producto(this.descripcionInput,this.precioInput);

    this.productoService.agregarProducto(producto);

    this.descripcionInput='';
    this.precioInput= null;
  }

}
