import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Photo } from '../../interfaces/photo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class PhotoComponent {
  @Input() photo!: Photo;
  constructor() {}
}
