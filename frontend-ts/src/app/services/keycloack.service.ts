// src/app/services/keycloak.service.ts
import Keycloak from 'keycloak-js';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class KeycloakService {
  private static keycloakInstance: Keycloak;

  static init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const keycloak = new Keycloak({
        url: 'http://localhost:8080',        // URL de tu Keycloak
        realm: 'myrealm',                   // Nombre del realm
        clientId: 'vacunas-frontend'              // ID del cliente configurado
      });

      keycloak.init({
        onLoad: 'login-required',
        checkLoginIframe: false
      }).then(authenticated => {
        if (authenticated) {
          this.keycloakInstance = keycloak;
          resolve();
        } else {
          reject('No authenticated');
        }
      }).catch(err => reject(err));
    });
  }

  static getToken(): string | undefined {
    return this.keycloakInstance?.token;
  }

  static logout(): void {
    this.keycloakInstance?.logout();
  }

  static getKeycloakInstance(): Keycloak {
    return this.keycloakInstance;
  }
}
