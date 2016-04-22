if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/worker2/sw2.js').then(function(registration) {
    // Registration was successful
      document.getElementById('app').innerHTML="succ2"
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
      document.getElementById('app').innerHTML="failed"
    console.log('ServiceWorker registration failed: ', err);
  });
}