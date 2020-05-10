# csvapp/__init__.py

import os
import json
from flask import Flask, render_template
from csvapp.views.views import views_blueprint
from flask_cors import CORS


################
#### config ####
################
UPLOAD_FOLDER = os.environ.get('UPLOAD_FOLDER')
WEBPACK_MANIFEST = os.environ.get('WEBPACK_MANIFEST')

app = Flask(
    __name__,
    template_folder='./templates',
    static_folder='../dist'
)

config = 'csvapp.config.{}Config'.format(
    os.environ['FLASK_ENV'].title()
)
app_settings = os.getenv('APP_SETTINGS', config)
app.config.from_object(app_settings)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Create uploads folder
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Set the webpack built js file
with open(WEBPACK_MANIFEST) as manifest:
    app.jinja_env.globals['WEBPACK_APP'] = json.load(
        manifest).get(os.environ.get('WEBPACK_APP'))

# Enable cross-origin AJAX requests
CORS(app)

###################
### blueprints ####
###################

app.register_blueprint(views_blueprint)
