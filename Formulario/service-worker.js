self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'styles.css', // Agrega la ruta correcta a tu archivo CSS
                'js/forumulario.js', // Agrega la ruta correcta a tu archivo JavaScript
                // Agrega aquí los recursos que deseas cachear
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
