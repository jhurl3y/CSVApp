#!/bin/bash

export FLASK_APP=csvapp/__init__.py
export FLASK_ENV=production
export UPLOAD_FOLDER=uploads/csv
export WEBPACK_MANIFEST=dist/manifest.json
export WEBPACK_APP=app.js

gunicorn --bind 0.0.0.0:8000 wsgi

# gunicorn -b 0.0.0.0:8080 -w 3 wsgi
# gunicorn --daemon --workers 3 --bind unix:/home/vagrant/csvapp.sock wsgi
# gunicorn --bind unix:/home/vagrant/csvapp.sock wsgi

# [program:csvapp]
# command=/home/vagrant/pyenv/shims/gunicorn --workers 3 --bind unix:/home/vagrant/csvapp.sock wsgi
# directory=/opt/projects/CSVApp
# autostart=true
# autorestart=true
# stderr_logfile=/var/log/csvapp.err.log
# stdout_logfile=/var/log/csvapp.out.log

# [supervisord]
# environment=FLASK_APP=csvapp/__init__.py,FLASK_ENV=production,UPLOAD_FOLDER=uploads/csv,WEBPACK_MANIFEST=dist/manifest.json,WEBPACK_APP=app.js