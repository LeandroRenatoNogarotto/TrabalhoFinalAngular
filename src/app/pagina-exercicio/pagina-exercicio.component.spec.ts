import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExercicioComponent } from './pagina-exercicio.component';

describe('PaginaExercicioComponent', () => {
  let component: PaginaExercicioComponent;
  let fixture: ComponentFixture<PaginaExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaExercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
