import './Glass.css'
import { useState } from 'react'
import axios from 'axios'
import CV from "../Assets/CervicalCancer1.jpg"

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
  const [bio, setBio] = useState('')
  const [cito, setCito] = useState('')
  const [hin, setHin] = useState('')
  const [sch, setSch] = useState('')

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
    
    var config1 = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://fem-aid-cancer-b.herokuapp.com/predict',
      headers: { 
        'content-type': 'string'
      },
      data : data
    };
    
    axios(config1)
    .then(function (response) {
      console.log('bio: '+response.data.bioccancer);
      if (response.data.bioccancer === '1.0'){
        setBio('Yes')
      }else{
        setBio('No')
      }
      setPredicted(true);
      console.log('Predicted bio: '+predicted)
    })
    .catch(function (error) {
      console.log(error);
    });

    var config2 = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://fem-aid-cancer-c.herokuapp.com/predict',
        headers: { 
          'content-type': 'string'
        },
        data : data
      };
      
      axios(config2)
      .then(function (response) {
        console.log('cito: '+response.data.citoccancer);
        if (response.data.citoccancer === '1.0'){
          setCito('Yes')
        }else{
          setCito('No')
        }
        setPredicted(true);
        console.log('predicted cito:' +predicted)
      })
      .catch(function (error) {
        console.log(error);
      });

      var config3 = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://fem-aid-cancer-h.herokuapp.com/predict',
        headers: { 
          'content-type': 'string'
        },
        data : data
      };
      
      axios(config3)
      .then(function (response) {
        console.log('hin: '+response.data.hinccancer);
        if (response.data.hinccancer === '1.0'){
          setHin('Yes')
        }else{
          setHin('No')
        }
        setPredicted(true);
        console.log('predicted hin:' +predicted)
      })
      .catch(function (error) {
        console.log(error);
      });

      var config4 = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://fem-aid-cancer-s.herokuapp.com/predict',
        headers: { 
          'content-type': 'string'
        },
        data : data
      };
      
      axios(config4)
      .then(function (response) {
        console.log('hin: '+response.data.schccancer);
        if (response.data.schccancer === '1.0'){
          setSch('Yes')
        }else{
          setSch('No')
        }
        setPredicted(true);
        console.log('predicted sch:' +predicted)
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
    {(predicted) ? ((bio ==='Yes')? (
      <div className = "column">{bio}{cito}</div>)
      :(<div className = "column">{bio} {cito} {hin} {sch}</div>)): (
    <div className = "column">
      <div className='image'>
      <img src={CV} className="exp__image" alt="" />
      </div>
      
      <b>Age: </b>Enter your age.<br></br><br></br>
      <b>Sexual Partners: </b> Enter the number of Sexual Partners you have had.<br></br><br></br>
      <b>First Intercourse: </b> Enter the age at which you first had intercourse.<br></br><br></br>
      <b>Pregnancies: </b> Number of times you have been pregnant (if any)<br></br><br></br>
      <b>STDs: </b>Number of times you have been diagnosed with a STD<br></br><br></br>
      <b>CIN: </b>Abnormal cells are found on the surface of the cervix. CIN is found when a cervical biopsy is done.<br></br><br></br>
      <b>HPV: </b>An HPV test is usually done at the same time as a Pap test — a test that collects cells from your cervix to check for abnormalities or the presence of cancer. An HPV test can be done using the same sample from the Pap test or by collecting a second sample from the cervical canal.<br></br><br></br>
    </div>
    
    )}
    <div className="glass column">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h2>Cervical Cancer</h2>
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
          <label>Sexual Partners</label><br/>
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
          <label>First intercourse</label><br/>
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
          <label>Pregnancies</label><br/>
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
          <label>STDs</label><br/>
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