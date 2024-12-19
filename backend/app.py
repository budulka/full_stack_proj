from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import joblib
import numpy as np


app = Flask(__name__)
CORS(app, supports_credentials=True, origins = ["http://localhost:8000", "http://127.0.0.1:8000", "http://nest-backend:8000", "https://nesst-production.up.railway.app/items/predict"])

model = joblib.load('img_clsfr.joblib')

def flatten_images(images):
    num_samples, height, width, channels = images.shape
    return images.reshape(num_samples, height * width * channels)
    

@app.route('/predict', methods = ['POST'])
def predict():

    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    file = request.files['image']
    img = Image.open(file.stream)
    img = img.resize((64, 64))
    img_array = np.array(img) / 255.0
    img_array = img_array.reshape(1, 64, 64, 3)
    img_array = flatten_images(img_array)  
    prediction = model.predict(img_array)

    return jsonify({'prediction': prediction.tolist()})


if __name__ == '__main__':
    app.run('0.0.0.0', port = 3000)
