import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./counter.module.css";


const Counter = () => {
  return (
    <section className={styles['icons-container']}>
          <Container>
              <Row>
                  <Col>
    <div className={styles.icons}>
        <i className="fas fa-home"></i>
              <div className={styles.content}>
            <h3>150+</h3>
            <p>branches</p>
        </div>
    </div>
                  </Col>
                   <Col>
    <div className={styles.icons}>
        <i className="fas fa-car"></i>
        <div className={styles.content}>
            <h3>4770+</h3>
            <p>cars sold</p>
        </div>
                      </div>
                      </Col>
 <Col>
    <div className={styles.icons}>
        <i className="fas fa-users"></i>
        <div className={styles.content}>
            <h3>320+</h3>
            <p>happy clients</p>
        </div>
                      </div>
                      </Col>
 <Col>
    <div className={styles.icons}>
        <i className="fas fa-car"></i>
        <div className={styles.content}>
            <h3>1500+</h3>
            <p>news cars</p>
        </div>
                      </div>
                      </Col>
    </Row>
</Container>
</section>
  )
}

export default Counter