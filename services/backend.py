from __future__ import annotations
#flask imports
from flask import jsonify, request
from flask import Flask
from flask_cors import CORS

import os

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

#Make files to upload
UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route('/api/fileUpload', methods=['POST'])
def process_data():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400


    uploaded_file = request.files['file']

    if uploaded_file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    file_path = os.path.join(UPLOAD_FOLDER, uploaded_file.filename)
    uploaded_file.save(file_path)

    data = request.form
    print("\n\n\n")
    print(f"{data.get('formData')}")
    print(f"Type of data: {type(data)}")
    print(f"Data: {data}\n\n\n")

    return jsonify({"message": f"File '{uploaded_file.filename}' uploaded successfully!"}), 200


if __name__ == '__main__':
   app.run(host= "127.0.0.1", port=8000, debug=True)