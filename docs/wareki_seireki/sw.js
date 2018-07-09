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
    "revision": "56b0278c449853c32f67dcb799f486a0"
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
    "revision": "8df0986742799608d6c46666b7fa4385"
  },
  {
    "url": "js/app.js",
    "revision": "45c52904e5053450179b889116035fec"
  },
  {
    "url": "manifest.json",
    "revision": "dbeef63013fe64b87578ed407bd438bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/unpkg\.com/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/code\.jquery\.com/, workbox.strategies.cacheFirst(), 'GET');
