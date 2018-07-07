#!/bin/env bash

set -eux

rm -rf dist

mkdir dist

cp src/index.html dist/ 2>/dev/null
cp src/manifest.json dist/ 2>/dev/null

cp -a src/images dist/ 2>/dev/null

cp -a src/css dist/ 2>/dev/null

mkdir dist/js
cp src/js/bootstrap-material-design.min.js dist/js/ 2>/dev/null
cp src/js/jquery-3.3.1.slim.min.js dist/js/ 2>/dev/null
cp src/js/popper.min.js dist/js/ 2>/dev/null

webpack

workbox generateSW workbox-config.js

