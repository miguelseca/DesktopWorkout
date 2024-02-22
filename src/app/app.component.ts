import { AfterViewInit, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './components/footer/footer.component'
import { NavbarComponent } from './components/navbar/navbar.component'

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [CommonModule, RouterOutlet, FooterComponent, NavbarComponent],
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
