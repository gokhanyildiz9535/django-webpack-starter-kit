#!/usr/bin/env sh

IFS=$'\r\n' read -d '' -r -a lines < ./bin/db_info.txt

PGPASSWORD=${lines[2]} pg_dump -U ${lines[1]} ${lines[0]} > ./project_files/exportdb.pgsql