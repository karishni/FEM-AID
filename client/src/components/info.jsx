import React from "react";
import "./info.css";
import About from "../Assets/periods.jpg";


function Info() {
    return (
        <div classNameName="info">
            <div id="container">
                <div id="pageheader">
                    <h1>Menstrual Cramps and how to overcome them</h1>
                </div>

                <div class="section">
                    
                        <div className="imageAlign">
                            <figure>
                                <img src={About} alt style={{height: "400px", alignContent: "center"}} />
                            </figure>
                        </div>
                    
                </div>

                <div class="section">
                    <div class="pageitem">
                        <div class="col">
                            <p><b>Menstrual cramps (dysmenorrhea)</b> are throbbing or cramping pains in the lower abdomen. Many women have menstrual cramps just before and during their menstrual periods.

For some women, the discomfort is merely annoying. For others, menstrual cramps can be severe enough to interfere with everyday activities for a few days every month.

Conditions such as endometriosis or uterine fibroids can cause menstrual cramps. Treating the cause is key to reducing the pain. Menstrual cramps that aren't caused by another condition tend to lessen with age and often improve after giving birth.</p>
                            <p>There are two types of dysmenorrhea: primary and secondary. Each type has different causes.</p>
                            <p>Primary dysmenorrhea is the most common kind of period pain. It is </p>
                        </div>
                        <div class="col">
                            
                            <p> period pain that is not caused by another condition. The cause is usually having too many prostaglandins, which are chemicals that your uterus makes. These chemicals make the muscles of your uterus tighten and relax, and this causes the cramps.

The pain can start a day or two before your period. It normally lasts for a few days, though in some women it can last longer.

You usually first start having period pain when you are younger, just after you begin getting periods. Often, as you get older, you have less pain. The pain may also get better after you have given birth.

Secondary dysmenorrhea often starts later in life. It is caused by conditions that affect your uterus or other reproductive organs, such as endometriosis and uterine fibroids. This kind of pain often gets worse over time. It may begin before your period starts and continue after your period ends.</p>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="pageitem">
                        <h2>What can I do about the pain?</h2>
                        <p> To help ease your period pain, you can try:</p>
                        <ul>
                            <li>Using a heating pad or hot water bottle on your lower abdomen</li>
                            <li>Getting some exercise</li>
                            <li>Taking a hot bath</li>
                            <li>Doing relaxation techniques, including yoga and meditation</li>
                        </ul>
                        <p>You might also try taking over-the-counter pain relievers such as nonsteroidal anti-inflammatory drugs (NSAIDs). NSAIDs include ibuprofen and naproxen. Besides relieving pain, NSAIDs reduce the amount of prostaglandins that your uterus makes and lessen their effects. This helps to lessen the cramps. You can take NSAIDs when you first have symptoms, or when your period starts. You can keep taking them for a few days. You should not take NSAIDS if you have ulcers or other stomach problems, bleeding problems, or liver disease. You should also not take them if you are allergic to aspirin. Always check with your health care provider if you are not sure whether or not you should take NSAIDs.</p>
                        <p>It may also help to get enough rest and avoid using alcohol and tobacco.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="pageitem">
                        <div class="col">
                            <h2>When should I get medical help for my period pain?</h2>
                            <p> For many women, some pain during your period is normal. However, you should contact your health care provider if:
                            <ul>
                                <li>NSAIDs and self-care measures don't help, and the pain interferes with your life</li>
                                <li>Your cramps suddenly get worse</li>
                                <li>You are over 25 and you get severe cramps for the first time</li>
                                <li>You have a fever with your period pain</li>
                                <li>You have the pain even when you are not getting your period</li>
                            </ul>
                            </p>
                        </div>
                        <div class="col">
                            <h2>How is the cause of severe period pain diagnosed?</h2>
                            <p>To diagnose severe period pain, your health care provider will ask you about your medical history and do a pelvic exam. You may also have an ultrasound or other imaging test. If your health care provider thinks you have secondary dysmenorrhea, you might have laparoscopy. It is a surgery that that lets your health care provider look inside your body. </p>
                        </div>
                        <div class="col">
                            <h2>What are treatments for severe period pain?</h2>
                            <p>If your period pain is primary dysmenorrhea and you need medical treatment, your health care provider might suggest using hormonal birth control, such as the pill, patch, ring, or IUD. Another treatment option might be prescription pain relievers.<br></br><br></br>

                            If you have secondary dysmenorrhea, your treatment depends upon the condition that is causing the problem. In some cases, you may need surgery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;