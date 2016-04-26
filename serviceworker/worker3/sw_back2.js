importScripts('dist/serviceworker-cache-polyfill.js');
const catchVersion = 'cahce-list-v21';
console.log('catchVersion:',catchVersion)
var cacheFiles1 = [
    '/worker3/id1.js'
];
this.addEventListener('install', function (evt) {
    console.log('install');
    evt.waitUntil(
        caches.open(catchVersion).then(function (cache) {
            return cache.addAll(cacheFiles1).then(function(){ self.skipWaiting()});;
        })
    );
});
this.addEventListener('fetch', function (evt) {
    var reqUrl = evt.request.url;
    if(reqUrl == "https://egret.sinaapp.com/worker3/okok"){
        
    }
    evt.respondWith(
        caches.match(evt.request).then(function(response) {
            if (response) {
                console.log('fetch',reqUrl);
                return response;
            }
            var request = evt.request.clone();
            return fetch(request).then(function (response) {
                if(reqUrl == "https://egret.sinaapp.com/worker3/okok"){
                    console.log('create new response:',reqUrl);
                    return new Response(catchVersion,{ "Content-Type": "text/html","status":200 });
                }else{
                    console.log('nofetch:',reqUrl)
                    return response;
                }
            });
        })
    )
});
this.addEventListener('activate', function(event) {
    //var cacheWhitelist = ['whiteList-v1'];
    var cacheWhitelist = [catchVersion];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    console.log('cacheName',cacheName);
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('clean oldCatch',cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

