import { defineConfig } from 'vite';
import dotenv from "dotenv";

const environment = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${environment}` }); // require('dotenv').config({ path: `.env.${environment}` });
const APP_NAME = process.env.APP_NAME;
const API_KEY = process.env.API_KEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const PROJECT_ID = process.env.PROJECT_ID;
const STORAGE_BUCKET = process.env.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
const APP_ID = process.env.APP_ID;

export default defineConfig({
  base: '/',
  define: {
    'import.meta.env.APP_NAME': JSON.stringify(APP_NAME),
    'import.meta.env.API_KEY': JSON.stringify(API_KEY),
    'import.meta.env.AUTH_DOMAIN': JSON.stringify(AUTH_DOMAIN),
    'import.meta.env.PROJECT_ID': JSON.stringify(PROJECT_ID),
    'import.meta.env.STORAGE_BUCKET': JSON.stringify(STORAGE_BUCKET),
    'import.meta.env.MESSAGING_SENDER_ID': JSON.stringify(MESSAGING_SENDER_ID),
    'import.meta.env.APP_ID': JSON.stringify(APP_ID),
  },
  build: {
    rollupOptions: {
      input: [
        'anon.html',
        'apple-popup.html',
        'apple-redirect.html',
        'customauth.html',
        'email-link.html',
        'email-password.html',
        'facebook-credentials.html',
        'facebook-popup.html',
        'facebook-redirect.html',
        'github-popup.html',
        'github-redirect.html',
        'google-credentials.html',
        'google-popup.html',
        'google-redirect.html',
        'index.html',
        'mfa-password.html',
        'microsoft-popup.html',
        'microsoft-redirect.html',
        'multi-tenant-ui.html',
        'phone-invisible.html',
        'phone-simple-popup.html',
        'phone-simple.html',
        'phone-visible.html',
        'twitter-popup.html',
        'twitter-redirect.html',
      ],
    },
  },
});
