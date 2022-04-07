import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";

export const SHELL_ROUTES: Routes = [
  {
    path: 'application1',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      exposedModule: 'Application1Home'
    })
    .then(m => m.HomeModule)
  },
  {
    path: 'application2',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3200/remoteEntry.js',
      exposedModule: './Module'
    })
    .then(m => m.Application2Module)
  }
];