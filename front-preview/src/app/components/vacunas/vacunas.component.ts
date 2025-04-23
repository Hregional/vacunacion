import { Component, EventEmitter, input, Output, signal } from '@angular/core';
import { Vacuna } from '../../interfaces/vacuna.interface';
import { ModalVacunaComponent } from '../modal-vacuna/modal-vacuna.component';

@Component({
  selector: 'app-vacunas',
  imports: [ModalVacunaComponent],
  templateUrl: './vacunas.component.html',
  styleUrl: './vacunas.component.css'
})
export class VacunasComponent {
  vacunas = input.required<Vacuna[]>()
  @Output() vacunaAgregada = new EventEmitter<Vacuna>();
  id = signal(7);
  cuiPersona = signal('');
  tipoDeVacuna = signal('');
  fechaDeAplicacion = signal('');
  loteDeVacuna = signal('');
  nombreDelMedico = signal('')

  handleVacunaAgregada(vacunaParcial: Omit<Vacuna, | 'cuiPersona'>) {
    console.log('Nueva vacuna agregada:', vacunaParcial);
    const nuevaVacuna: Vacuna = {
      cuiPersona: this.cuiPersona(),
      ...vacunaParcial
    };
    this.agregandoVacuna(nuevaVacuna)
  }

  ngOnInit() {
    const first = this.vacunas()[0];
    if (first) {
      this.cuiPersona.set(first.cuiPersona);
    }
  }

  agregandoVacuna(vacuna: Vacuna) {
    if (!this.id()) {
      return
    }

    this.vacunaAgregada.emit(vacuna);
    this.resetFields()
  }

  resetFields() {
    this.tipoDeVacuna.set('')
    this.fechaDeAplicacion.set('')
    this.loteDeVacuna.set('')
    this.nombreDelMedico.set('')
  }
}
