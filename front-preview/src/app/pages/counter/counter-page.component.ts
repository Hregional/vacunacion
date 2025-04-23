import { Component, signal } from "@angular/core";

@Component({
   templateUrl: './counter-page.component.html',
   styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
   counter = 10
   counterSignal = signal(10)

   increaseBy(value: number) {
      this.counterSignal.update((current) => current + value)
   }
   decreaseBy(value: number) {
      this.counterSignal.update((current) => current - value)
   }
   resetCounter() {
      this.counter = 10
      this.counterSignal.set(0)
   }
}