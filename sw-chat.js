const CACHE_NAME = 'facba-chat-v1';
const URLS_TO_CACHE = [
  './chat.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
  'https://www.gstatic.com/firebasejs/9.1.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.1.1/firebase-database-compat.js',
  'https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics-compat.js'
];

// Instalar: cachear archivos esenciales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activar: limpiar caches viejos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network first, fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Guardar copia en cache
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
