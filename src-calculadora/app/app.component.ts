import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadorComponent } from "./calculador/calculador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Aplicacion Calculadora';
}
