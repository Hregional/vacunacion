import { Component, signal } from '@angular/core';


interface Vacuna {
  id: number;
  cuiPersona: string;
  tipoDeVacuna: string;
  fechaDeAplicacion: string;
  loteDeVacuna: string,
  nombreDelMedico: string,
}

@Component({
  imports: [],
  templateUrl: './vacunas-page.component.html',
  styleUrl: './vacunas-page.component.css'
})
export class VacunasPageComponent {

  id = signal(7);
  cuiPersona = signal('');
  tipoDeVacuna = signal('');
  fechaDeAplicacion = signal('');
  loteDeVacuna = signal('');
  nombreDelMedico = signal('')

  addVacuna() {
    if (!this.id() || this.cuiPersona() <= '0') {
      return
    }
    const newVacuna: Vacuna = {
      id: this.vacunas().length + 1,
      cuiPersona: this.cuiPersona(),
      tipoDeVacuna: this.tipoDeVacuna(),
      fechaDeAplicacion: this.fechaDeAplicacion(),
      loteDeVacuna: this.loteDeVacuna(),
      nombreDelMedico: this.nombreDelMedico()
    }

    this.vacunas.update(list => [...list, newVacuna])
    this.resetFields()

  }
  resetFields() {
    this.cuiPersona.set('')
    this.tipoDeVacuna.set('')
    this.fechaDeAplicacion.set('')
    this.loteDeVacuna.set('')
    this.nombreDelMedico.set('')
  }

  vacunas = signal<Vacuna[]>([
    { id: 1, cuiPersona: '123456', tipoDeVacuna: 'Moderna', fechaDeAplicacion: 'antier', loteDeVacuna: '12/02/2024', nombreDelMedico: 'ricardo' },
    { id: 2, cuiPersona: '123456', tipoDeVacuna: 'Pfizer', fechaDeAplicacion: 'antier', loteDeVacuna: '12/02/2024', nombreDelMedico: 'ricardo butragueno' },
  ])
}
