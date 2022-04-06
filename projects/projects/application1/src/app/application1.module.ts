import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APPLICATION_1_ROUTES } from './application1.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(APPLICATION_1_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class Application1Module { }
