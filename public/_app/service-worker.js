const timestamp = 1645671148854;
const build = [
  "/_app/start-bc575b0d.js",
  "/_app/pages/__layout.svelte-ee67243f.js",
  "/_app/assets/pages/__layout.svelte-63882aa4.css",
  "/_app/pages/__error.svelte-08ca43d5.js",
  "/_app/pages/index.svelte-aeb1352c.js",
  "/_app/pages/register.svelte-ad44420c.js",
  "/_app/pages/login.svelte-5be7e574.js",
  "/_app/pages/demo/__layout.svelte-f24e0aa6.js",
  "/_app/pages/demo/index.svelte-2f7eb3a2.js",
  "/_app/pages/demo/components/button.svelte-7b87a0a8.js",
  "/_app/pages/demo/components/alert.svelte-d3b75cce.js",
  "/_app/pages/demo/components/form.svelte-565662b1.js",
  "/_app/pages/demo/components.svelte-33c4405c.js",
  "/_app/pages/app/__layout.svelte-91e340f2.js",
  "/_app/pages/app/index.svelte-a9ff2217.js",
  "/_app/chunks/vendor-3d9fcae7.js",
  "/_app/chunks/index-d17396a7.js",
  "/_app/assets/index-1df9547a.css",
  "/_app/chunks/variables-9f23f421.js",
  "/_app/chunks/index-ff36d570.js"
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
