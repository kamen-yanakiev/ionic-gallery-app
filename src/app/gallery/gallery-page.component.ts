import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { PhotosService } from 'src/services/photos.service';
import { AppStore } from 'src/store/app.store';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery-page.component.html',
  styleUrls: ['gallery-page.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class GalleryPageComponent implements OnInit, OnDestroy {
  public selectedTab = 'photos';

  private readonly unsubscribe$ = new Subject();

  constructor(
    private photosService: PhotosService,
    private appStore: AppStore,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.photosService
      .getPhotos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.appStore.addPhotos(res);
      });
    // For a cleaner implementation, a facade can be implemented, so that components don't directly call appStore or photosService.
    // Did not have the time to implement that facade, but it would definitely be better if it was there.
    this.appStore.initializeFavoritePhotos();
  }

  navigateToPhotos(): void {
    this._router.navigate(['/gallery/photos']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }
}
