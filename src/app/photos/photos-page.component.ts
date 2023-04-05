import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonicModule } from '@ionic/angular';
import { PhotoComponent } from '../photo/photo.component';
import { PhotosService } from 'src/services/photos.service';
import { CommonModule } from '@angular/common';
import { AppStore } from 'src/store/app.store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Photo } from 'src/interfaces/photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos-page.component.html',
  styleUrls: ['photos-page.component.scss'],
  standalone: true,
  imports: [IonicModule, PhotoComponent, CommonModule],
})
export class PhotosPageComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  public photos$: Observable<Photo[]> = this.appStore.allPhotos$;
  public isLoading = true;

  private readonly loading$: Observable<boolean> = this.appStore.isLoading$;
  private readonly unsubscribe$ = new Subject();

  constructor(
    private appStore: AppStore,
    private photosService: PhotosService
  ) {}

  ngOnInit(): void {
    this.loading$.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
      this.isLoading = res;
    });
  }

  favoritePhoto(photo: Photo): void {
    this.appStore.setFavoritePhoto(photo);
  }

  // Implemented this instead of using the ion-infinite-scroll, since I wasn't clear on that requirement
  onScroll(): void {
    this.content.getScrollElement().then((scrollElement) => {
      const scrollHeight = scrollElement.scrollHeight;
      const scrollTop = scrollElement.scrollTop;
      const clientHeight = scrollElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        this.loadPhotos();
      }
    });
  }

  loadPhotos(): void {
    if (!this.isLoading) {
      this.photosService
        .getPhotos()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res) => {
          this.appStore.addPhotos(res);
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }
}
