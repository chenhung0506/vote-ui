#!/bin/bash
REPO=harbor.chlin.tk/vue
CONTAINER=vote-ui
TAG=307480e_20210209162134
DOCKER_IMAGE=$REPO/$CONTAINER:$TAG

echo $DOCKER_IMAGE

docker rm -f $CONTAINER

docker run --name $CONTAINER --restart always -p 80:80 -d $DOCKER_IMAGE nginx -g 'daemon off;'
