import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import {
  CacheableResponsePlugin,
  CacheFirst,
  ExpirationPlugin,
  RegExpRoute,
  Serwist,
} from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

// Cache all assets for /en/* route
serwist.registerRoute(
  new RegExpRoute(
    /^\/en\/(?=.)/,
    new CacheFirst({
      cacheName: "kwiktionary-en-shell",
      plugins: [
        new CacheableResponsePlugin({ statuses: [200] }),
        new ExpirationPlugin({
          maxEntries: 1,
          maxAgeSeconds: 60 * 60 * 24, // 1 day
        }),
        {
          cacheKeyWillBeUsed: async ({}) => {
            return "en/_app_shell";
          },
        },
      ],
    }),
    "GET"
  )
);

// TODO: cache API responses
