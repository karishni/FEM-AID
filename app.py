from urllib import request
import pickle
import numpy as np

from flask import Flask, request, jsonify

model = pickle.load(open('diabetes-prediction-rfc-model.pkl', 'rb'))

app = Flask(__name__)

from flask_cors import CORS, cross_origin
CORS(app, support_credentials=True)

@app.route('/')
def home():
    return "Hello World"


@app.route('/predict', methods=['POST'])
def predict():
    Pregnancies = request.form.get('Pregnancies')
    Glucose = request.form.get('Glucose')
    BloodPressure = request.form.get('BloodPressure')
    SkinThickness = request.form.get('SkinThickness')
    Insulin = request.form.get('Insulin')
    BMI = request.form.get('BMI')
    DiabetesPedigreeFunction = request.form.get('DiabetesPedigreeFunction')
    Age = request.form.get('Age')

    input_query = np.array(
        [[Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age]])

    result = model.predict(input_query)[0]

    return jsonify({'diabetes': str(result)})


if __name__ == '__main__':
    app.run(debug=True)