# 🛡️ Proyecto Vacunas - Frontend y Backend con Keycloak

Este proyecto contiene dos aplicaciones:

- `frontend-ts/`: Aplicación Angular para el cliente
- `backend-ts/`: API RESTful con Express (Node.js)
  
Ambas integradas con **Keycloak** como proveedor de autenticación.

---  

## 🚀 Requisitos

- Node.js (v18 o superior recomendado)
- Angular CLI (`npm install -g @angular/cli`)
- Docker y Docker Compose (opcional para despliegue más sencillo)
- Keycloak (puedes usar el contenedor oficial)

---

## 📁 Estructura del proyecto

```
/project-root
├── backend-ts/
│   ├── src/
│   ├── .env
│   ├── .env.example
│   └── ...
├── frontend-ts/
│   ├── src/
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.example.ts
│   └── ...
└── docker-compose.yml (opcional)
```

---

## 🛠️ Backend - Configuración y ejecución

### 1. Entrar al directorio del backend

```bash
cd backend-ts
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo de ejemplo y ajústalo:

```bash
cp .env.example .env
```

Edita `.env` con tus datos de Keycloak y configuración local:

```env
PORT=3000
KEYCLOAK_URL=http://localhost:8080
REALM=myrealm
KEYCLOAK_CLIENT_ID=vacunas-backend
```

### 4. Ejecutar el servidor

```bash
npm run dev
```

El backend estará disponible en: `http://localhost:3000`

---

## 🧩 Frontend - Configuración y ejecución

### 1. Entrar al directorio del frontend

```bash
cd frontend-ts
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar entorno de Angular

Copia el archivo de ejemplo:

```bash
cp src/environments/environment.example.ts src/environments/environment.ts
```

Edita `src/environments/environment.ts` con tu configuración local:

```ts
export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:8080',
    realm: 'myrealm',
    clientId: 'vacunas-frontend'
  },
  apiUrl: 'http://localhost:3000'
};
```

### 4. Ejecutar el frontend

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200`

---

## 🔐 Keycloak

Asegúrate de tener configurado un servidor Keycloak accesible en:

```
http://localhost:8080
```

Con los siguientes valores:

- **Realm**: `myrealm`
- **Client (frontend)**: `vacunas-frontend` (public, login-required)
- **Client (backend)**: `vacunas-backend` (confidential, bearer-only)
- **CORS habilitado** en el cliente del backend (para permitir solicitudes desde `http://localhost:4200`)

---

## 🐳 Docker Compose (opcional)

Próximamente: archivo `docker-compose.yml` para levantar todo el stack automáticamente (Keycloak + Backend + Frontend).

---

## 🧼 Buenas prácticas

- No hagas `commit` del archivo `environment.ts` o `.env`
- Usa `environment.example.ts` y `.env.example` como plantillas
- Reinicia el backend si cambias variables del `.env`

---

¡Listo! 🚀 Ya puedes comenzar a trabajar en la aplicación protegida con Keycloak.