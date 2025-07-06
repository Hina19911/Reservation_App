import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../model/reservation.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin',
  standalone: true, // ✅
  imports: [CommonModule], // ✅ For *ngFor
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  // Get all reservations from REST API
  loadReservations(): void {
    this.reservationService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }
}
