#!/bin/bash

git -C ~/btld-web pull
docker restart btld-web-build
