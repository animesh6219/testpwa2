self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('testpwa').then((cache) => cache.addAll([
      '/testpwa2/',
      '/testpwa2/index.htm',
      '/testpwa2/index.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
