# Django Webpack Starter Kit

Hello to everyone. This repository includes a quick starter kit for django-based web development users or those who are currently developing. There are frontend and backend components that are very important for developers. You can get a quick start on a new django project via this repository. Basically, the most necessary structures were added to the project.
The Repository currently includes the following versions. 
```
Python 3.9.*
Node 14.16.*
Django 3.2.*
Webpack 5.4.*
Bootstrap 4.6.*
Pipenv
```
## Important 

- Make a copy from the ".env-example" file.
- Set the name of the created copy to ".env".
- Enter the SECRET_KEY information of your own project into the ".env" file.
- You can assign the versions if you want in "requirements.txt".
- You may need to update versions in "package.json" file.
- Be sure to check the "requirements.txt", "package.json" and ".env" files.


## Some Features of the Django Webpack Starter Kit

- django-admin files are hosted in the core folder.
- The settings.py file inside the core folder is fragmented.
- settings.py file consists of 3 files as base.py, local.py and prod.py.
- Webpack bundle files are hosted in the assets folder.
- Components in the assets/scss, assets/css, assets/ts and assets/js folders are converted into bundles for production preparations and copied under the staticfiles folder.
- Under the static folder, you can host js or css files that you do not use with import.
- Under the project, templates are located in the main directory, but also contain basic pages.
- There is a javascript obfuscator in the project. With this plugin, the content of your javascript files will be encrypted. However, using this feature increases the size of your javascript files in production environment.
- While staticfiles files are prepared via babel, javascript files are generated to run in almost all browsers.
- All the codes in the project have been tested.
- You can access the production sample of the project here: [Django Webpack Starter Kit Production](https://djangowebpack.pythonanywhere.com/)

## Future Works
- Some important deployment environment files will be added. [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-deploy-django-to-app-platform)
- Docker container image file will be added. [Docker Composer](https://docs.docker.com/samples/django/)
- New template will be prepared to allow django vue webpack loader packages to work together. The aim is to develop fast web applications based on js/ts/scss/css and python. [Vue.js](https://vuejs.org/)

## Installing for Linux Environment
```
git clone https://github.com/gokhanyildiz9535/django-webpack-starter-kit
python3 -m venv .venv
source .venv/bin/activate
pip install pipenv
pipenv install
npm install -g yarn
yarn or npm i
```


## Installing for Windows Environment
```
git clone https://github.com/gokhanyildiz9535/django-webpack-starter-kit
pip install pipenv
pipenv install -r requirements.txt
Restart IDE, Select Python Interpreter on VS Code: CTRL+SHIFT+P
npm install -g yarn
yarn or npm i
```

## Update NodeJS Dependencies
Note: Versions specifically defined in "package.json" will be updated. However, this may affect the core dependencies of some libraries, causing a deprecated dependency to work. I recommend that you make sure which version you are working with.
```
npm install -g npm-check-updates
ncu -u
```


### Run JS Files with Global:
```
go package.json then add "bin" : {"myapp":"./bin/yourjsfile.js"}
your js file should be first line:
#!/usr/bin/env node
then execute code on cmd npm install -g .
after this you can run/execute code with cmd: myapp
```

### Run Project with Hot reload:
```
yarn start:yarn
yarn start:django
```

### Run Project with Production mode:
```
yarn build:prod
or
yarn build:final
yarn start:prod
```

## Update Database Preferences
- If you want to use the PostgreSQL database environment in your project, you need to update the databases object in local.py and prod.py again.
- The basic information required to connect to the database must be defined in ".env" environment.
- There are some sh files made related to the database in the project. You can make your database operations faster by means of these script files. Please do not forget to update the "./bin/db_info.txt" file to use these sh files.
- Please update the "bin: {}" category in package.json for quick access.
- To quickly use these files in your environment, run "npm install -g ."


### Basic Scripts
```
db_import [dbi]: Create database if not exists and import ./project_files/exportdb.pgsql if exists
db_export [dbe]: Database export to ./project_files/exportdb.pgsql
db_backup [dbb]: Copy to the backup folder exportdb.pgsql file with date info
db_removebackup [dbrb]: Clear ./project_files/backup/* directory files
db_remove_all_backup [dbra]: Clear ./project_files/* directory files
db_drop_database [dbdd]: Drop database table on the PostgreSQL
db_migrate_all [dbmg or yarn db:migrate]: Django database migration stuffs process
git_push [gpush]: Send Github commit with one command line like gpush "commit info"
```

### Automated Scripts
```
db_export_backup [deb]: Database export and backup into the ./project_files/backup
db_rollback [dbr]: Go back to the previous backup database file to the database
```

## Thanks

* Colt Steele - [Webpack Course YouTube](https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8)
* Chi Shang Cheng - [Integrating webpack-dev-server with Django](https://cscheng.info/2016/08/03/integrating-webpack-dev-server-with-django.html)
* Ganesh Khade - [Django Webpack Starter](https://github.com/khadegd/django-webpack-starter)


## Authors

* **Gokhan Yildiz** - [Send Mail](mailto:gokhanyildiz9535@gmail.com)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details