import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, RouterLink } from '@angular/router'

@Component({
   selector: 'app-navbar',
   standalone: true,
   imports: [CommonModule, RouterLink],
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(private router: Router) {}
   cenas() {
    this.router.navigate(['homepage']);
   }
}
