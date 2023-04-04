import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.component.html',
  styleUrls: ['photos.page.component.scss'],
  standalone: true,
  imports: [IonicModule, PhotoComponent],
})
export class PhotosPageComponent {
  constructor() {}
}
