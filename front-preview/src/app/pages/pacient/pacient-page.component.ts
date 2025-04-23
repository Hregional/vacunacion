import { Component, computed, signal } from "@angular/core";
import { VacunasComponent } from "../../components/vacunas/vacunas.component";
import { Vacuna } from "../../interfaces/vacuna.interface";
import { ModalEditarPacienteComponent } from "../../components/modal-editar-paciente/modal-editar-paciente.component";

interface Pacient {
    name: string
    cui: string
    fechaNacimiento: string
    direccion: string
    telefono: string
}

@Component({
    templateUrl: './pacient-page.component.html',
    styles: ['dd { font-size: 20px; font-weight:bold }', '.campo-col{width: 38%}'],
    imports: [VacunasComponent, ModalEditarPacienteComponent]
})
export class PacientPageComponent {
    name = signal('Franciso Alejandro Perez Juarez')
    cui = signal("2416268540901")
    fechaNacimiento = signal('02/12/1990')
    direccion = signal('3 calle 2-32 zona 3 quetzaltenango')
    telefono = signal('56847458')

    editarPaciente(data: Pacient) {
        this.name.set(data.name);
        this.cui.set(data.cui);
        this.fechaNacimiento.set(data.fechaNacimiento);
        this.direccion.set(data.direccion);
        this.telefono.set(data.telefono);
    }

    agregarVacuna(vacuna: Vacuna) {
        this.vacunas.update(list => [...list, vacuna]);
    }

    changeHero() {
        this.name = signal('Reyna Roxana Flores Cua')
        this.cui = signal("3234541230901")
        this.fechaNacimiento = signal('10/03/2003')
        this.direccion = signal('5 calle 5-23 zona 5 san carlos sija')
        this.telefono = signal('44323412')
    }

    resetForm() {
        this.name = signal('Franciso Alejandro Perez Juarez')
        this.cui = signal("2416268540901")
        this.fechaNacimiento = signal('02/12/1990')
        this.direccion = signal('3 calle 2-32 zona 3 quetzaltenango')
        this.telefono = signal('56847458')
    }

    vacunas = signal<Vacuna[]>([
        { id: 1, cuiPersona: this.cui(), tipoDeVacuna: 'Moderna', fechaDeAplicacion: 'antier', loteDeVacuna: '12/02/2024', nombreDelMedico: 'ricardo' },
        { id: 2, cuiPersona: this.cui(), tipoDeVacuna: 'Pfizer', fechaDeAplicacion: 'antier', loteDeVacuna: '12/02/2024', nombreDelMedico: 'ricardo butragueno' },
    ])
}