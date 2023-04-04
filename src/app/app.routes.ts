import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./gallery/gallery.routes').then((m) => m.routes),
  },
];
