#!/usr/bin/env sh

IFS=$'\r\n' read -d '' -r -a lines < ./bin/db_info.txt

findrecent() { { find "$1" -maxdepth 1 -type f -exec stat -c "%n" {} + | sort -r | head -1 && find "$1" -mindepth 1 -maxdepth 1 -type d -exec findrecent {} \;; } | sort -r | head -1; }

latestBackup="$(findrecent ./project_files/backup/)";
if [[ $latestBackup == "" ]]; then
    echo "There is no any backup on the directory"
else 
    echo "Found Latest Backup: "$latestBackup 
    PGPASSWORD=${lines[2]} psql postgres postgres << EOF
    /* db connection terminate, drop database and create database */
    SELECT * FROM pg_stat_activity WHERE datname = '${lines[0]}';
    SELECT pg_terminate_backend (pid) FROM pg_stat_activity WHERE pg_stat_activity.datname='${lines[0]}';
    DROP DATABASE IF EXISTS ${lines[0]};
    CREATE DATABASE ${lines[0]}
    WITH 
    OWNER = ${lines[1]}
    TEMPLATE = template0
    ENCODING = 'UTF8'
    LC_COLLATE = 'UTF8'
    LC_CTYPE = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
EOF

    PGPASSWORD=${lines[2]} psql -U ${lines[1]} -d ${lines[0]} -q -f $latestBackup
fi