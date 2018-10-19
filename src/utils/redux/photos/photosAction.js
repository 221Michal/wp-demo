import { toJson } from "unsplash-js";
import unsplash from "../../unsplash/Unsplash";

export const PHOTOS_FETCH_START = "PHOTOS_FETCH_START"
export const PHOTOS_DATA_RESET = "PHOTOS_DATA_RESET"
export const PHOTOS_FETCH_SUCCESS = "PHOTOS_FETCH_SUCCESS"
export const PHOTOS_FETCH_ERROR = "PHOTOS_FETCH_ERROR"
export const PHOTO_FETCH_START = "PHOTO_FETCH_START"
export const PHOTO_FETCH_SUCCESS = "PHOTO_FETCH_SUCCESS"
export const PHOTO_FETCH_ERROR = "PHOTO_FETCH_ERROR"

export function fetchPhotos(collectionId, page = 1, order = 'latest') {
    return function (dispatch) {
        dispatch({ type: PHOTOS_FETCH_START });
        if (page === 1) {
            dispatch({ type: PHOTOS_DATA_RESET });
        }
        unsplash.collections.getCollectionPhotos(collectionId, page, 10, order)
            .then(toJson)
            .then(json => {
                dispatch(fetchPhotosSuccess(json));
            });
    }
}

export function fetchPhotosSuccess(data) {
    return {
      type: PHOTOS_FETCH_SUCCESS,
      payload: data
    };
  }

  export function fetchPhotosError(error) {
    return {
      type: PHOTOS_FETCH_ERROR,
      payload: error
    };
  }
  export function fetchPhoto(photoId) {
    return function(dispatch) {
      dispatch({ type: PHOTO_FETCH_START });
      unsplash.photos.getPhoto(photoId)
        .then(toJson)
        .then(json => {
            dispatch(fetchPhotoSuccess(json));
      });
    }
  }
  export function fetchPhotoSuccess(data) {
    return {
      type: PHOTO_FETCH_SUCCESS,
      payload: data
    };
  }
  export function fetchPhotoError(error) {
    return {
      type: PHOTO_FETCH_ERROR,
      payload: error
    };
  }