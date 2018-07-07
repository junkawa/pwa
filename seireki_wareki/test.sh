#!/bin/env bash

set -eux

eslint ./src/js/app.js ./src/js/browser.js

mocha
