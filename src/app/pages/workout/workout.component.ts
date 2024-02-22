import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Exercise } from 'src/app/models/Exercise'
import { EXERCISES } from '../../../assets/data/exercises'
import { MatSliderModule } from '@angular/material/slider'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms'

@Component({
   selector: 'app-workout',
   standalone: true,
   imports: [CommonModule, MatSliderModule, MatSelectModule, FormsModule],
   templateUrl: './workout.component.html',
   styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit, OnDestroy {
   title = 'Desktop Workout'
   minutes: number = 10
   sound: string = 'alarm'
   showCard: boolean = false
   isTheAlarmeSet: boolean = false
   workoutInterval!: any
   calculateMinutesInterval!: any
   EXERCISES: Exercise[] = EXERCISES
   exerciseNumber: number = 0
   exercise!: Exercise
   minutesToNextWorkout!: number
   sounds: String[] = ['alarm', 'mouse', 'murloc']

   public constructor() {}

   ngOnInit(): void {
      if (!!localStorage.getItem('selectedSound')) {
         this.sound = localStorage.getItem('selectedSound')!
      }

      if (!!localStorage.getItem('selectedDuration')) {
         this.minutes = parseInt(localStorage.getItem('selectedDuration')!)
      }

      this.exercise = EXERCISES[this.exerciseNumber]
   }

   formatLabel(value: number): string {
      return value + 'min'
   }

   setAlarm() {
      if (!this.isTheAlarmeSet) {
         localStorage.setItem('selectedSound', this.sound)
         localStorage.setItem('selectedDuration', this.minutes.toString(10))
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

   onDoneClick() {
      this.showCard = false
      this.setAlarm()
   }

   resetAlarm() {
      this.showCard = false
      this.unsetAlarm()
      this.setAlarm()
   }

   alarmAwake() {
      if (this.sound == 'alarm') {
         const audio: HTMLAudioElement = new Audio(
            '../assets/sounds/' + this.sound + '.wav'
         )
         audio.play()
      } else {
         let audio: HTMLAudioElement = new Audio(
            '../assets/sounds/' + this.sound + '.mp3'
         )
         audio.play()
      }

      this.exercise = this.EXERCISES[Math.floor(Math.random() * this.EXERCISES.length)]
      this.showCard = true
      this.isTheAlarmeSet = false
      clearInterval(this.workoutInterval)
      clearInterval(this.calculateMinutesInterval)
   }

   soundTest() {
      if (this.sound == 'alarm') {
         let audioTest: HTMLAudioElement = new Audio(
            '../assets/sounds/' + this.sound + '.wav'
         )
         audioTest.play()
      } else {
         let audioTest: HTMLAudioElement = new Audio(
            '../assets/sounds/' + this.sound + '.mp3'
         )
         audioTest.play()
      }
   }

   ngOnDestroy(): void {
      clearInterval(this.workoutInterval)
      clearInterval(this.calculateMinutesInterval)
   }
}
