import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotoComponent } from '../photo/photo.component';
import { PhotosService } from 'src/services/photos.service';
import { CommonModule } from '@angular/common';
import { AppStore } from 'src/store/app.store';
import { Observable } from 'rxjs';
import { Photo } from 'src/interfaces/photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos-page.component.html',
  styleUrls: ['photos-page.component.scss'],
  standalone: true,
  imports: [IonicModule, PhotoComponent, CommonModule],
  providers: []
})
export class PhotosPageComponent implements OnInit {
  photos$: Observable<Photo[]> = this.appStore.allPhotos$;

  constructor(private appStore: AppStore, private photosService: PhotosService) {}

  ngOnInit(): void {

  }

  favoritePhoto(photo: Photo): void {
    // console.log('in favoritePhoto: ', photo);
    this.appStore.setFavoritePhoto(photo);
  }

  addPhotos(): void {
    this.appStore.addPhotos(this.photosService.getPhotos());
  }
}
