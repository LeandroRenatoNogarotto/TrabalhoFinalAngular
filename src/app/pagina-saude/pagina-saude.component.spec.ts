import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSaudeComponent } from './pagina-saude.component';

describe('PaginaSaudeComponent', () => {
  let component: PaginaSaudeComponent;
  let fixture: ComponentFixture<PaginaSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaSaudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
