#!/bin/bash

export FLASK_APP=csvapp/__init__.py
export FLASK_ENV=production
export UPLOAD_FOLDER=uploads/csv
export WEBPACK_MANIFEST=dist/manifest.json
export WEBPACK_APP=app.js

gunicorn --bind 0.0.0.0:8000 wsgi