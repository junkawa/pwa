#!/bin/env bash

rm -rf dist && mkdir dist && cp -a src/* dist/ 2>/dev/null && workbox generateSW workbox-config.js

