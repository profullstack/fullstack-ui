#!/usr/bin/env bash

. .env
<<<<<<< HEAD

args=(-azvP --delete --exclude=node_modules --exclude=.idea --exclude=.git)
hosts=(geese) # tornado lightning thunder tundra jefferson
dry=() #add --dry-run to enable testing
user=$FULLSTACK_NAME
name=$FULLSTACK_PATH
project=$FULLSTACK_PROJECT
=======
. $HOME/.bashrc

args=(-azvP --delete --exclude=node_modules --exclude=.idea --exclude=.git)
hosts=(toruladev) # tornado lightning thunder tundra jefferson
dry=() #add --dry-run to enable testing
user=$TORULA_USER
name=$TORULA_PATH
project=torula-ui
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51

for host in "${hosts[@]}"
do
  echo ""
  date
  echo "---------------------"
  echo "syncing ${host}"
  echo "---------------------"
  rsync ${dry[@]} ${args[@]} ./ ${user}@${host}:www/${name}/${project}
  #ssh -t ${user}@${host} \$HOME/www/${name}/${project}/bin/post-deploy.sh
done

version=$(jq -r .version package.json)
<<<<<<< HEAD
say "fullstack UI is live!"
=======
say "torula UI is live!"
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
exit
