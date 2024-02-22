import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from 'src/app/models/Exercise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
  @Input()
  exercise!: Exercise;

  @Output('exerciseSelected')
  exerciseSelected = new EventEmitter<Exercise>();

  constructor(private router: Router) {
  }
  
  onSelectDetails() {
    this.exerciseSelected.emit(this.exercise);
 }

}
