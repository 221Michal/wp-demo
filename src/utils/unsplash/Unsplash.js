import Unsplash from 'unsplash-js';
import { ACCESS_KEY, APP_SECRET, APP_CALLBACK_URL } from "./Unsplash";


const unsplash = new Unsplash({
  applicationId: ACCESS_KEY,
  secret: APP_SECRET,
  callbackUrl: APP_CALLBACK_URL
});

export default unsplash;