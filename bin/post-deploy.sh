#!/usr/bin/env bash

<<<<<<< HEAD
cd "$(dirname "$0")/.."
. .env
. $HOME/.bashrc
. "$NVM_DIR/nvm.sh" && nvm use v11

user=$FULLSTACK_USER
name=$FULLSTACK_PATH
project=$FULLSTACK_PROJECT
=======
# load node v6
. $HOME/.bashrc
. "$NVM_DIR/nvm.sh" && nvm use v11

host=$TORULA_HOST
name=$TORULA_PATH
project=torula-ui
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51

node -v
npm -v

<<<<<<< HEAD
echo "current name: $name"

if [[ $name == "fullstack-dev" ]]; then
  cd $HOME/www/${name}/${project}
  npm i
  npm run start:cluster &
else
  npm i
  npm run start:production
fi
=======
echo "current host: $host"

cd $HOME/www/${name}/${project}
npm i
npm run start:dev:cluster &
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
