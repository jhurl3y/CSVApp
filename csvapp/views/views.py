# project/server/main/views.py

from flask import render_template, Blueprint

################
#### config ####
################


views_blueprint = Blueprint('views', __name__,)


################
#### routes ####
################


@views_blueprint.route('/')
def index():
    return render_template('index.jinja2')
