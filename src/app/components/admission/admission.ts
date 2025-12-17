import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// ✅ FIX: Correct import path for the service
import { AdmissionService } from '../../services/admission'; 

@Component({
  selector: 'app-admission',
  standalone: true,
  // ✅ Note: We removed HttpClientModule because we added provideHttpClient() in app.config.ts
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './admission.html',
  styleUrl: './admission.css'
})
export class AdmissionComponent {
  admissionForm: FormGroup;
  successMessage: string = ''; // To show user it worked

  // Inject the AdmissionService here
  constructor(private fb: FormBuilder, private admissionService: AdmissionService) {
    this.admissionForm = this.fb.group({
      studentName: ['', Validators.required],
      fatherName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['male', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      class: ['nursery', Validators.required]
    });
  }

  onSubmit() {
    if (this.admissionForm.valid) {
      console.log('Sending data to backend...');

      // CALL THE SERVICE HERE
      this.admissionService.submitAdmissionForm(this.admissionForm.value).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.successMessage = 'Application Submitted Successfully!';
          this.admissionForm.reset(); // Clear the form
        },
        error: (error) => {
          console.error('Error:', error);
          this.successMessage = 'Something went wrong. Is the server running?';
        }
      });

    } else {
      this.admissionForm.markAllAsTouched();
    }
  }
}