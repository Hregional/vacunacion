// src/app/components/mi-boton-material.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-boton-material',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './mi-boton-material.component.html',
  styleUrls: ['./mi-boton-material.component.css']
})
export class MiBotonMaterialComponent {
  contador: number = 0;
  mensaje: string = 'Haz clic para consultar el endpoint protegido';

  constructor(private apiService: ApiService) {}

  incrementarContador() {
    this.contador++;
  }

  consultarProtegido() {
    this.mensaje = 'Consultando...';

    this.apiService.getProtegido().subscribe({
      next: (data) => this.mensaje = JSON.stringify(data),
      error: (err) => this.mensaje = `Error: ${err.status} ${err.message}`
    });
  }
}
