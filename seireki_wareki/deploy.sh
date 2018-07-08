#!/usr/bin/env bash

set -eux

DOC_DIR="../docs/seireki_wareki"

rm -rf ${DOC_DIR}

mkdir ${DOC_DIR}

cp -a dist/* ${DOC_DIR}/ 2> /dev/null

