import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'application1',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://locahost:4200/remoteEntry.js',
      exposedModule: './Module'
    })
    .then(m => m.Application1Module)
  },
  {
    path: 'application2',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4800/remoteEntry.js',
      exposedModule: './Module'
    })
    .then(m => m.Application2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
