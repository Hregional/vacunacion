// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { KeycloakService } from './app/services/keycloack.service';

KeycloakService.init()
  .then(() => {
    return bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err: unknown) => {
    console.error('Keycloak initialization failed', err);
  });

