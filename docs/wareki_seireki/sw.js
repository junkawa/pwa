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
    "revision": "1581caac7f97ce07ba4eebdd670af760"
  },
  {
    "url": "index.html",
    "revision": "95c58b6710a22192d6159062ad62647e"
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
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
