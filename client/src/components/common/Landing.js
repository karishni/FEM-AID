import React from "react";
import { Carousel } from "react-bootstrap";
import Carousel1 from "../../Assets/carousel-1.jpg";
import Carousel2 from "../../Assets/carousel-2.jpg";
import Test1 from "../../Assets/testimonial-1.jpg";
import Test2 from "../../Assets/testimonial-2.jpg";
import Test3 from "../../Assets/testimonial-3.jpg";
import Test4 from "../../Assets/testimonial-4.jpg";
import About from "../../Assets/about.jpg";
import User from "../../Assets/user.jpg";
// import "./styles.css";



function Landing() {
  return (
    <div className="landing">



      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={Carousel1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h4 className="text-white text-uppercase mb-md-3">Fem-Aid</h4>
                  <h1 className="display-3 text-white mb-md-4">A Conversation about Female Health</h1>
                  <a href="/users/login" className="btn btn-light py-md-3 px-md-5 mt-2">Join Our Community</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={Carousel2} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h4 className="text-white text-uppercase mb-md-3">Fem-Aid</h4>
                  <h1 className="display-3 text-white mb-md-4" >Take a test today! </h1>
                  <a href="/users/login" className="btn btn-light py-md-3 px-md-5 mt-2">Join Our Community</a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-secondary">
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-secondary">
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-3">
        <div className="container" id="aboutUs">

          <h1 className="display-4 text-center mb-5">About Us</h1>
          <div className="row">
            <p className='about-us-p'>Women have traditionally been disadvantaged in terms of economic and
              social status and power, which in turn reduces their access to the necessities of life including
              health care. The gender gap in health is even more acute in developing countries where women are
              relatively more disadvantaged. In addition to gender inequity, there remain specific disease
              processes uniquely associated with being a woman which create specific challenges in both prevention
              and health care. PCOS, Breast Cancer, Anemia, Ovarian and Cervical Cancer, Gynecological Health,
              Depression and Anxiety are some of the prevailing health issues faced by a large percentage of women
              in developing as well as developed countries, however, the actual initiative of diagnosis and asking
              for a medical professional’s help to treat these women-centric health issues is seen to be taken
              quite rarely in most regions of our country. There is a lack of conversation, amongst women and
              specialists, about the precautions, diagnosis and treatments for several reproductive as well as
              non-reproductive diseases.
              With our website, we aim to provide a platform for women to be able to ask questions and receive
              answers from medical professionals, provide medical helplines, online detection of various diseases,
              as well as detailed information about the doctors and gynecologists nearby.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <h1 className="display-4 text-center mb-5">Find more about common health problems amongst women!</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 pb-1">
              <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
              >
                <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
                >
                  <i className="fas fa-3x fa-laptop-medical text-secondary"></i>
                </div>
                <h4 className="font-weight-bold m-0"><a href="./diabetes">Diabetes</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
              >
                <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
                >
                  <i className="fas fa-3x fa-laptop-medical text-secondary"></i>
                </div>
                <h4 className="font-weight-bold m-0"><a href="./pcos">PCOS</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
              >
                <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
                >
                  <i className="fas fa-3x fa-laptop-medical text-secondary"></i>
                </div>
                <h4 className="font-weight-bold m-0"><a href="./cervical">Cervical Cancer</a></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
              >
                <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
                >
                  <i className="fas fa-3x fa-laptop-medical text-secondary"></i>
                </div>
                <h4 className="font-weight-bold m-0"><a href="./bmi">BMI Calculator</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container pt-0 pt-lg-4">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid" src={About} alt="" />
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
              <h6 className="text-secondary text-uppercase font-weight-medium mb-3"></h6>
              <h1 className="mb-4">Do you think you are at a risk from these health issues?</h1>
              <h5 className="font-weight-medium font-italic mb-4">Get a quick free risk-assessment test to make
                sure that you’re not!</h5>
              <p className="mb-2">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem
                ipsum ut
                sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam
                sea
                ipsum est dolor</p>
              <a href="/diseasepred" className="btn btn-primary py-md-3 px-md-5 mt-2">Take A Test</a>
              <div className="row">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
              <h1 className="mb-4">Do you have more questions?</h1>
              <p>This is a safe space for you to share your thoughts and
                ask all your doubts about YOUR health!
                Do participate on our discussion forum!</p>
              <a href="./dashboard" className="btn btn-primary py-md-3 px-md-5 mt-2">Ask away!</a>
            </div>
            <div className="col-lg-5">
              <div
                className="d-flex flex-column align-items-center justify-content-center h-100 py-5 px-3" style={{ backgroundColor: "#46C6CE", borderRadius: "10px" }}>
                <i className="fa fa-5x fa-certificate text-white mb-5"></i>
                <h1 className="display-1 text-white mb-3">Talk</h1>
                <h1 className="text-white m-0">To Professionals</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">

          <h1 className="display-4 text-center mb-5">What we offer</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div className="d-inline-2 d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                >
                  <h2 className="display-2 text-secondary m-0">1</h2>
                </div>
                <h3 className="font-weight-bold m-0 mt-2">Get Medical Tests done from home</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div className="d-inline-2 d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                >
                  <h2 className="display-2 text-secondary m-0">2</h2>
                </div>
                <h3 className="font-weight-bold m-0 mt-2">Talk to medical professionals</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div className="d-inline-2 d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                >
                  <h2 className="display-2 text-secondary m-0">3</h2>
                </div>
                <h3 className="font-weight-bold m-0 mt-2">Talk about your own experiences</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div className="d-inline-2 d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                >
                  <h2 className="display-2 text-secondary m-0">4</h2>
                </div>
                <h3 className="font-weight-bold m-0 mt-2">Gain and spread awareness</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Testimonials</h6>
          <h1 className="display-4 text-center mb-5">You're in good hands!</h1>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item">
              <img className="testim position-relative rounded-circle bg-white shadow mx-auto" src={Test1}
                alt="" />
              <div className="bg-light text-center p-4 pt-0">
                <h5 className="font-weight-medium mt-5">Name</h5>
                <p className="text-muted font-italic">Profession</p>
                <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita
                  lorem. Dolor ipsum clita</p>
              </div>
            </div>

            <div className="testimonial-item">
              <img className="testim position-relative rounded-circle bg-white shadow mx-auto" src={Test4}
                alt="" />
              <div className="bg-light text-center p-4 pt-0">
                <h5 className="font-weight-medium mt-5">Name</h5>
                <p className="text-muted font-italic">Profession</p>
                <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita
                  lorem. Dolor ipsum clita</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 pb-2">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Blog</h6>
          <h1 className="display-4 text-center mb-5">Latest From Our Blog</h1>
          <div className="row">
            <div className="col-lg-4 mb-2">
              <div className="shadow mb-4">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={Carousel1} alt="" />
                  <a href=""
                    className="blog-1 position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  >
                    <h4 className="text-center text-white font-weight-medium mb-3">Dolor site amet clita kasd
                      sanct ipsum</h4>
                    <div className="d-flex text-light">
                      <small className="mr-2"><i className="fa fa-user text-secondary"></i> Admin</small>
                      <small className="mr-2"><i className="fa fa-folder text-secondary"></i> Web Design</small>
                      <small className="mr-2"><i className="fa fa-comments text-secondary"></i> 15</small>
                    </div>
                  </a>
                </div>
                <p className="m-0 p-4">Amet dolores labore magna et amet tempor dolor et dolor. Et sit ipsum et eos
                  rebum labore ea labore sea. Et sed elitr labore sed labore. Lorem et lorem amet sed sed kasd
                  ipsum rebum</p>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div className="shadow mb-4">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={Carousel2} alt="" />
                  <a href=""
                    className="blog-1 position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  >
                    <h4 className="text-center text-white font-weight-medium mb-3">Dolor site amet clita kasd
                      sanct ipsum</h4>
                    <div className="d-flex text-light">
                      <small className="mr-2"><i className="fa fa-user text-secondary"></i> Admin</small>
                      <small className="mr-2"><i className="fa fa-folder text-secondary"></i> Web Design</small>
                      <small className="mr-2"><i className="fa fa-comments text-secondary"></i> 15</small>
                    </div>
                  </a>
                </div>
                <p className="m-0 p-4">Amet dolores labore magna et amet tempor dolor et dolor. Et sit ipsum et eos
                  rebum labore ea labore sea. Et sed elitr labore sed labore. Lorem et lorem amet sed sed kasd
                  ipsum rebum</p>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div className="shadow mb-4">
                <div className="position-relative">
                  <img className="img-fluid w-100" src={Carousel1} alt="" />
                  <a href=""
                    className="blog-1 position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center   text-decoration-none p-4"
                  >
                    <h4 className="text-center text-white font-weight-medium mb-3">Dolor site amet clita kasd
                      sanct ipsum</h4>
                    <div className="d-flex text-light">
                      <small className="mr-2"><i className="fa fa-user text-secondary"></i> Admin</small>
                      <small className="mr-2"><i className="fa fa-folder text-secondary"></i> Web Design</small>
                      <small className="mr-2"><i className="fa fa-comments text-secondary"></i> 15</small>
                    </div>
                  </a>
                </div>
                <p className="m-0 p-4">Amet dolores labore magna et amet tempor dolor et dolor. Et sit ipsum et eos
                  rebum labore ea labore sea. Et sed elitr labore sed labore. Lorem et lorem amet sed sed kasd
                  ipsum rebum</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="footer" className="container-fluid text-white mt-5 pt-5 px-sm-3 px-md-5" style={{ backgroundColor: "#194376", height: "400px" }}>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="">
              <h1 className="text-secondary mb-3"><span className="text-white">FEM</span>AID</h1>
            </a>
            <div className="d-flex justify-content-start mt-4">
              <a className="footer-btn-1 btn btn-outline-light rounded-circle text-center mr-2 px-0"
                href="#"><i className="fab fa-twitter"></i></a>
              <a className="footer-btn-1 btn btn-outline-light rounded-circle text-center mr-2 px-0"
                href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="footer-btn-1 btn btn-outline-light rounded-circle text-center mr-2 px-0"
                href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="footer-btn-1 btn btn-outline-light rounded-circle text-center mr-2 px-0"
                href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Get In Touch</h4>
            <p>Dolor clita stet nonumy clita diam vero, et et ipsum diam labore</p>
            <p><i className="fa fa-phone mr-2"></i>7502201234</p>
            <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
              <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>About Us</a>
              <a className="text-white" href="/"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sit no, sed kasd
              et ipsum dolor duo dolor</p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center text-white">
          &copy; <a className="text-white font-weight-medium" href="#">FEMAID</a>. All Rights Reserved.
        </p>
      </div>


      <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>


      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/counterup/counterup.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>

      <script src="mail/jqBootstrapValidation.min.js"></script>
      <script src="mail/contact.js"></script>

      <script src="js/main.js"></script>

    </div>
  );
}

export default Landing;