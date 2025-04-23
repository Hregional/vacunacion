import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { PacientPageComponent } from './pages/pacient/pacient-page.component';
import { HomePageComponent } from './pages/home/homePage.component';
import { DragonballPageComponent } from './pages/dragonball-page/dragonball-page.component';
import { VacunasPageComponent } from './pages/vacunas/vacunas-page.component';


export const routes: Routes = [{
    path: '',
    component: HomePageComponent
}, {
    path: 'counter',
    component: CounterPageComponent
},
{
    path: 'hero',
    component: HeroPageComponent
},
{
    path: 'pacient',
    component: PacientPageComponent
},
{
    path: 'vacuna',
    component: VacunasPageComponent
},
{
    path: 'dragonball',
    component: DragonballPageComponent
}, {
    path: '**',
    redirectTo: ''
}];
