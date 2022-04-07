import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";


export const APPLICATION_2_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  }
]