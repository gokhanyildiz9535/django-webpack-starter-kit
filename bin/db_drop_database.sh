#!/usr/bin/env sh

IFS=$'\r\n' read -d '' -r -a lines < ./bin/db_info.txt

PGPASSWORD=${lines[2]} psql postgres postgres << EOF
    /* db connection terminate, drop database */
    SELECT * FROM pg_stat_activity WHERE datname = '${lines[0]}';
    SELECT pg_terminate_backend (pid) FROM pg_stat_activity WHERE pg_stat_activity.datname='${lines[0]}';
    DROP DATABASE IF EXISTS ${lines[0]};
EOF