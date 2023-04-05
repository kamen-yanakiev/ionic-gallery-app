import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GalleryPageComponent } from './gallery-page.component';
import { of } from 'rxjs';
import { PhotosService } from 'src/services/photos.service';

const mockPhotosService = {
  getPhotos: () => {
    return of([
      {
        id: '1',
        url: 'https://image1.png'
      },
      {
        id: '2',
        url: 'https://image2.png'
      }
    ])
 }}

describe('GalleryPageComponent', () => {
  let component: GalleryPageComponent;
  let fixture: ComponentFixture<GalleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryPageComponent, IonicModule],
      providers: [provideRouter([]), { provide: PhotosService, useValue: mockPhotosService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load photos on onInit', () => {
    const spy = spyOn(component, 'loadPhotos').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  })
});
