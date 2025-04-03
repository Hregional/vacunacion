import Client from 'fhir-kit-client';


// Crear una instancia del cliente FHIR
const fhirClient = new Client({ baseUrl: 'http://hapi.fhir.org/baseR4' });

// Obtener características del servidor FHIR
// Obtener el CapabilityStatement
// Función reusable para obtener capacidades
export const getServerCapabilities = async () => {
    try {
      return await fhirClient.capabilityStatement();
    } catch (error) {
      console.error('FHIR Capabilities Error:', error);
      throw new Error('Error fetching server capabilities');
    }
  };