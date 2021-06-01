#!/usr/bin/env sh
# echo 'First arg:' $1 
# echo 'Second arg:' $2 
# usage: gpush "update project"
git add .
git commit -m "$1"
git push origin main