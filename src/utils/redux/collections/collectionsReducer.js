import {
    FEATURED_COLLECTIONS_FETCH_START,
    FEATURED_COLLECTIONS_FETCH_SUCCESS,
    FEATURED_COLLECTIONS_FETCH_ERROR,
    FEATURED_COLLECTION_PHOTOS_FETCH_START,
    FEATURED_COLLECTION_PHOTOS_FETCH_SUCCESS,
} from "./collectionsActions"

const initialState = {
    collectionsPending: false,
    collectionsPhotosPending: false,
    dict: {},
}

const CollectionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FEATURED_COLLECTIONS_FETCH_START: {
            return { ...state, collectionsPending: true }
        }
        case FEATURED_COLLECTIONS_FETCH_SUCCESS: {
            const collectionsDict = action.payload.reduce((dict, curr, i) => {
                dict[curr.id] = curr;
                return dict;
              }, {});
            return { ...state, dict: collectionsDict, collectionsPending: false }
        }
        case FEATURED_COLLECTIONS_FETCH_ERROR: {
            return { ...state, collectionsPending: false, }
        }
        case FEATURED_COLLECTION_PHOTOS_FETCH_START: {
            return { ...state, collectionsPhotosPending: true }
        }
        case FEATURED_COLLECTION_PHOTOS_FETCH_SUCCESS: {
            const { collectionId, json } = action.payload;
            let collectionsDict = { ...state.dict };
            collectionsDict[collectionId].latestPhotos = json;
            return { ...state, collectionsPhotosPending: false, dict: collectionsDict }
        }
        default: {
            return state;
        }
    }
}

export default CollectionsReducer