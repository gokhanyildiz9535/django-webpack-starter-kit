from core.base import *

DEBUG = False

# You should add your domain name and static IP
ALLOWED_HOSTS = ["*"]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'prod.sqlite3'),
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

if not DEBUG:
    WEBPACK_LOADER.update({
        'DEFAULT': {
            # 'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'staticfiles/bundles/stats.json')
        }
    })

# For Deployment
# You should open these lines while it transfers to the server

# CSRF_COOKIE_SECURE = True
# SESSION_COOKIE_SECURE = True
# SECURE_BROWSER_XSS_FILTER = True
# SECURE_CONTENT_TYPE_NOSNIFF = True
# SECURE_SSL_REDIRECT = True
# SECURE_HSTS_SECONDS = 86400
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True
# SECURE_HSTS_PRELOAD = True    