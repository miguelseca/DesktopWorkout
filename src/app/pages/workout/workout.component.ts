import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Exercise } from 'src/models/Exercise'
import { EXERCISES } from '../../../assets/data/exercises'
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule],
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
 
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

   ngOnInit(): void {
      this.minutes = this.defaultMinuteRange
      this.exercise = EXERCISES[this.exerciseNumber]
   }


   formatLabel(value: number): string { 
      return value + 'min';
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
      let audio: HTMLAudioElement = new Audio('../assets/sounds/1997.wav')
      audio.play()
      this.exercise = this.EXERCISES[Math.floor(Math.random() * this.EXERCISES.length)]
      this.showCard = true
      this.isTheAlarmeSet = false
      clearInterval(this.workoutInterval)
      clearInterval(this.calculateMinutesInterval)
   }
}
