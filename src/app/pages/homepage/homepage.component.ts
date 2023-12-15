import { AfterViewInit, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Exercise } from 'src/models/Exercise'
import { EXERCISES } from '../../../assets/data/exercises'

@Component({
   selector: 'app-homepage',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './homepage.component.html',
   styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, AfterViewInit {
   cancelAlarm() {
      throw new Error('Method not implemented.')
   }
   title = 'Desktop Workout'
   defaultMinuteRange: number = 10
   minutes!: number
   sound: string = ''
   showCard: boolean = false
   isTheAlarmeSet: boolean = false
   workoutInterval!: any
   calculateMinutesInterval!: any
   EXERCISES: Exercise[] = EXERCISES
   exerciseNumber: number = 0
   exercise!: Exercise
   minutesToNextWorkout!: number

   public constructor() {}
   ngAfterViewInit(): void {}
   ngOnInit(): void {
      this.minutes = this.defaultMinuteRange
      this.exercise = EXERCISES[this.exerciseNumber]
   }

   changeMinutes(minutes: string) {
      this.minutes = parseInt(minutes, 10)
   }

   setAlarm() {
      if (!this.isTheAlarmeSet) {
         this.isTheAlarmeSet = true
         this.minutesToNextWorkout = this.minutes
         this.workoutInterval = setInterval(() => {
            this.alarmAwake()
         }, this.minutes * 60000)
         this.calculateMinutesInterval = setInterval(() => {
            this.minutesToNextWorkout--
         }, 60000)
      }
   }

   unsetAlarm() {
      this.isTheAlarmeSet = false
      this.showCard = false
      clearInterval(this.workoutInterval)
      clearInterval(this.calculateMinutesInterval)
      
   }

   resetAlarm() {
      this.unsetAlarm();
      this.setAlarm();
   }

   alarmAwake() {
      let audio: HTMLAudioElement = new Audio('../assets/sounds/1997.wav')
      audio.play()
      this.exercise = this.EXERCISES[Math.floor(Math.random() * this.EXERCISES.length)]
      this.showCard = true
   }
}
