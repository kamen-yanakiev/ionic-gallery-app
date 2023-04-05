import { Component, EnvironmentInjector, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotosService } from 'src/services/photos.service';
import { AppStore } from 'src/store/app.store';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery-page.component.html',
  styleUrls: ['gallery-page.component.scss'],
  standalone: true,
  imports: [IonicModule],
  providers: [],
})
export class GalleryPageComponent implements OnInit {
  // public environmentInjector = inject(EnvironmentInjector);

  public selectedTab = 'photos';

  constructor(private photosService: PhotosService, private appStore: AppStore) {}

  ngOnInit(): void {
    this.appStore.addPhotos(this.photosService.getPhotos());
  }

  tabChanged(event: any): void {
    console.log(event);
  }

}
