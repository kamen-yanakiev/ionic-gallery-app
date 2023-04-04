import { Routes } from '@angular/router';
import { GalleryPageComponent } from './gallery-page.component';

export const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryPageComponent,
    children: [
      {
        path: 'photos',
        loadComponent: () =>
          import('../photos/photos.page.component').then((m) => m.PhotosPageComponent),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('../favorites/favorites-page.component').then((m) => m.FavoritesPageComponent),
      },
      {
        path: '',
        redirectTo: '/gallery/photos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/gallery/photos',
    pathMatch: 'full',
  },
];
