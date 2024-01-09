import { env } from "./_env";
export const firebaseConfig = {
  // Your web app's Firebase configuration here
  // See https://firebase.google.com/docs/web/setup#add-sdks-initialize
  apiKey: env.apiKey,//'API_KEY',
  authDomain: env.authDomain,//'PROJECT_ID.firebaseapp.com',
  databaseURL: 'https://PROJECT_ID.firebaseio.com',
  projectId: env.projectId,//'PROJECT_ID',
  storageBucket: env.storageBucket,//'PROJECT_ID.appspot.com',
  messagingSenderId: env.messagingSenderId,//'SENDER_ID',
  appId: env.appId,//'APP_ID',
  measurementId: 'G-MEASUREMENT_ID',
};
