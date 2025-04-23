import { Component, EventEmitter, Output } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-modal-vacuna',
  templateUrl: './modal-vacuna.component.html',
  styleUrls: ['./modal-vacuna.component.css']
})
export class ModalVacunaComponent {
  // Define signals for each form field

  // cuiPersona = signal('')
  tipoDeVacuna = signal('');
  fechaDeAplicacion = signal('');
  loteDeVacuna = signal('');
  nombreDelMedico = signal('');

  // Output to notify the parent when a new vacuna is added
  @Output() vacunaAgregada = new EventEmitter<any>();

  // Function to check if the form is valid
  isFormValid(): boolean {
    if (this.tipoDeVacuna() && this.fechaDeAplicacion() && this.loteDeVacuna() && this.nombreDelMedico()) {
      return true
    };
    return false
  }

  // Function to add a new vacuna (to emit the data to the parent)
  addVacuna() {
    if (this.isFormValid()) {
      const newVacuna = {
        tipoDeVacuna: this.tipoDeVacuna(),
        // cuiPersona: this.cuiPersona(),
        fechaDeAplicacion: this.fechaDeAplicacion(),
        loteDeVacuna: this.loteDeVacuna(),
        nombreDelMedico: this.nombreDelMedico(),
      };

      // Emit the new vacuna data to the parent component
      this.vacunaAgregada.emit(newVacuna);

      // Clear the form fields after submission
      this.resetFields();
    }
  }

  // Reset the form fields
  resetFields() {
    this.tipoDeVacuna.set('');
    this.fechaDeAplicacion.set('');
    this.loteDeVacuna.set('');
    this.nombreDelMedico.set('');
  }
}
