#!/usr/bin/env sh

python manage.py makemigrations --settings=core.local

python manage.py migrate --settings=core.local