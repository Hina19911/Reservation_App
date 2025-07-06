import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { Area } from '../../model/area.model';
import { CommonModule } from '@angular/common';
import { Reservation } from '../../model/reservation.model';

@Component({
  standalone: true, 
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.html',
  styleUrls: ['./reservation-form.scss']
})
export class ReservationForm implements OnInit {
  reservationForm!: FormGroup;

  areas: Area[] = [
    { id: 1, name: 'Forest Hills' },
    { id: 2, name: 'Lakeside Park' },
    { id: 3, name: 'Mountain Trail' },
    { id: 4, name: 'River Bend' }
  ];

  timeSlots: string[] = ['09:00', '12:00', '15:00', '18:00'];

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      areaId: [null, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation).subscribe(() => {
        alert('Reservation added!');
        this.reservationForm.reset();
      });
    }
  }
}
