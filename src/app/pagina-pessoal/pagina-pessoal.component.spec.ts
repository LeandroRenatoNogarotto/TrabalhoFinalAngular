import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPessoalComponent } from './pagina-pessoal.component';

describe('PaginaPessoalComponent', () => {
  let component: PaginaPessoalComponent;
  let fixture: ComponentFixture<PaginaPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPessoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
