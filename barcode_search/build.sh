#!/usr/bin/env bash

set -eux

rm -rf dist

mkdir dist

cp src/index.html dist/ 2>/dev/null
cp src/manifest.json dist/ 2>/dev/null

cp -a src/images dist/ 2>/dev/null

cp -a src/css dist/ 2>/dev/null

mkdir dist/js

webpack

workbox generateSW workbox-config.js

