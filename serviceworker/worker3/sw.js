importScripts('dist/serviceworker-cache-polyfill.js');
console.log('sw-version-13')
var cacheFiles = [
    '/worker3/id1.js'
];
var cacheWiteList = [
    '/worker3/id1.js'
];
self.addEventListener('install', function (evt) {
    console.log('install');
    evt.waitUntil(
        caches.open('my-test-cahce-v1').then(function (cache) {
            return cache.addAll(cacheFiles);
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
            //var request = evt.request.clone();
            //return fetch(request).then(function (response) {
            //    var responseClone = response.clone();
            //    console.log('clone',evt.request)
            //    caches.open('my-test-cache-v1').then(function (cache) {
            //        cache.put(evt.request, responseClone);
            //    });
            //    return response;
            //});
        })
    )
});
//self.addEventListener('activate', function(event) {
//    console.log('clean oldCatch');
//    //var cacheWhitelist = ['whiteList-v1'];
//    var cacheWhitelist = [];
//    event.waitUntil(
//        caches.keys().then(function(cacheNames) {
//            return Promise.all(
//                cacheNames.map(function(cacheName) {
//                    if (cacheWhitelist.indexOf(cacheName) === -1) {
//                        return caches.delete(cacheName);
//                    }
//                })
//            );
//        })
//    );
//});

