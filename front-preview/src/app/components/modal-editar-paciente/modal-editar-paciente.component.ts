import { Component, EventEmitter, Output, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-modal-editar-paciente',
  templateUrl: './modal-editar-paciente.component.html',
})
export class ModalEditarPacienteComponent {

  nameInput = input<string>('');
  cuiInput = input<string>('');
  fechaNacimientoInput = input<string>('');
  direccionInput = input<string>('');
  telefonoInput = input<string>('');

  // ✨ Signals locales editables
  name = signal('');
  cui = signal('');
  fechaNacimiento = signal('');
  direccion = signal('');
  telefono = signal('');

  @Output() pacienteEditado = new EventEmitter<any>();

  ngOnInit() {
    this.name.set(this.nameInput());
    this.cui.set(this.cuiInput());
    this.fechaNacimiento.set(this.fechaNacimientoInput());
    this.direccion.set(this.direccionInput());
    this.telefono.set(this.telefonoInput());
  }

  guardarCambios() {
    this.pacienteEditado.emit({
      name: this.name(),
      cui: this.cui(),
      fechaNacimiento: this.fechaNacimiento(),
      direccion: this.direccion(),
      telefono: this.telefono()
    });
  }
}
