import { Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
  styleUrl: './dragonball-character-add.component.css',
})
export class DragonballCharacterAddComponent {
  name = signal('')
  power = signal(0)

  addCharacter() {
    if (!this.name() || this.power() <= 0) {
      return
    }
    const newCharacter: Character = {
      id: (1000),
      name: this.name(),
      power: this.power()
    }

    // this.characters.update(list => [...list, newCharacter])
    console.log(newCharacter)
    this.resetFields()

  }
  resetFields() {
    this.name.set('')
    this.power.set(0)
  }

}
