import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotoComponent } from '../photo/photo.component';
import { AppStore } from 'src/store/app.store';
import { Photo } from 'src/interfaces/photo.interface';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites-page.component.html',
  styleUrls: ['favorites-page.component.scss'],
  standalone: true,
  imports: [IonicModule, PhotoComponent, CommonModule],
})
export class FavoritesPageComponent implements OnInit {
  public favoritePhotos$: Observable<Photo[]> = this.appStore.favoritePhotos$;

  constructor(private appStore: AppStore, private _router: Router) {}

  ngOnInit(): void {}

  removeFavoritePhoto(photo: Photo): void {
    this._router.navigate([`/gallery/photos/id:${photo.id}`])
  }
}
