// import dotenv from "dotenv";

// const environment = process.env.NODE_ENV || 'development';
// dotenv.config({ path: `.env.${environment}` }); // require('dotenv').config({ path: `.env.${environment}` });
// const APP_NAME = process.env.APP_NAME || 'defaultAppName';

const APP_NAME = import.meta.env.APP_NAME; // 'app';//
const API_KEY = import.meta.env.API_KEY; 
const AUTH_DOMAIN = import.meta.env.AUTH_DOMAIN; 
const PROJECT_ID = import.meta.env.PROJECT_ID; 
const STORAGE_BUCKET = import.meta.env.STORAGE_BUCKET; 
const MESSAGING_SENDER_ID = import.meta.env.MESSAGING_SENDER_ID; 
const APP_ID = import.meta.env.APP_ID; 

export const env = {
  apiKey: API_KEY,//
  authDomain: AUTH_DOMAIN,//
  projectId: PROJECT_ID,//
  storageBucket: STORAGE_BUCKET,//
  messagingSenderId: MESSAGING_SENDER_ID,//
  appId: APP_ID,//

  appName: APP_NAME,
};