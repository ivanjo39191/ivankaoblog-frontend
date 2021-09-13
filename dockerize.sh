#!/bin/bash
version=$1
echo Version: ${version};
docker build -t ttime-frontend:${version} .
docker tag ttime-frontend:${version} ttime-frontend:latest
docker tag ttime-frontend:${version} ttime-demo.ivankaoblog.com:6443/ttime-frontend/ttime-frontend:${version}
docker push ttime-demo.ivankaoblog.com:6443/ttime-frontend/ttime-frontend:${version}