import { Routes } from '@angular/router';

// --- OLD FILES (Use the short names) ---
// If these lines stay red, try adding 'Component' to the end, but usually these are just 'Home', 'About'
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Courses } from './components/courses/courses';
import { Teacher } from './components/teacher/teacher';
import { Timetable } from './components/timetable/timetable';
import { Contact } from './components/contact/contact';
import { Donate } from './components/donate/donate';
import { Gallery } from './components/gallery/gallery';

// --- NEW FILES (Use the long names) ---
import { AdmissionComponent } from './components/admission/admission'; 
import { AdminComponent } from './components/admin/admin';         

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' }, // Use Home
  { path: 'about', component: About },              // Use About
  { path: 'courses', component: Courses },          // Use Courses
  { path: 'teacher', component: Teacher },
  { path: 'timetable', component: Timetable },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'donate', component: Donate },
  
  // These two use the NEW names
  { path: 'admission', component: AdmissionComponent },
  { path: 'admin', component: AdminComponent }
];