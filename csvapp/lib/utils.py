import os
import csv
from flask import current_app as app, jsonify
from datetime import datetime


def get_file_data(dir_str, suffix=".csv"):
    csv_data = []
    directory = os.fsencode(dir_str)

    for file in os.listdir(directory):
        path = os.path.join(directory, file)
        name = os.fsdecode(file)

        # Only include files with suffix
        if name.endswith(suffix):
            csv_data.append(
                _build_file_info(
                    name=name,
                    size=_get_file_size(path),
                    modified=_get_file_last_modified(path)
                )
            )

    return csv_data


def save_file(file, directory):
    # Get all files uploaded
    files = {os.fsdecode(f) for f in os.listdir(directory)}
    filename = file.filename

    if filename in files:
        raise FileExistsError

    # Save the file
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    # Return the file info
    path = os.path.join(directory, filename)
    return _build_file_info(
        name=filename,
        size=_get_file_size(path),
        modified=_get_file_last_modified(path)
    )


def delete_file(filename, directory):
    # Get all files uploaded
    files = {os.fsdecode(f) for f in os.listdir(directory)}

    if filename not in files:
        raise FileExistsError

    # Delete the file
    os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))


def read_csv_file(filename, directory):
    # Get all files uploaded
    files = {os.fsdecode(f) for f in os.listdir(directory)}

    if filename not in files:
        raise FileExistsError

    # Read the file
    path = os.path.join(directory, filename)
    with open(path, newline='') as f:
        reader = csv.reader(f)
        data = [tuple(row) for row in reader]

    return data


def success_resp(data=None, message=''):
    code = 200
    response = jsonify({
        'status': code,
        'data': data,
        'message': message,
    })
    response.status_code = code
    return response


def error_resp(status_code, message):
    response = jsonify({
        'status': status_code,
        'message': message,
    })
    response.status_code = status_code
    return response


def _get_file_size(path):
    size = os.path.getsize(path)
    return '{} kB'.format(size/1000)


def _get_file_last_modified(path):
    modified_unix = os.path.getmtime(path)
    return datetime.fromtimestamp(
        modified_unix).strftime("%Y-%m-%d %H:%M:%SZ")


def _build_file_info(name, size, modified):
    return {
        'name': name,
        'size': size,
        'modified': modified
    }
