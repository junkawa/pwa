#!/usr/bin/env bash

set -eux

# called from package.json
DOC_DIR="../docs/${1}"

rm -rf ${DOC_DIR}

mkdir ${DOC_DIR}

cp -a dist/* ${DOC_DIR}/ 2> /dev/null

