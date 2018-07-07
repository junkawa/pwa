#!/bin/env bash

set -eux

eslint ./src/js/

mocha
