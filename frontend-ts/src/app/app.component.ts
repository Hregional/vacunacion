import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiBotonMaterialComponent } from './mi-boton-material/mi-boton-material.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiBotonMaterialComponent, LogoutButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-proyecto-material';
}
