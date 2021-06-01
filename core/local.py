from core.base import *

DEBUG = True

ALLOWED_HOSTS = ["*"]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# DATABASES = {
#     'default': {
#         'ENGINE': env('DB_ENGINE'),
#         'NAME': env('DB_NAME'), 
#         'USER': env('DB_USERNAME'), 
#         'PASSWORD': env('DB_PASSWORD'),
#         'HOST': env('DB_HOST'), 
#         'PORT': env('DB_PORT'),
#     }
# }

WEBPACK_LIVE_SERVER = True

if DEBUG and WEBPACK_LIVE_SERVER:
    WEBPACK_LIVE_SERVER_CONFIG = {
        'ADDRESS': 'http://localhost:8080/static/dev'
    }

if not DEBUG:
    WEBPACK_LOADER.update({
        'DEFAULT': {
            # 'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'staticfiles/bundles/stats.json')
        }
    })

