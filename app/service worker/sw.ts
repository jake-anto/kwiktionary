import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import {
  CacheableResponsePlugin,
  CacheFirst,
  ExpirationPlugin,
  NavigationRoute,
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

// Cache strategy for /en/* route
const enDefinitionStrategy = new CacheFirst({
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
});

serwist.registerRoute(
  new NavigationRoute(enDefinitionStrategy, {
    allowlist: [/^\/en\/(?=.)/],
  })
);

// TODO: cache API responses
