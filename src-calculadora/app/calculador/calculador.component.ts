import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ResultadoComponent } from "../resultado/resultado.component";

@Component({
  selector: 'app-calculador',
  standalone: true,
  imports: [FormsModule, FormularioComponent, ResultadoComponent],
  templateUrl: './calculador.component.html',
  styleUrl: './calculador.component.css'
})
export class CalculadorComponent {

  resultadoPadre: number = 0;

  procesarResultado(resultadoHijo: number) {
    this.resultadoPadre=resultadoHijo;
  }

}
