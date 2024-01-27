import React from 'react';
import Spline from '@splinetool/react-spline';
import { HiBars2 } from "react-icons/hi2";
import './Showcase.css'
import img2 from '../images/1.png'

function Showcase() {
  return (
    <div className='suit_box' >
      <div className="nav">
        <div className="nav-top">
          <img src={img2} className="nav-brand" alt="" />
          <div className="into-commun">
            <ul>
              <li><a href="#">Interstellar</a></li>
              <li><a href="#">Interstellar</a></li>
            </ul>
            <HiBars2 className='nav-bars' />
          </div>
        </div>
      </div>
      <div className='spline-model'>
        <Spline scene="https://prod.spline.design/yBW0UZaycjzjhPkj/scene.splinecode" />
      </div>
      <div className="descr-main">
         <h1>Nonikotin<sup>&copy;</sup></h1>
      </div>
    </div>
  );
}

export default Showcase