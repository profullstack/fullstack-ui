#!/usr/bin/env bash

cd "$(dirname "$0")/.."
. .env
. $HOME/.bashrc
. "$NVM_DIR/nvm.sh" && nvm use v11

user=$FULLSTACK_USER
name=$FULLSTACK_PATH
project=$FULLSTACK_PROJECT

node -v
npm -v

echo "current name: $name"

if [[ $name == "fullstack-dev" ]]; then
  cd $HOME/www/${name}/${project}
  npm i
  npm run start:cluster &
else
  npm i
  npm run start:production
fi
