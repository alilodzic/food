import React, { useState } from 'react'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import styles from './home.module.css'
import Cars from '../../assets/images/home-img.png'

const Home = ({ handleShow }) => {
    const [handl, sethandl] = useState([])
    const [handl2, sethandl2] = useState([])

    const handleMouse = (e, speed) => {
         let x = (window.innerWidth - e.pageX * 5) / 90;
        let y = (window.innerHeight - e.pageY * 5) / 90;
        
        const mouse = {transform: `translate(${x}px,${y}px)`}
    sethandl((prev) => ({...prev, ...mouse}))
    }
    
const handleh3 = (e, speed) => {
         let x = (window.innerWidth - e.pageX * -5) / 90;
        let y = (window.innerHeight - e.pageY * -5) / 90;
        
        const mouse = {transform: `translate(${x}px,${y}px)`}
    sethandl2((prev) => ({...prev, ...mouse}))
}

  return (
      <header>
        <Navbar expand="lg"  bg="light" variant="light" fixed="top" className="pe-0">
    <Container>
                  <Navbar.Brand className={styles.logo} href="#home"><span>max</span>wheels</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="m-auto ">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#vehicles">Vehicles</Nav.Link>
      <Nav.Link href="#Services">Service</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#Reviews">Reviews</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
                      </Nav>
    </Navbar.Collapse>

            <Button className="btn" variant="primary" onClick={handleShow}>Login</Button>{' '}
      

    </Container>
          </Navbar>

          <section className={styles.home}   id="home">
              <div  onMouseMove={(e) => { handleMouse(e); handleh3(e)} } onMouseOut={() => {sethandl2(null); sethandl2(null); }}>
                   <h3 style={handl2}  className="home-parallax">find your car</h3>

              <Image src={'./images/home-img.png'} className={styles.image} style={handl} fluid  />
         </div>
             <Button className="d-block m-auto fw-bold" onClick={() => { sethandl2(null); sethandl2(null); }}>explore cars</Button>{' '}
             

          </section>
      
      </header>
  )
}

export default Home