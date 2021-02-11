#!/bin/bash
TAG=$(docker images | grep vote-ui | awk 'NR==1{print$2}')
echo $TAG
export TAG=$TAG
docker-compose up -d