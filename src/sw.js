importScripts("/cache-polyfill.js");

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                '/AddButton.js',
                '/App.css',
                '/App.js',
                '/App.test.js',
                '/AppBar.js',
                '/baseline-exit_to_app-24px.svg',
                '/index.css',
                '/index.js',
                '/Login.js',
                '/loginIcon.png',
                '/logo.svg',
                '/serviceWorker.js',
                '/Task.js',
                '/TaskPlanner.js',
                '/TaskPlannerDrawer.js',
                '/user.png',
                '/index.html',
                '/favicon.ico'
            ]);
        })
    );
});