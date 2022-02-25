const timestamp = 1645802460950;
const build = [
  "/_app/start-b715b78d.js",
  "/_app/pages/__layout.svelte-b074ec89.js",
  "/_app/assets/pages/__layout.svelte-8a2e57c9.css",
  "/_app/pages/__error.svelte-3b1bd448.js",
  "/_app/pages/index.svelte-0834364c.js",
  "/_app/pages/register.svelte-69c9616e.js",
  "/_app/pages/login.svelte-c6aa2534.js",
  "/_app/pages/demo/__layout.svelte-acc30215.js",
  "/_app/pages/demo/index.svelte-bf0f58f4.js",
  "/_app/pages/demo/components/countdown.svelte-84d2e486.js",
  "/_app/pages/demo/components/carousel.svelte-66d2a506.js",
  "/_app/pages/demo/components/collapse.svelte-a2ec7e3b.js",
  "/_app/pages/demo/components/dropdown.svelte-8a2144a9.js",
  "/_app/pages/demo/components/progress.svelte-f5e66170.js",
  "/_app/pages/demo/components/tooltip.svelte-cf44bbef.js",
  "/_app/pages/demo/components/avatar.svelte-ddf95455.js",
  "/_app/pages/demo/components/button.svelte-c0ca9285.js",
  "/_app/pages/demo/components/alert.svelte-5920bd3d.js",
  "/_app/pages/demo/components/badge.svelte-7c3ad0ee.js",
  "/_app/pages/demo/components/modal.svelte-490512cb.js",
  "/_app/pages/demo/components/card.svelte-98cbb334.js",
  "/_app/pages/demo/components/form.svelte-e3a945b7.js",
  "/_app/pages/demo/components/stat.svelte-d0170a12.js",
  "/_app/pages/demo/components/swap.svelte-b9a4dbb3.js",
  "/_app/pages/demo/components/tab.svelte-380da8aa.js",
  "/_app/pages/demo/components.svelte-45e3efa6.js",
  "/_app/pages/app/__layout.svelte-9d5888c1.js",
  "/_app/pages/app/index.svelte-4923133d.js",
  "/_app/chunks/vendor-45661a65.js",
  "/_app/chunks/index-5cefcc89.js",
  "/_app/assets/index-6dd12211.css",
  "/_app/chunks/index-1f4c0bb9.js",
  "/_app/chunks/button-a303b3a6.js",
  "/_app/chunks/index-a9a5a6a3.js",
  "/_app/chunks/tab-77b9c3e0.js",
  "/_app/chunks/code-77725aec.js",
  "/_app/chunks/index-cdfd3c1a.js",
  "/_app/chunks/index-f7308e5a.js"
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
