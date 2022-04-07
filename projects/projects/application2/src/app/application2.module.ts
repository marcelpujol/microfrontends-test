import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APPLICATION_2_ROUTES } from './application2.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(APPLICATION_2_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class Application2Module { }
