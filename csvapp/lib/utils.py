import os
from datetime import datetime


def get_file_data(dir_str, suffix=".csv"):
    csv_data = []
    directory = os.fsencode(dir_str)

    for file in os.listdir(directory):
        path = os.path.join(directory, file)

        # The data to include:
        # name, size (kB), last modified
        name = os.fsdecode(file)
        size = os.path.getsize(path)
        size_str = '{} kB'.format(size/1000)
        modified_unix = os.path.getmtime(path)
        modified_str = datetime.fromtimestamp(
            modified_unix).strftime("%Y-%m-%d %H:%M:%SZ")

        # Only include files with suffix
        if name.endswith(suffix):
            csv_data.append({
                'name': name,
                'size': size_str,
                'modified': modified_str
            })

    return csv_data
