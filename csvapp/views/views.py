# project/server/main/views.py
from flask import render_template, Blueprint
import json
from csvapp.lib.utils import get_file_data

################
#### config ####
################


views_blueprint = Blueprint('views', __name__,)


################
#### routes ####
################


@views_blueprint.route('/')
def index():
    csv_data = get_file_data('uploads/csv')
    return render_template('index.jinja2', data=json.dumps(csv_data))
