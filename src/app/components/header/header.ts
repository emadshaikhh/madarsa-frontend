import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for [class.active]
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  // Variable to track if menu is open
  isMenuOpen: boolean = false;

  // Function to toggle menu open/close
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Function to close menu when a link is clicked
  closeMenu() {
    this.isMenuOpen = false;
  }
}