importScripts('dist/serviceworker-cache-polyfill.js');
console.log('sw-version-22')
var cacheFiles1 = [
    '/worker3/id1.js'
];
var cacheFiles2 = [
    '/worker3/id2.js'
];
self.addEventListener('install', function (evt) {
    console.log('install');
    evt.waitUntil(
        caches.open('my-test-cahce-v1').then(function (cache) {
            return cache.addAll(cacheFiles1).then(function(){ self.skipWaiting()});;
        })
    );
    //evt.waitUntil(
    //    caches.open('whiteList-v1').then(function (cache) {
    //        return cache.addAll(cacheWiteList);
    //    })
    //);
});
self.addEventListener('fetch', function (evt) {
    evt.respondWith(
        caches.match(evt.request).then(function(response) {
            if (response) {
                console.log('fetch',evt.request.url);
                return response;
            }
            console.log('notfetch',evt.request.url);
            return fetch(evt.request);
        })
    )
});
self.addEventListener('activate', function(event) {
    console.log('clean oldCatch');
    //var cacheWhitelist = ['whiteList-v1'];
    var cacheWhitelist = ["cacheFiles2"];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    console.log('cacheName:',cacheName);
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

