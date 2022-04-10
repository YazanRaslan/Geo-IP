import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoIpComponent } from './geo-ip.component';

describe('GeoIpComponent', () => {
  let component: GeoIpComponent;
  let fixture: ComponentFixture<GeoIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeoIpComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
