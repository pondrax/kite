const timestamp = 1645457563729;
const build = [
  "/_app/start-6b6f7259.js",
  "/_app/pages/__layout.svelte-068dcebd.js",
  "/_app/assets/pages/__layout.svelte-85eb94b3.css",
  "/_app/pages/__error.svelte-be022836.js",
  "/_app/pages/index.svelte-2a1a2561.js",
  "/_app/pages/register.svelte-8ef8df73.js",
  "/_app/pages/login.svelte-ab0e7ec4.js",
  "/_app/pages/demo/index.svelte-34086b0b.js",
  "/_app/pages/demo/components/form.svelte-f70eb59f.js",
  "/_app/pages/demo/components.svelte-fea2ac12.js",
  "/_app/pages/app/__layout.svelte-10175ac7.js",
  "/_app/pages/app/index.svelte-9bc17fb0.js",
  "/_app/chunks/vendor-c9bfeb66.js",
  "/_app/chunks/index-4b8ee9ee.js",
  "/_app/assets/index-9754b717.css",
  "/_app/chunks/index-23ab41d1.js"
];
const files = [
  "/favicon.ico",
  "/favicon.png",
  "/icons/android-icon-144x144.png",
  "/icons/android-icon-192x192.png",
  "/icons/android-icon-36x36.png",
  "/icons/android-icon-48x48.png",
  "/icons/android-icon-72x72.png",
  "/icons/android-icon-96x96.png",
  "/icons/apple-icon-114x114.png",
  "/icons/apple-icon-120x120.png",
  "/icons/apple-icon-144x144.png",
  "/icons/apple-icon-152x152.png",
  "/icons/apple-icon-180x180.png",
  "/icons/apple-icon-57x57.png",
  "/icons/apple-icon-60x60.png",
  "/icons/apple-icon-72x72.png",
  "/icons/apple-icon-76x76.png",
  "/icons/apple-icon-precomposed.png",
  "/icons/apple-icon.png",
  "/icons/browserconfig.xml",
  "/icons/favicon-16x16.png",
  "/icons/favicon-32x32.png",
  "/icons/favicon-96x96.png",
  "/icons/ms-icon-144x144.png",
  "/icons/ms-icon-150x150.png",
  "/icons/ms-icon-310x310.png",
  "/icons/ms-icon-70x70.png",
  "/manifest.json",
  "/robots.txt"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
