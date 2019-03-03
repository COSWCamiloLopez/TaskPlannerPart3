# Task Planner PWA

1. Find a suitable icon for your app and generate your app image resources using the following tool:
 https://app-manifest.firebaseapp.com/
2. Go to the Firebase console and create a new project called Taks Planner App
 https://console.firebase.google.com
3. Open the *manifest.json* file and copy the *icons* object into your manifest.json below the *name* attribute:
    ```javascript
        "name": "Task Planner App",
        "icons": [
        {
          "src": "images/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        }, 
        ...
    ```
4. Follow the instructions to connect your project with the firebase console using the Firebase tools:
 https://firebase.google.com/docs/hosting/quickstart

5. Go the url displayed on the console and verify that you can access your project online.


# Part 2: Make your PWA instalable (Android Devices)
In order to be able to display the install dialog, we need to modify our service worker. To understand a bit more about Service Workers read this article: https://developers.google.com/web/fundamentals/primers/service-workers/

1. Go the official React documentation and understand how to enable offline-first behaviour of your App
  https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

2. Once you have registered your service worker run your App and verify on the developer tools that the service worker is activated.

3. Modify your *serviceWorker.js* in order to add a listener for the install event (This code should be added on the *register* function)  
```javascript
    export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return;
        }
        //Add this part of code to your serviceWorker.js
        window.addEventListener('install', () => {
            console.log("install!!");
        });
```
    
4. Deploy your project to firebase and open the url on an Android Smartphone to verify the instalation and your App running as PWA!
5. You can create your own script to facilitate the build and deploy process modifying the *package.json* file scripts:
     ```javascript
         "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject",
            "buildeploy": "npm run build && firebase deploy"
          },
    ```
6. Make sure your *public* directory is the *build* generated by the build script on the *firebase.json* file
     ```javascript
        {
          "hosting": {
            "public": "build",
            "ignore": [
              "firebase.json",
              "**/.*",
              "**/node_modules/**"
            ]
          }
        }
    ```
7. run from the console the new command *npm run buildeploy* and verify that it works as expected.
