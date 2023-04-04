import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss'],
  standalone: true,
  imports: [IonicModule],
  providers: [],
})
export class GalleryPage {
  public environmentInjector = inject(EnvironmentInjector);
  selectedTheme = '';
  constructor() {}

}
