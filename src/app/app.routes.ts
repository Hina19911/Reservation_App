import { Routes } from '@angular/router';
import { ReservationForm } from './components/reservation-form/reservation-form';
import { AdminComponent } from './components/admin/admin';

export const routes: Routes = [
  { path: '', component: ReservationForm },
  { path: 'admin', component: AdminComponent }
];