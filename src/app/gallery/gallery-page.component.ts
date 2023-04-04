import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery-page.component.html',
  styleUrls: ['gallery-page.component.scss'],
  standalone: true,
  imports: [IonicModule],
  providers: [],
})
export class GalleryPageComponent {
  public environmentInjector = inject(EnvironmentInjector);
  selectedTheme = '';
  constructor() {}

}
