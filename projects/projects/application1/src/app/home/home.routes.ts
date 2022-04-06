import { Routes } from "@angular/router";
import { DetailsComponent } from './components/details/details.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'contact',
        component: FormComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home/details'
  }
]