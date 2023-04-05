import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Photo } from "src/interfaces/photo.interface";
@Injectable({
    providedIn: "root",
})
export class AppStore {
 
	private _allPhotos$ = new BehaviorSubject<Photo[]>([]);
    public allPhotos$ = this._allPhotos$.asObservable();

    private _favoritePhotos$ = new BehaviorSubject<Photo[]>([])
    public favoritePhotos$ = this._favoritePhotos$.asObservable();

    private _isLoading$ = new BehaviorSubject<boolean>(false);
    public isLoading$ = this._isLoading$.asObservable();
 
	constructor() {}
    
    addPhotos(photos: Photo[]): void {
        this._allPhotos$.next([...this._allPhotos$.value, ...photos]);
    }

    setFavoritePhoto(photo: Photo): void {
        if (this._favoritePhotos$.value.findIndex(favoritePhoto => favoritePhoto.id === photo.id) === -1) {
            this._favoritePhotos$.next([...this._favoritePhotos$.value, photo]);
        }
    }

    removeFavoritePhoto(photo: Photo): void {
        const newFavoritePhotos = this._favoritePhotos$.value.filter(favoritePhoto => favoritePhoto.id !== photo.id);
        if (newFavoritePhotos) this._favoritePhotos$.next([...newFavoritePhotos]);
    }

    setIsLoading(loading: boolean): void {
        this._isLoading$.next(loading);
    }

    getFavoritePhoto(photoId: string): Photo | undefined {
        return this._favoritePhotos$.value.find(favoritePhoto => favoritePhoto.id === photoId);
    }
 
}