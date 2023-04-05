import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class PhotosService {
  getPhotos(): Array<any> {
    const images = [];
    for (let i = 0; i < 6; i++) {
      const photoUrl = `https://picsum.photos/seed/${Math.random()}/200`;
      const photoId = photoUrl.split('/')[4];      
      images.push({ url: photoUrl, id: photoId});
    }
    return images;
  }
}
