#!/usr/bin/env bash

cd "$(dirname "$0")/.."
. .env
. $HOME/.bashrc
. "$NVM_DIR/nvm.sh" && nvm use v11

user=$HOST_USER
name=$HOST_PATH
project=$HOST_PROJECT

echo "current name: $name"

if [[ $name == "fullstack-dev" ]]; then
  cd $HOME/www/${name}/${project}
  npm i
  npm run start:cluster &
else
  npm i
  npm run start:production
fi
