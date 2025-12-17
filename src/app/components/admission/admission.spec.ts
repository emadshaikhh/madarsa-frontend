import { ComponentFixture, TestBed } from '@angular/core/testing';

// ✅ CORRECT IMPORT: The class name is AdmissionComponent
import { AdmissionComponent } from './admission'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Helper for testing services

describe('AdmissionComponent', () => {
  let component: AdmissionComponent;
  let fixture: ComponentFixture<AdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Import the component properly
      imports: [AdmissionComponent, HttpClientTestingModule] 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});