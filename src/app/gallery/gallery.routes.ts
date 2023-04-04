import { Routes } from '@angular/router';
import { GalleryPage } from './gallery.page';

export const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryPage,
    children: [
      {
        path: 'photos',
        loadComponent: () =>
          import('../photos/photos.page').then((m) => m.PhotosPage),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('../favorites/favorites.page').then((m) => m.FavoritesPage),
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
