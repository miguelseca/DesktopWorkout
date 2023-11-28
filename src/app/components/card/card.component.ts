import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EXERCISES } from '../../../assets/data/exercises'
import { Exercise } from 'src/models/Exercise';

@Component({
   selector: 'app-card',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  
   @Input()
   exerciseNumber!: number

   exercise!: Exercise;


   ngOnInit(): void {
   this.exercise = EXERCISES[this.exerciseNumber]
   
    console.log(this.exercise.imageURL );

   }




}
