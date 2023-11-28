import { AfterViewInit, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { CardComponent } from './components/card/card.component'
import { EXERCISES } from '../assets/data/exercises'
import { Exercise } from 'src/models/Exercise'

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [CommonModule, RouterOutlet, CardComponent],
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
   title = 'Desktop Workout'
   options = ['Option X', 'Option Y', 'Option Z']
   minutes: number = 0
   sound: string = ''
   showCard: boolean = false
   isTheAlarmeSet: boolean = false
   workoutInterval!: any
   EXERCISES: Exercise[] = EXERCISES;
   exerciseNumber: number = 0
   exercise!: Exercise;

   public constructor() {}
   ngAfterViewInit(): void {}
   ngOnInit(): void {


   console.log(this.EXERCISES);
   console.log(this.EXERCISES.length);

   this.exercise = EXERCISES[this.exerciseNumber];


   }

   setAlarm(sound: string, minutes: string) {
      this.minutes = parseInt(minutes, 10) * 1000; 
      this.sound = sound

      if (!this.isTheAlarmeSet) {
         this.isTheAlarmeSet = true



         this.workoutInterval = setInterval(() => {
            this.alarmAwake()
         }, 1000)
      }
   }

   unsetAlarm() {
      this.isTheAlarmeSet = false
      this.showCard = false
      clearInterval(this.workoutInterval)
   }

   alarmAwake() {
      let audio: HTMLAudioElement = new Audio('../assets/sounds/mouse.mp3')
      audio.play()
      this.exercise = this.EXERCISES[Math.floor(Math.random() * this.EXERCISES.length)];

      this.showCard = true
   }
}
