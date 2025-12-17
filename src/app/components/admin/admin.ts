import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AdmissionService } from '../../services/admission'; // Check this path!

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  studentList: any[] = []; 
  isAuthenticated: boolean = false; 
  enteredPassword: string = '';     
  loginError: boolean = false;      

  // 👇 ADD THIS NEW VARIABLE (Tracks if we show text or dots)
  showPassword: boolean = false; 

  constructor(
    private admissionService: AdmissionService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  // 👇 ADD THIS NEW FUNCTION (Flips the switch)
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  attemptLogin() {
    if (this.enteredPassword === 'Emad786') { 
      this.isAuthenticated = true; 
      this.fetchStudents(); 
    } else {
      this.loginError = true; 
    }
  }

  fetchStudents() {
    this.admissionService.getStudents().subscribe({
      next: (data) => {
        this.studentList = data; 
        this.cd.detectChanges(); 
      },
      error: (err) => console.error("Error:", err)
    });
  }
}