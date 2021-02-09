#!/bin/bash
REPO=harbor.chlin.tk/bfop
CONTAINER=vote-ui
TAG=base
DOCKER_IMAGE=$REPO/$CONTAINER:$TAG

DOCKER_IMAGE=harbor.chlin.tk/bfop/chat-room-ui:488d49f_20210105121056

echo $DOCKER_IMAGE

docker rm -f utest

docker run --name utest --restart always -p 8201:80 -d $DOCKER_IMAGE nginx -g 'daemon off;'
