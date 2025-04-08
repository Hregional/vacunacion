import { Component } from '@angular/core';
import { KeycloakService } from '../services/keycloack.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  constructor(private keycloakService: KeycloakService) {}

  onLogout(): void {
    KeycloakService.logout(); // Llamamos al servicio de logout
  }
}
