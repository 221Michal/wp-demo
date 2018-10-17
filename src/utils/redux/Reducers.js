import { combineReducers } from "redux";
import CollectionsReducer from './collections/collectionsReducer';
import PhotosReducers from './photos/photosReducers';

const rootReducer = combineReducers({
    Collections: CollectionsReducer,
    Photos: PhotosReducers
});
export default rootReducer;