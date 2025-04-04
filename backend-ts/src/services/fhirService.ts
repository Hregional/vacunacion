import Client from 'fhir-kit-client';


const fhirClient = new Client({ baseUrl: 'http://hapi.fhir.org/baseR4' });

// Function to get server capabilities
export const getServerCapabilities = async () => {
    try {
      return await fhirClient.capabilityStatement();
    } catch (error) {
      console.error('FHIR Capabilities Error:', error);
      throw new Error('Error fetching server capabilities');
    }
  };

// CRUD operations for Patient resource

export const createPatient = async (patientData: any) => {
    try {
        return await fhirClient.create({ resourceType: 'Patient', body: patientData });
    } catch (error) {
        console.error('Error creating patient:', error);
        throw new Error('Error creating patient');
    }
}

export const readPatient = async (patientId: string) => {
    try {
        return await fhirClient.read({ resourceType: 'Patient', id: patientId });
    } catch (error) {
        console.error('Error reading patient:', error);
        throw new Error('Error reading patient');
    }
}

export const updatePatient = async (patientId: string, patientData: any) => {
    try {
        return await fhirClient.update({ resourceType: 'Patient', id: patientId, body: patientData });
    } catch (error) {
        console.error('Error updating patient:', error);
        throw new Error('Error updating patient');
    }
}

export const deletePatient = async (patientId: string) => {
    try {
        return await fhirClient.delete({ resourceType: 'Patient', id: patientId });
    } catch (error) {
        console.error('Error deleting patient:', error);
        throw new Error('Error deleting patient');
    }
}


// CRUD operations for Inmunization resource
export const createInmunization = async (inmunizationData: any) => {
    try {
        return await fhirClient.create({ resourceType: 'Immunization', body: inmunizationData });
    } catch (error) {
        console.error('Error creating inmunization:', error);
        throw new Error('Error creating inmunization');
    }
}

export const readInmunization = async (inmunizationId: string) => {
    try {
        return await fhirClient.read({ resourceType: 'Immunization', id: inmunizationId });
    } catch (error) {
        console.error('Error reading inmunization:', error);
        throw new Error('Error reading inmunization');
    }
}
export const updateInmunization = async (inmunizationId: string, inmunizationData: any) => {
    try {
        return await fhirClient.update({ resourceType: 'Immunization', id: inmunizationId, body: inmunizationData });
    } catch (error) {
        console.error('Error updating inmunization:', error);
        throw new Error('Error updating inmunization');
    }
}
export const deleteInmunization = async (inmunizationId: string) => {
    try {
        return await fhirClient.delete({ resourceType: 'Immunization', id: inmunizationId });
    } catch (error) {
        console.error('Error deleting inmunization:', error);
        throw new Error('Error deleting inmunization');
    }
}