import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPartidasComponent } from './historico-partidas.component';

describe('HistoricoPartidasComponent', () => {
  let component: HistoricoPartidasComponent;
  let fixture: ComponentFixture<HistoricoPartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoPartidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
