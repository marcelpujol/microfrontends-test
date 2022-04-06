import { Routes } from "@angular/router";
import { AppComponent } from './app.component';

export const APPLICATION_1_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  }
]