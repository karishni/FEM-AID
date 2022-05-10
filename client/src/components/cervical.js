import './Glass.css'
import { useState } from 'react'
import axios from 'axios'
import Diabeties from "D:/User_Data/Documents/FemAidMaxAgain/FEM-AID/client/src/Assets/Diabeties1.jpg"

//var axios = require('axios');
//var FormData = require('form-data');
//var data = new FormData();

function Cervical() {
  const [pregnant, setPregnant] = useState('')
  const [partners, setPartners] = useState('')
  const [intercourse, setIntercourse] = useState('')
  const [std, setSTD] = useState('')
  const [cin, setCIN] = useState('')
  const [hpv, setHPV] = useState('')
  const [Age, setAge] = useState('')
  const [predicted, setPredicted] = useState(false)
  const [cervical, setCervical] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    var data = new FormData();
    data.append('Age', '18');
    data.append('Partners', '4');
    data.append('Intercourse', '15');
    data.append('Pregnant', '1');
    data.append('STD', '0');
    data.append('CIN', 'Yes');
    data.append('HPV', 'No');
    //console.log(Pregnancies.toString());
    //const params = { Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age }
    //const params = { 0, 120, 120, 20, 80, 33, 0.7, 44 }
    
    var config = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://fem-aid-cancer-b.herokuapp.com/predict',
      headers: { 
        'content-type': 'string'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data.bioccancer);
      if (response.data.diabetes === '1.0'){
        setCervical('Yes')
      }else{
        setCervical('No')
      }
      setPredicted(true);
      console.log(predicted)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

//   const reset = () => {
//     setPregnancies('')
//     setGlucose('')
//     setBloodPressure('')
//     setSkinThickness('')
//     setInsulin('')
//     setBMI('')
//     setDiabetesPedigreeFunction('')
//     setAge('')
//   }

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
      <b>Diabetes Pedigree Function:</b><br></br><br></br>
      <b>Age: </b>Enter your age
    </div>
    
    )}
    <div className="glass column">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h2>Diabetes</h2>
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
          <label>Number of Sexual Partner</label><br/>
          <input
            id="partners"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="number"
            value={partners}
            onChange={(e) => setPartners(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Age at which you first had intercourse</label><br/>
          <input
            id="intercourse"
            className="glass__form__input"
            //placeholder="Glucose"
            //required
            type="number"
            value={intercourse}
            onChange={(e) => setIntercourse(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Number of times you have been pregnant</label><br/>
          <input
            id="pregnancies"
            className="glass__form__input"
            //placeholder="BloodPressure"
            //required
            type="number"
            value={pregnant}
            onChange={(e) => setPregnant(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Numner of times you have been diagnosed with a STD</label><br/>
          <input
            id="SkinThickness"
            className="glass__form__input"
            //placeholder="SkinThickness"
            //required
            type="number"
            value={std}
            onChange={(e) => setSTD(e.target.value)}
          />
        </div>

    

        <div className="glass__form__group">
          <label>CIN</label><br/>
          <input
            id="cin"
            className="glass__form__input"
            //placeholder="DiabetesPedigreeFunction"
            //required
            type="text"
            value={cin}
            onChange={(e) => setCIN(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>HPV</label><br/>
          <input
            id="hpv"
            className="glass__form__input"
            //placeholder="DiabetesPedigreeFunction"
            //required
            type="text"
            value={hpv}
            onChange={(e) => setHPV(e.target.value)}
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

export default Cervical