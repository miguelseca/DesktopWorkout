import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: 'homepage',
        loadComponent: () =>
           import('./pages/homepage/homepage.component').then(
              (mod) => mod.HomepageComponent
           ),
     },
   {
      path: 'cardlist',
      loadComponent: () =>
         import('./pages/cardlist/cardlist.component').then(
            (mod) => mod.CardlistComponent
         ),
   },
   {
      path: '',
      pathMatch: 'full',
      loadComponent: () =>
         import('./pages/homepage/homepage.component').then(
            (mod) => mod.HomepageComponent
         ),
   },
   {
      path: '**',
      loadComponent: () =>
         import('./pages/page404/page404.component').then((mod) => mod.Page404Component),
   },
]
