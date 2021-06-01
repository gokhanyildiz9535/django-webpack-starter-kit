#!/usr/bin/env sh

fileName="backup_`date +%y-%m-%d__%H-%M-%S`__UTC3"
echo $fileName" is created..."
cp ./project_files/exportdb.pgsql ./project_files/backup/$fileName.pgsql
