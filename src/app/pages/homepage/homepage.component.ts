import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterLink } from '@angular/router'

@Component({
   selector: 'app-homepage',
   standalone: true,
   imports: [CommonModule, RouterLink],
   templateUrl: './homepage.component.html',
   styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
 
}