import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './service.css'
const Service = () => {
  return (
      <>
          <section className="services" id="Services">

    <h1 className="heading"> our <span>services</span> </h1>

              <Container>
    <div className="box-container">

        <div className="box">
            <i className="fas fa-car"></i>
            <h3>car selling</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
            <button href="#" className="btn"> read more</button>
        </div>

        <div className="box">
            <i className="fas fa-tools"></i>
            <h3>parts repair</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
            <button href="#" className="btn"> read more</button>
        </div>

        <div className="box">
            <i className="fas fa-car-crash"></i>
            <h3>car insurance</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
            <button href="#" className="btn"> read more</button>
        </div>

        <div className="box">
            <i className="fas fa-car-battery"></i>
            <h3>battery replacement</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
            <button href="#" className="btn"> read more</button>
        </div>

        <div className="box">
            <i className="fas fa-gas-pump"></i>
            <h3>oil change</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
            <button href="#" className="btn"> read more</button>
        </div>

        <div className="box">
            <i className="fas fa-headset"></i>
            <h3>24/7 support</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
            <a href="#Reviews" className="btn"> read more</a>
        </div>

    </div>
</Container>
</section>
      </>
  )
}

export default Service