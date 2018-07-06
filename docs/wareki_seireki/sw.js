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
    "url": "css/bootstrap-material-design.min.css",
    "revision": "840df82985d3b2a4b3ee41ce91358737"
  },
  {
    "url": "css/style.css",
    "revision": "6bbd2103b17769c6d4846cd6479c1ae8"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "10e9ab2b4d410e89624bd136aa2ff8df"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "e08a78b72c3e785126100b09d80013bd"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7af9e13512af844c5535628c570ec3ee"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "db695a8c21153e234682ad420f671f09"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "55c2b502fe696fcc215bc42975318ba5"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "de7bccd6afcf813f2260a107c73470a2"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "9cadfae5e2ca4fb048d1846c858ee753"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "dc27ae3d22f2b2dbccae7b1e830079ed"
  },
  {
    "url": "index.html",
    "revision": "bfb0dfd88a6ca55f4078115e7ba07f5f"
  },
  {
    "url": "js/app.js",
    "revision": "45c52904e5053450179b889116035fec"
  },
  {
    "url": "js/bootstrap-material-design.min.js",
    "revision": "176e510edea8758837299ca38b90aa90"
  },
  {
    "url": "js/jquery-3.3.1.slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "js/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "manifest.json",
    "revision": "9e5c7d7496dcff0f40017ee5bc00ec71"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
