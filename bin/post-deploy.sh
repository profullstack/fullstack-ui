#!/usr/bin/env bash

# load node v6
. $HOME/.bashrc
. "$NVM_DIR/nvm.sh" && nvm use v7

production=$FULLSTACK_PRODUCTION_HOST
host=$(hostname)
name=fullstack
project=fullstack-ui

node -v
npm -v

echo "current host: $host production: $production"

if [[ $host == "$production" ]]; then
  cd $HOME/www/${name}/${project}
  #npm i
  #npm run start:cluster &
fi
