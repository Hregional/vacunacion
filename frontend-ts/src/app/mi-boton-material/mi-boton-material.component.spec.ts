import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBotonMaterialComponent } from './mi-boton-material.component';

describe('MiBotonMaterialComponent', () => {
  let component: MiBotonMaterialComponent;
  let fixture: ComponentFixture<MiBotonMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiBotonMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiBotonMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
