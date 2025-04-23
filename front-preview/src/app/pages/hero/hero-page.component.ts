import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styles: ['dd { font-size: 20px; font-weight:bold }'],
    imports: [UpperCasePipe]
})
export class HeroPageComponent {
    name = signal('Ironman')
    age = signal(45)

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`
        return description
    })

    changeHero() {
        this.name.set('Spiderman')
        this.age.set(22)
    }
    changeAge() {
        this.age.set(60)
    }
    resetForm() {
        this.name.set('Ironman')
        this.age.set(45)
    }
}