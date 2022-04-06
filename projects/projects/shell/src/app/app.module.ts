import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SHELL_ROUTES } from './shell.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(SHELL_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ShellModule { }
