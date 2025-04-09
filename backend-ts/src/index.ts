// src/index.ts
import express, { Request, Response } from 'express';
import { getServerCapabilities, createPatient } from './services/fhirService';
import session from 'express-session';
import Keycloak from 'keycloak-connect';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

const app = express();
const memoryStore = new session.MemoryStore();
const port = 3000;

app.use(session({
  secret: 'mi-secreto', // Cambia esto por algo seguro
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
}));

// Habilitar CORS para todos los orígenes (ajusta según necesites)
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const keycloakConfig = {
  'confidential-port': 0,
  'auth-server-url': process.env.KEYCLOAK_URL || 'http://default-keycloak-url', 
   resource: process.env.KEYCLOAK_CLIENT_ID || 'default-client-id', 
  'ssl-required': 'external',
   realm: process.env.KEYCLOAK_REALM || 'default-realm',
  'bearer-only': true
};


const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

app.use(keycloak.middleware());

app.get('/', (req: Request, res: Response) => {
  console.log("REAlm: ", process.env.KEYCLOAK_REALM);
  res.send('¡Hola desde Express con TypeScript!');
});

app.get('/protegido', keycloak.protect(), (req, res) => {
  res.json({ mensaje: '¡Acceso autorizado!' }); // Esto está bien
});

// Ruta para obtener capacidades
app.get('/fhir/capabilities', async (req: Request, res: Response) => {
  try {
    const capabilities = await getServerCapabilities();
    res.json(capabilities);
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener capacidades del servidor FHIR'
    });
  }
});

app.post('/fhir/patient', async (req: Request, res: Response) => {
  try{
    // Construct the FHIR Patient resource

    const patientResource = {
      resourceType: 'Patient',
      name: [
        {
          given: "Juanito",
          family: "Perez",
        }
      ],
    }

    // Call the FHIR service to create the patient
    const createdPatient = await createPatient(patientResource);
    res.status(201).json(createdPatient);
  }catch (error) {
    res.status(500).json({
      error: 'Error al crear paciente'
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
