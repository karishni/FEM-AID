import './Glass.css'
import { useState } from 'react'
import axios from 'axios'
import Diabeties from "../Assets/Diabeties1.jpg"

//var axios = require('axios');
//var FormData = require('form-data');
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
  const [predicted, setPredicted] = useState(false)
  const [diabetes, setDiabetes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    data.append('Pregnancies', Pregnancies);
    data.append('Glucose', Glucose);
    data.append('BloodPressure', BloodPressure);
    data.append('SkinThickness', SkinThickness);
    data.append('Insulin', Insulin);
    data.append('BMI', BMI);
    data.append('DiabetesPedigreeFunction', DiabetesPedigreeFunction);
    data.append('Age', Age);
    //console.log(Pregnancies.toString());
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
      console.log(response.data.diabetes);
      if (response.data.diabetes === '1'){
        setDiabetes('Yes')
      }else{
        setDiabetes('No')
      }
      setPredicted(true);
      console.log(predicted)
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
    <div className='text'>
    <div className = "row">
    {(predicted) ? ((diabetes ==='Yes')? (
      <div className = "column">{diabetes}</div>)
      :(<div className = "column">{diabetes}</div>)): (
    <div className = "column">
      <div className='image'>
      <img src={Diabeties} className="exp__image" alt="" />
      </div>
      
      <b>Pregnancies:</b> No. of pregnancies you've had (if any)<br></br><br></br>
      <b>Glucose:</b> Your blood sugar level in mg/dL<br></br><br></br>
      <b>Blood Pressure:</b> Enter your diastolic blood pressure.<br></br><br></br>
      For example: in 132/88 mmHg , 88 is the diastolic blood pressure<br></br><br></br>
      <b>Skin Thickness: </b>Triceps skin fold thickness in mm<br></br><br></br>
      <b>Insulin:</b> Your insulin level in pmol/L<br></br><br></br>
      <b>BMI:</b> Click here to calculate your body mass index<br></br><br></br>
      <b>Diabetes Pedigree Function:</b>A function which scores likelihood of diabetes based on family history<br></br><br></br>
      <b>Age: </b>Enter your age
    </div>
    
    )}
    <div className="glass column">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h2>Diabetes</h2>
        <div className="glass__form__group">
          <label>Number of Pregnancies</label><br/>
          <input
            id="Pregnancies"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="number"
            value={Pregnancies}
            onChange={(e) => setPregnancies(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Glucose</label><br/>
          <input
            id="Glucose"
            className="glass__form__input"
            //placeholder="Glucose"
            //required
            type="number"
            value={Glucose}
            onChange={(e) => setGlucose(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Blood Pressure</label><br/>
          <input
            id="BloodPressure"
            className="glass__form__input"
            //placeholder="BloodPressure"
            //required
            type="number"
            value={BloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Skin Thickness</label><br/>
          <input
            id="SkinThickness"
            className="glass__form__input"
            //placeholder="SkinThickness"
            //required
            type="number"
            value={SkinThickness}
            onChange={(e) => setSkinThickness(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Insulin</label><br/>
          <input
            id="Insulin"
            className="glass__form__input"
            //placeholder="Insulin"
            //required
            type="number"
            value={Insulin}
            onChange={(e) => setInsulin(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>BMI</label><br/>
          <input
            id="BMI"
            className="glass__form__input"
            //placeholder="BMI"
            //required
            type="number"
            value={BMI}
            onChange={(e) => setBMI(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Diabetes Pedigree Function</label><br/>
          <input
            id="DiabetesPedigreeFunction"
            className="glass__form__input"
            //placeholder="DiabetesPedigreeFunction"
            //required
            type="number"
            value={DiabetesPedigreeFunction}
            onChange={(e) => setDiabetesPedigreeFunction(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Age</label><br/>
          <input
            id="Age"
            className="glass__form__input"
            //placeholder="Age"
            //required
            type="number"
            value={Age}
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
    </div>
    </div>
  )
}

export default Glass