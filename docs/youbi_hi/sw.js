/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "73ed66b94a83b41b547f499b62b5da1e"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "52bd6f677ad02075fbf9bb631f1dca91"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "6c7464b91b0515757fccef99bdc0ce53"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7a4b2382b9093c37d4c997eff32969f5"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "3bfd89524ef9792fd342cda45bfb025d"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "39d84304be6981c1451bd25775823dde"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "e2c23030c18c5afa3bf84ff0b5e3d083"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "bba236c1bb40463d345c07ffec578d6e"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "201d90b45211c8a233bc966ee0f557e5"
  },
  {
    "url": "index.html",
    "revision": "f39247ab46a581f213b85f7aaace06f4"
  },
  {
    "url": "js/bundle.js",
    "revision": "cf16c8ccc33bca12f440c9068d6380c3"
  },
  {
    "url": "manifest.json",
    "revision": "2234e37f7d80ea0f2c6ad19e736504d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/unpkg\.com/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/code\.jquery\.com/, workbox.strategies.cacheFirst(), 'GET');
