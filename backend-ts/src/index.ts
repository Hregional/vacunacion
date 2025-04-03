// src/index.ts
import express, { Request, Response } from 'express';
import { getServerCapabilities } from './services/fhirService';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola desde Express con TypeScript!');
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

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
