import type {
  PrecacheEntry,
  RuntimeCaching,
  SerwistGlobalConfig,
} from "serwist";
import {
  CacheableResponsePlugin,
  CacheFirst,
  ExpirationPlugin,
  Serwist,
  StaleWhileRevalidate,
} from "serwist";
import { API_URL } from "../utils/api";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const cache: RuntimeCaching[] = [
  {
    matcher: /\.(?:js|css|json|woff2|png|ico|webmanifest)$/i,
    handler: new CacheFirst({
      cacheName: "static-resources",
      plugins: [
        new CacheableResponsePlugin({ statuses: [200] }),
        new ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        }),
      ],
    }),
  },
  {
    matcher: ({ url }) => {
      return (
        url.origin === new URL(API_URL).origin &&
        url.pathname.includes("define")
      );
    },
    handler: new StaleWhileRevalidate({
      cacheName: "api-definition-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [200, 404] }),
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
        }),
      ],
    }),
  },
  {
    matcher: ({ url }) => {
      return (
        url.origin === new URL(API_URL).origin &&
        url.pathname.includes("search")
      );
    },
    handler: new CacheFirst({
      cacheName: "api-search-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [200] }),
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
        }),
      ],
    }),
  },
];

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: cache,
  precacheOptions: {
    cleanupOutdatedCaches: true,
  },
});

serwist.addEventListeners();
