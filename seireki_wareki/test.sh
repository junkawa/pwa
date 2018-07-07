#!/bin/env bash

set -eux

eslint ./src/js/app.js

mocha
