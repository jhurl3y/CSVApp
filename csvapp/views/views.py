# project/server/main/views.py
import os
from flask import (
    request,
    render_template,
    Blueprint,
    current_app as app,
)
import json
from csvapp.lib.utils import (
    get_file_data,
    save_file,
    delete_file,
    read_csv_file,
    success_resp,
    error_resp,
    _build_file_info
)

################
#### config ####
################


views_blueprint = Blueprint('views', __name__,)


################
#### routes ####
################


@views_blueprint.route('/')
def index():
    try:
        csv_data = get_file_data(app.config['UPLOAD_FOLDER'])
    except FileNotFoundError:
        return render_template('index.jinja2', data=json.dumps([]))

    return render_template('index.jinja2', data=json.dumps(csv_data))


@views_blueprint.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return error_resp(400, 'No file passed')

    file = request.files['file']
    if file.filename == '':
        return error_resp(400, 'No selected file')

    try:
        file = save_file(file, app.config['UPLOAD_FOLDER'])
    except FileExistsError:
        return error_resp(400, 'File already exists')
    except Exception:
        return error_resp(500, 'Could not save file')

    return success_resp(data={
        'file': _build_file_info(
            name=file.get('name'),
            size=file.get('size'),
            modified=file.get('modified')
        )
    })


@views_blueprint.route('/delete/<string:filename>', methods=['DELETE'])
def delete(filename):
    try:
        delete_file(filename, app.config['UPLOAD_FOLDER'])
    except FileExistsError:
        return error_resp(400, 'File does not exists')
    except Exception:
        return error_resp(500, 'Could not delete file')

    return success_resp(message='Deleted file')


@views_blueprint.route('/get/<string:filename>', methods=['GET'])
def get(filename):
    try:
        csv_data = read_csv_file(filename, app.config['UPLOAD_FOLDER'])
    except FileExistsError:
        return error_resp(400, 'File does not exists')
    except Exception:
        return error_resp(500, 'Could not get file')

    return success_resp(data={
        'file': csv_data
    })
