// sw.js
self.addEventListener('install', (event) => {
  // Cache files or do other install tasks
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.match(event.request)
          .then((response) => {
              return response || fetch(event.request);
          })
  );
});

// ... 更多的 Service Worker 事件和邏輯
