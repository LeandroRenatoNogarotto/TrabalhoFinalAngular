import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlimentacaoComponent } from './card-alimentacao.component';

describe('CardAlimentacaoComponent', () => {
  let component: CardAlimentacaoComponent;
  let fixture: ComponentFixture<CardAlimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAlimentacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAlimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
