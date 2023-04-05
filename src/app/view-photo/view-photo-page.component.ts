import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotoComponent } from '../photo/photo.component';
import { AppStore } from 'src/store/app.store';
import { Photo } from 'src/interfaces/photo.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-photo',
  templateUrl: 'view-photo-page.component.html',
  styleUrls: ['view-photo-page.component.scss'],
  standalone: true,
  imports: [IonicModule, PhotoComponent, CommonModule],
})
export class ViewPhotoPageComponent implements OnInit {
  public photo: Photo = {};

  constructor(
    private appStore: AppStore,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const photoId = this.activatedRoute.snapshot.paramMap
      .get('id')
      ?.split(':')[1];
    if (photoId) {
      console.log(photoId);
      this.photo = this.appStore.getFavoritePhoto(photoId) || {};
      console.log(this.photo);
    }
  }

  removeFavoritePhoto(): void {
    this.appStore.removeFavoritePhoto(this.photo);
    this._router.navigate(['/gallery/favorites']);
  }
}
