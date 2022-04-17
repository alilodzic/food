import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact" id="Contact">
<Container>
    <h1 className="heading"><span>contact</span> us</h1>

          <Row>
              <Col md={6} sm={11}>
                  <div  dangerouslySetInnerHTML={{ __html: "<iframe class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin' />"}} />

              </Col>
              <Col md={6} sm={11}>
                   <form action="">
            <h3>get in touch</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="email" placeholder="your email" className="box"/>
            <input type="tel" placeholder="subject" className="box"/>
            <textarea placeholder="your message" className="box" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn"/>
        </form>
              </Col>

       

    </Row>
</Container>
</section>
  )
}

export default Contact