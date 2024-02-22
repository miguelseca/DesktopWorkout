import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component'
import { EXERCISES } from '../../../assets/data/exercises'
import { Exercise } from 'src/app/models/Exercise'

@Component({
   selector: 'app-cardlist',
   standalone: true,
   imports: [CommonModule, SmallCardComponent],
   templateUrl: './cardlist.component.html',
   styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent {
   EXERCISES: Exercise[] = EXERCISES

   constructor() {
      console.log(this.EXERCISES)
   }

   

   onExerciseSelected($event: any) {
      console.log('selecionado')
   }
}
