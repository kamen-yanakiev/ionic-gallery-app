import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ViewPhotoPageComponent } from './view-photo-page.component';
import { ActivatedRoute } from '@angular/router';

describe('ViewPhotoPageComponent', () => {
  let component: ViewPhotoPageComponent;
  let fixture: ComponentFixture<ViewPhotoPageComponent>;
  // const fakeActivatedRoute = {
  //   snapshot: { data: {} }
  // } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPhotoPageComponent, IonicModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
            snapshot: {
                paramMap: {
                    get(): string {
                        return '123';
                    },
                },
            },
        },
    },]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
