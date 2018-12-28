#!/usr/bin/env bash

# load node v6
. $HOME/.bashrc
. "$NVM_DIR/nvm.sh" && nvm use v11

host=$TORULA_HOST
name=$TORULA_PATH
project=torula-ui

node -v
npm -v

echo "current host: $host"

cd $HOME/www/${name}/${project}
npm i
npm run start:dev:cluster &
