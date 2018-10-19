import {
    PHOTOS_FETCH_START,
    PHOTOS_DATA_RESET,
    PHOTOS_FETCH_SUCCESS,
    PHOTOS_FETCH_ERROR,
    PHOTO_FETCH_START,
    PHOTO_FETCH_SUCCESS,
    PHOTO_FETCH_ERROR,
} from "./photosAction"

const initialState = {
    photosFetchPending: false,
    singlePhotoPending: false,
    data: [],
    singleDict: {}
}

const photosReducers = (state = initialState, action) => {
    switch (action.type) {
        case PHOTOS_FETCH_START: {
            return { ...state, photosFetchPending: true };
        }
        case PHOTOS_DATA_RESET: {
            return { ...state, data: [] };
        }
        case PHOTOS_FETCH_SUCCESS: {
            const concatedArr = state.data.concat(action.payload);
            return { ...state, photosFetchPending: false, data: concatedArr };
        }
        case PHOTOS_FETCH_ERROR: {
            return { ...state, photosFetchPending: false };
        }
        case PHOTO_FETCH_START: {
            return { ...state, singlePhotoPending: true };
        }
        case PHOTO_FETCH_SUCCESS: {
            let singleDict = { ...state.singleDict };
            singleDict[action.payload.id] = action.payload;
            return { ...state, singlePending: false, singleDict };
        }
        case PHOTO_FETCH_ERROR: {
            return {  ...state, singlePending: false };
          }
        default: {
            return state;
        }
    }
}

export default photosReducers