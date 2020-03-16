# csvapp/__init__.py

import os
from flask import Flask, render_template
from csvapp.views.views import views_blueprint


################
#### config ####
################

app = Flask(
    __name__,
    template_folder='./templates',
    static_folder='../dist'
)

app_settings = os.getenv(
    'APP_SETTINGS', 'csvapp.config.DevelopmentConfig')
app.config.from_object(app_settings)


###################
### blueprints ####
###################

app.register_blueprint(views_blueprint)
