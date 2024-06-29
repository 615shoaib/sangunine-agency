
import { TypeAnimation } from 'react-type-animation';
import './App.css'
import ContactForm from './ContactForm'
import Footer from './Footer'
// import MyCanvas from './Canvas'

import Logos from './Logos'



function App() {

  return (
    <>
      <div id="app">
        <div className="navbar">
          <img className='logo' src={'logo.png'} />
          <div className="navbar-menu-items">
            <p>Mission</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="section-1">
          {/* <MyCanvas /> */}
          {/* <div className="section-1-heading">
            <TypeAnimation
              sequence={[
               
                'We help organisations  keep the ball rolling',
                1000, 
                'We help organisations keep the ball rolling',
                1000,
                'We help organisations keep the ball rolling',
                1000,

              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
            .


          </div> */}



        </div>



        <div className="section-2-bg">
          <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="250" data-aos-easing="ease-in-sine">Sanguine is a London-based incubator helping organisation leaders and stakeholders overcome the obstacles in the way of achieving their goals.</h1>





          <div data-aos="fade-right" data-aos-duration="900" class=" services-card-container">

            <div className="services-card"><p>BRANDING DEVELOPMENT</p></div>
            <div className="services-card"><p>INVESTOR PRESENTATIONS</p></div>
            <div className="services-card"><p>B2B PRESENTATIONS</p></div>
            <div className="services-card"><p>SALES STRATEGY</p></div>
            <div className="services-card"><p>MARKETING STRATEGY</p></div>
            <div className="services-card"><p>CONSUMER INSIGHTS</p></div>
            <div className="services-card"><p>ADVERTISING CAMPAIGNS</p></div>
            <div className="services-card"><p>PRODUCT AND SERVICE ENHANCEMENT</p></div>

          </div>

        </div>

        <div className='section-3'>


          <Logos />


        </div>


        <div data-aos="fade-right" data-aos-duration="700" data-aos-offset="270" data-aos-easing="ease-in-sine" className='section-3'>


          <ContactForm />

        </div>

        <Footer />



      </div>
    </>
  )
}

export default App
