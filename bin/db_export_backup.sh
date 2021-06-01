#!/usr/bin/env sh

IFS=$'\r\n' read -d '' -r -a lines < ./bin/db_info.txt

PGPASSWORD=${lines[2]} pg_dump -U ${lines[1]} ${lines[0]} > ./project_files/exportdb.pgsql

fileName="backup_`date +%y-%m-%d__%H-%M-%S`__UTC3"

cp ./project_files/exportdb.pgsql ./project_files/backup/$fileName.pgsql

echo $fileName" is created..."