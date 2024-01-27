import React from 'react'
import img1 from '../images/1.png'
import img2 from '../images/f6.png'
import img3 from '../images/f6.png'
import img4 from '../images/f7.png'
import img5 from '../images/f8.png'
import img6 from '../images/f9.png'
import img7 from '../images/f9.png'
import img8 from '../images/f11.png'
import './Animationslider.css';

const Animationslider = () => {
  return (
    <div className="box-main">
      <div className='box'>
        <span style={{ '--i': 1 }}><img src={img1} alt="" /></span>
        <span style={{ '--i': 2 }}><img src={img2} alt="" /></span>
        <span style={{ '--i': 3 }}><img src={img3} alt="" /></span>
        <span style={{ '--i': 4 }}><img src={img4} alt="" /></span>
        <span style={{ '--i': 5 }}><img src={img5} alt="" /></span>
        <span style={{ '--i': 6 }}><img src={img6} alt="" /></span>
        <span style={{ '--i': 7 }}><img src={img7} alt="" /></span>
        <span style={{ '--i': 8 }}><img src={img8} alt="" /></span>
      </div>
    </div>
  )
}

export default Animationslider