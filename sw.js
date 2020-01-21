



// Installing Service Worker
self.addEventListener('install', function(e) {
    console.log('[serviceWorker] Installed');
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log('[serviceWorker] Caching all: app shell and content');
        return cache.addAll(contentToCache);
      })
    );
  });