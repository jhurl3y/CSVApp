# csvapp/__init__.py

import os
from flask import Flask, render_template
from csvapp.views.views import views_blueprint
from flask_cors import CORS


################
#### config ####
################
UPLOAD_FOLDER = 'uploads/csv'
app = Flask(
    __name__,
    template_folder='./templates',
    static_folder='../dist'
)
CORS(app)

app_settings = os.getenv(
    'APP_SETTINGS', 'csvapp.config.DevelopmentConfig')
app.config.from_object(app_settings)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


###################
### blueprints ####
###################

app.register_blueprint(views_blueprint)
