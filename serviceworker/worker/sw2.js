var CACHE_NAME = 'my-site-cache-6';
var urlsToCache = [
  'worker/test.js'
];
console.log('sw load',CACHE_NAME)
 //Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
//标准缓存
self.addEventListener('fetch', function(event) {
    console.log('retch')
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }

                    return fetch(event.request);
                }
            )
    );
});