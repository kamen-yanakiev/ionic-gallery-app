import { Injectable } from "@angular/core";
import { Observable, switchMap, timer } from "rxjs";
import { Photo } from "src/interfaces/photo.interface";
import { AppStore } from "src/store/app.store";
@Injectable({
  providedIn: "root",
})
export class PhotosService {
  constructor(private appStore: AppStore){}

  getPhotos(): Observable<Photo[]> {
    this.appStore.setIsLoading(true);
    const images: Photo[] = [];
    // Set up a longer delay than what is written in the task, so that the spinner can be visible for more time
    const delay = 600;
    for (let i = 0; i < 6; i++) {
      const photoUrl = `https://picsum.photos/seed/${Math.random()}/200`;
      const photoId = photoUrl.split('/')[4];      
      images.push({ url: photoUrl, id: photoId});
    }

    return timer(delay).pipe(
      switchMap(() => {
        return new Observable<Photo[]>((observer) => {
          observer.next(images);
          this.appStore.setIsLoading(false);
          observer.complete;
        })
      })
    )
  }
}
