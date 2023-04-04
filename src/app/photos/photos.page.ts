import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class PhotosPage {
  constructor() {}
}
