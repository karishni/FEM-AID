import './Glass.css'
import { useState } from 'react'
//import axios from 'axios'

var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();

function Glass() {
  const [Pregnancies, setPregnancies] = useState('')
  const [Glucose, setGlucose] = useState('')
  const [BloodPressure, setBloodPressure] = useState('')
  const [SkinThickness, setSkinThickness] = useState('')
  const [Insulin, setInsulin] = useState('')
  const [BMI, setBMI] = useState('')
  const [DiabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState('')
  const [Age, setAge] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    data.append('Pregnancies', '0');
    data.append('Glucose', '120');
    data.append('BloodPressure', '120');
    data.append('SkinThickness', '20');
    data.append('Insulin', '80');
    data.append('BMI', '33');
    data.append('DiabetesPedigreeFunction', '0.77');
    data.append('Age', '55');

    //const params = { Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age }
    //const params = { 0, 120, 120, 20, 80, 33, 0.7, 44 }
    
    var config = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://fem-aid-diabetes.herokuapp.com/predict',
      headers: { 
        'content-type': 'string'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  const reset = () => {
    setPregnancies('')
    setGlucose('')
    setBloodPressure('')
    setSkinThickness('')
    setInsulin('')
    setBMI('')
    setDiabetesPedigreeFunction('')
    setAge('')
  }

  return (
    <div className="glass">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h4>Employment Data</h4>
        <div className="glass__form__group">
          <input
            id="Pregnancies"
            className="glass__form__input"
            placeholder="Pregnancies"
            //required
            type="number"
            value={'0'}
            onChange={(e) => setPregnancies(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="Glucose"
            className="glass__form__input"
            placeholder="Glucose"
            //required
            type="number"
            value={'120'}
            onChange={(e) => setGlucose(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="BloodPressure"
            className="glass__form__input"
            placeholder="BloodPressure"
            //required
            type="number"
            value={'120'}
            onChange={(e) => setBloodPressure(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="SkinThickness"
            className="glass__form__input"
            placeholder="SkinThickness"
            //required
            type="number"
            value={'20'}
            onChange={(e) => setSkinThickness(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="Insulin"
            className="glass__form__input"
            placeholder="Insulin"
            //required
            type="number"
            value={'80'}
            onChange={(e) => setInsulin(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="BMI"
            className="glass__form__input"
            placeholder="BMI"
            //required
            type="number"
            value={'33'}
            onChange={(e) => setBMI(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="DiabetesPedigreeFunction"
            className="glass__form__input"
            placeholder="DiabetesPedigreeFunction"
            //required
            type="number"
            value={'0.77'}
            onChange={(e) => setDiabetesPedigreeFunction(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="Age"
            className="glass__form__input"
            placeholder="Age"
            //required
            type="number"
            value={'44'}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>




        <div className="glass__form__group">
          <button type="submit" className="glass__form__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Glass