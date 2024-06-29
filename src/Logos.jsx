import React from 'react';
import Paypal from "../src/assets/two.svg";
import Microsoft from "../src/assets/Microsoft.svg";
import Mars from "../src/assets/mars.svg";
import Helon from "../src/assets/helon.svg";
import Three from "../src/assets/three.svg";
import One from "../src/assets/one.svg";
import Alcone from "../src/assets/Alcone.svg"
import Luk from "../src/assets/Luk.svg"
import Sumsung from "../src/assets/Samsung.svg"
import Pepsi from "../src/assets/Pepsi.svg"

export default function Logos() {
  return (
    <div className="container  " id='container-logo'>
      <div className="row">
        <div className="logos-heading">
          <h2 className='text-center'>Our team has serviced leading organisations</h2>
        </div>
      </div>
      <div className="row text-center px-1 pt-2 mx-auto px-5">
        <div className="col-6 col-sm-4 gap-5 col-md-3 col-lg-2 mb-3" style={{width:'200px'}}>
          <img src={Paypal} alt="Paypal" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 pt-4"  style={{width:'200px'}}>
          <img src={Microsoft} alt="Microsoft" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 pt-4" style={{width:'200px'}}>
          <img src={Mars} alt="Mars" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 pt-4 mt-2" style={{width:'200px'}}>
          <img src={Helon} alt="Helon" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 pt-2" style={{width:'200px'}}>
          <img src={Three} alt="Three" className="img-fluid" />
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" style={{width:'200px'}}>
          <img src={One} alt="Paypal" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 pt-4" style={{width:'200px'}}>
          <img src={Alcone} alt="Microsoft" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 pt-4" style={{width:'200px'}}>
          <img src={Luk} alt="Mars" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 pt-4 mt-2" style={{width:'200px'}}>
          <img src={Sumsung} alt="Helon" className="img-fluid" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 pt-2" style={{width:'200px'}}>
          <img src={Pepsi} alt="Three" className="img-fluid" />
        </div>
        
      </div>
    </div>
  );
}
