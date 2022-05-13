import './Glass.css'
import { useState } from 'react'
import axios from 'axios'
import PCOSs from "../Assets/PCOS1.jpg"

//var axios = require('axios');
//var FormData = require('form-data');


function PCOS() {
  const [age, setAge] = useState('')
  const [pregnant, setPregnant] = useState('')
  const [abortions, setAbortions] = useState('')
  const [bloated, setBloated] = useState('')
  const [facialHair, setFacialHair] = useState('')
  const [chestHair, setChestHair] = useState('')
  const [looseWeight, setLooseWeight] = useState('')
  const [moodSwings, setMoodSwings] = useState('')
  const [anxiety, setAnxiety] = useState(false)
  const [sleep, setSleep] = useState('')
  const [weightGain, setWeightGain] = useState('')
  const [hairGrowth, setHairGrowth] = useState('')
  const [skinDarkening, setSkinDarkening] = useState('')
  const [hairLoss, setHairLoss] = useState('')
  const [pimples, setPimples] = useState('')
  const [fastFood, setFastFood] = useState('')
  const [exercise, setExercise] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBMI] = useState('')
  const [cycleMonths, setCycleMonths] = useState('')
  const [cycleLength, setCycleLength] = useState('')
  const [marriageStatus, setMarriageStatus] = useState('')
  const [hip, setHip] = useState('')
  const [waist, setWaist] = useState('')
  const [pcos, setPCOS] = useState('')
  const [predicted, setPredicted] = useState(false)
 
  const handleSubmit = (e) => {
    e.preventDefault()
    var data = new FormData();
    data.append(' Age (yrs)', age);
    data.append('Pregnant(Yes/No)', pregnant);
    data.append('No of abortions', abortions);
    data.append('Bloated(Yes/No)', bloated);
    data.append('Do you have facial hair(Yes/No)', facialHair);
    data.append('Do you have chest hair(Yes/No)', chestHair);
    data.append('Is it difficult for you to loose weight(Yes/No)', looseWeight);
    data.append('Do you often have mood swings(Yes/No)', moodSwings);
    data.append('Anxiety/Depression/Stress(Yes/No)', anxiety);
    data.append('Irregular sleep(Yes/No)', sleep);
    data.append('Have you experienced sudden weight gain(Yes/No)', weightGain);
    data.append('Hair growth(Yes/No)', hairGrowth);
    data.append('Skin darkening (Yes/No)', skinDarkening);
    data.append('Hair loss(Yes/No)', hairLoss);
    data.append('Do you have pimples(Yes/No)', pimples);
    data.append('Do you frequently eat fast food (Yes/No)', fastFood);
    data.append('Do you exercise regularly(Yes/No)', exercise);
    data.append('Weight (Kg)', weight);
    data.append('Height(Cm) ', height);
    data.append('BMI', bmi);
    data.append('Cycle(months)', cycleMonths);
    data.append('Cycle length(days)', cycleLength);
    data.append('Marriage Status (Yrs)', marriageStatus);
    data.append('Hip(inch)', hip);
    data.append('Waist(inch)', waist);
    
    var config = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/https://fem-aid-pcos.herokuapp.com/predict',
      headers: { 
        'content-type': 'string'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data.pcos);
      if (response.data.pcos === '1'){
        setPCOS('Yes')
      }else{
        setPCOS('No')
      }
      setPredicted(true);
      console.log(predicted)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  const reset = () => {
    // setPregnancies('')
    // setGlucose('')
    // setBloodPressure('')
    // setSkinThickness('')
    // setInsulin('')
    // setBMI('')
    // setDiabetesPedigreeFunction('')
    // setAge('')
  }

  return (
    <div className='text'>
    <div className = "row">
    {(predicted) ? ((pcos ==='Yes')? (
      <div className = "column">{pcos}</div>)
      :(<div className = "column">{pcos}</div>)): (
    <div className = "column"><div className='vert_align'>
      <div className='image'>
      <img src={PCOSs} className="exp__image" alt="" />
      </div>
      <div className='text1'>
      <b className='big'>Polycystic ovary syndrome (PCOS)</b> is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone (androgen) levels. The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs.

      The exact cause of PCOS is unknown. Early diagnosis and treatment along with weight loss may reduce the risk of long-term complications such as type 2 diabetes and heart disease.<br></br><br></br>
      <b className='big'>Symptoms</b><br></br>
      Signs and symptoms of PCOS often develop around the time of the first menstrual period during puberty. Sometimes PCOS develops later, for example, in response to substantial weight gain.
      Signs and symptoms of PCOS vary. A diagnosis of PCOS is made when you experience at least two of these signs:<br></br>
      <ol className='tab1'>
          <li ><b>Irregular periods.</b></li>
          <ul type='none'>
            <li className='tab'>Infrequent, irregular or prolonged menstrual cycles are the most common sign of PCOS. For example, you might have fewer than nine periods a year, more than 35 days between periods and abnormally heavy periods.</li>
          </ul>
          <li><b>Excess androgen.</b></li> 
          <ul type='none'>
          <li className='tab'>Elevated levels of male hormones may result in physical signs, such as excess facial and body hair (hirsutism), and occasionally severe acne and male-pattern baldness</li>
          </ul>
          <li><b>Polycystic ovaries.</b></li> 
          <ul type='none'>
          <li className='tab'>our ovaries might be enlarged and contain follicles that surround the eggs. As a result, the ovaries might fail to function regularly.</li>
          </ul>
      </ol>
      PCOS signs and symptoms are typically more severe if you're obese.<br></br><br></br>
      <b className='big'>Causes</b><br></br>
      The exact cause of PCOS isn't known. Factors that might play a role include:<br></br>
        <ol className='tab1'>
          <li ><b>Excess insulin.</b></li>
          <ul type='none'>
            <li className='tab'>Insulin is the hormone produced in the pancreas that allows cells to use sugar, your body's primary energy supply. If your cells become resistant to the action of insulin, then your blood sugar levels can rise and your body might produce more insulin. Excess insulin might increase androgen production, causing difficulty with ovulation.</li>
          </ul>
          <li><b>Low-grade inflammation.</b></li> 
          <ul type='none'>
          <li className='tab'>This term is used to describe white blood cells' production of substances to fight infection. Research has shown that women with PCOS have a type of low-grade inflammation that stimulates polycystic ovaries to produce androgens, which can lead to heart and blood vessel problems.</li>
          </ul>
          <li><b>Heredity.</b></li> 
          <ul type='none'>
          <li className='tab'>Research suggests that certain genes might be linked to PCOS.</li>
          </ul>
          <li><b>Excess androgen.</b></li> 
          <ul type='none'>
          <li className='tab'>The ovaries produce abnormally high levels of androgen, resulting in hirsutism and acne.</li>
          </ul>
      </ol>
        <br></br>
        <b className='big'>When to see a doctor</b><br></br>
        See your doctor if you have concerns about your menstrual periods, if you're experiencing infertility or if you have signs of excess androgen such as worsening hirsutism, acne and male-pattern baldness. Take this test to know more.
        <br></br><br></br>
      <b className='big'>Complications</b><br></br>
      Complications of PCOS can include:
      <ul className='tab1'>
        <li>Infertility</li>
        <li>Gestational diabetes or pregnancy-induced high blood pressure</li>
        <li>Miscarriage or premature birth</li>
        <li>Nonalcoholic steatohepatitis — a severe liver inflammation caused by fat accumulation in the liver</li>
        <li>Metabolic syndrome — a cluster of conditions including high blood pressure, high blood sugar, and abnormal cholesterol or triglyceride levels that significantly increase your risk of cardiovascular disease</li>
        <li>Type 2 diabetes or prediabetes</li>
        <li>Sleep apnea</li>
        <li>Depression, anxiety and eating disorders</li>
        <li>Abnormal uterine bleeding</li>
        <li>Cancer of the uterine lining (endometrial cancer)</li>
      </ul>
      Obesity is associated with PCOS and can worsen complications of the disorder.
        </div>
    </div>
    </div>
    )}
    <div className="glass column">
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h2>PCOS</h2>
        <div className="glass__form__group">
          <label>Age</label><br/>
          <input
            id="age"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Are you pregnant?</label><br/>
          <input
            id="age"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={pregnant}
            onChange={(e) => setPregnant(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Have you had any abortions? If so, how many?</label><br/>
          <input
            id="abortion"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="number"
            value={abortions}
            onChange={(e) => setAbortions(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Do you feel bloated? (Yes/No)</label><br/>
           <input
            id="bloated"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            
            type="text"
            value={bloated}
            onChange={(e) => setBloated(e.target.value)}
          /> 
        </div>
        <div className="glass__form__group">
          <label>Do you have facial hair?</label><br/>
          <input
            id="facial hair"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={facialHair}
            onChange={(e) => setFacialHair(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Do you have chest hair?</label><br/>
          <input
            id="chesthair"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={chestHair}
            onChange={(e) => setChestHair(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Is it difficult for you to loose weight?</label><br/>
          <input
            id="looseweights"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={looseWeight}
            onChange={(e) => setLooseWeight(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Do you often have mood swings? (Yes/No)</label><br/>
          <input
            id="moodswings"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={moodSwings}
            onChange={(e) => setMoodSwings(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Anxiety/Depression/Stress(Yes/No)</label><br/>
          <input
            id="anxiety"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={anxiety}
            onChange={(e) => setAnxiety(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Irregular sleep(Yes/No)</label><br/>
          <input
            id="sleep"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Have you experienced sudden weight gain(Yes/No)</label><br/>
          <input
            id="weightgain"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={weightGain}
            onChange={(e) => setWeightGain(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Hair growth(Yes/No)</label><br/>
          <input
            id="hairgrowth"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={hairGrowth}
            onChange={(e) => setHairGrowth(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Skin darkening (Yes/No)</label><br/>
          <input
            id="skin"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={skinDarkening}
            onChange={(e) => setSkinDarkening(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Hair loss(Yes/No)</label><br/>
          <input
            id="hairloss"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={hairLoss}
            onChange={(e) => setHairLoss(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Do you have pimples(Yes/No)</label><br/>
          <input
            id="pimples"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={pimples}
            onChange={(e) => setPimples(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Do you frequently eat fast food (Yes/No)</label><br/>
          <input
            id="fastfood"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={fastFood}
            onChange={(e) => setFastFood(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Do you exercise regularly(Yes/No)</label><br/>
          <input
            id="exercise"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Weight (Kg)</label><br/>
          <input
            id="weight"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>Height(Cm) </label><br/>
          <input
            id="height"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="glass__form__group">
          <label>BMI</label><br/>
          <input
            id="bmi"
            className="glass__form__input"
            //placeholder="Pregnancies"
            //required
            type="number"
            value={bmi}
            onChange={(e) => setBMI(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Cycle(months)</label><br/>
          <input
            id="Cycle(months)"
            className="glass__form__input"
            //placeholder="Glucose"
            //required
            type="number"
            value={cycleMonths}
            onChange={(e) => setCycleMonths(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Cycle length(days)</label><br/>
          <input
            id="Cycle length(days)"
            className="glass__form__input"
            //placeholder="BloodPressure"
            //required
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Marriage Status (Yrs)</label><br/>
          <input
            id="marriage"
            className="glass__form__input"
            //placeholder="SkinThickness"
            //required
            type="number"
            value={marriageStatus}
            onChange={(e) => setMarriageStatus(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Hip(inch)</label><br/>
          <input
            id="hip"
            className="glass__form__input"
            //placeholder="Insulin"
            //required
            type="number"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <label>Waist(inch)</label><br/>
          <input
            id="waist"
            className="glass__form__input"
            //placeholder="BMI"
            //required
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
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

export default PCOS