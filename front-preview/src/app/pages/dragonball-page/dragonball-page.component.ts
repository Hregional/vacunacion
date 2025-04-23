import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from '../../components/dragonball/dragonball-character-add/dragonball-character-add.component';


interface Character {
  id: number;
  name: string;
  power: number
}

@Component({
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 7000 },
    { id: 3, name: 'Trunks', power: 7500 },
    { id: 4, name: 'Yamcha', power: 500 }
  ])
}
