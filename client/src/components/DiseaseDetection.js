import React from "react";
import "./DiseaseDetection.css";
import Diabeties from "../Assets/Diabeties.jpg"
import PCOS from "../Assets/PCOS.jpg"
import Cervical from "../Assets/CervicalCancer.jpg"


function DiseaseDetection() {
    return (
        <>
        <div className="background">
            <div className="heading">
                <h1>Disease Detection</h1>
            </div>

            <div className="work-exp">
                <ul className="work-exp-list">

                    {/* <li>
                        <div className="exp">
                            <a href="https://breastcancerdetectionweb.herokuapp.com/" target="blank" >
                                
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="exp__thumb" alt="Data Science" src="https://img.icons8.com/fluent/100/000000/web-analystics.png" />
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Breast cancer Prediction</h3>
                                            <span className="exp__status">Detect breast cancer</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Symptoms of breast cancer include a lump in the breast, bloody discharge from the nipple and changes in the shape or texture of the nipple or breast.</p>
                                </div></a>
                        </div>
                    </li> */}

                    <li>
                        <div className="exp">
                            <a href="/diabetes" target="blank" >
                            <img src={Diabeties} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Diabeties Prediction</h3>
                                            <span className="exp__status">Predict the chances of getting diabeties</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat.</p>
                                </div></a>
                        </div>
                    </li>

                    <li>
                        <div className="exp">
                            <a href="/pcos" target="blank" >
                            <img src={PCOS} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">PCOS Prediction</h3>
                                            <span className="exp__status">Predict the chances of having PCOS</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">It is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone (androgen) levels. The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs.</p>
                                </div></a>
                        </div>
                    </li>

                    <li>
                        <div className="exp">
                            <a href="/cervical" target="blank" >
                            <img src={Cervical} className="exp__image" alt="" />
                                <div className="exp__overlay">
                                    <div className="exp__header">
                                        <svg className="exp__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                
                                        <div className="exp__header-text">
                                            <h3 className="exp__title">Cervical Cancer Prediction</h3>
                                            <span className="exp__status">Predict the chances of having Cervical Cancer</span>
                                        </div>
                                    </div>
                                    <p className="exp__description">Cervical cancer happens when cells change in women’s cervix, which connects the uterus and vagina. This cancer can affect the deeper tissues of their cervix and may spread to other parts of their body (metastasize), often the lungs, liver, bladder, vagina, and rectum.</p>
                                </div></a>
                        </div>
                    </li>

                </ul>
            </div>
            </div>
        </>
        
    );
    
    
}


export default DiseaseDetection;