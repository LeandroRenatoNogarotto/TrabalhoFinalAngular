import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlimentacaoComponent } from './pagina-alimentacao.component';

describe('PaginaAlimentacaoComponent', () => {
  let component: PaginaAlimentacaoComponent;
  let fixture: ComponentFixture<PaginaAlimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAlimentacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAlimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
