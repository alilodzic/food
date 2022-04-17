import React from 'react'
import { Button, Form, Modal} from 'react-bootstrap';

const Model = ({ handleClose, show, children,handleSubmit,email,password }) => {
  

  return (
     <Modal show={show} onHide={handleClose}>
        <Modal.Header  >
          <Modal.Title className="p-3 m-auto"><h2> LogIn </h2></Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} className="p-3">
        <Modal.Body>
              {children}
              
        </Modal.Body>
        <Modal.Footer className="justify-content-between py-4" >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={email?.includes('@') && password.length > 4 ? false : true} type="submit" onClick={handleClose}>
            Login
            </Button>
            
        </Modal.Footer>
        </Form>
      </Modal>        
  )
}

export default Model