import './App.css';
import { useState } from 'react';
import { Button, Container , Nav, Navbar } from 'react-bootstrap';
import Home from './pages/home/Home';
import Counter from './pages/counter/Counter';
import Vehicles from './pages/vehicles/Vehicles';
import Service from './pages/service/Service';
import Features from './pages/features/Features';
import Subscribe from './pages/sub/Subscribe';
import Review from './pages/review/Review';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Logins from './components/forms/Logins';
import Model from './components/modal/Modal';
import { Route } from 'react-router-dom';

function App() {

   const [show, setShow] = useState(false);
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);setemail('');setpassword('');}

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`your email is : ${email} and password is : ${password}`)
      

    }
  
  const test = email?.includes('@')
    console.log(test) ;
  return (
    < >

        <Home  handleShow ={handleShow} />
    
        
        <Counter />
      <Vehicles />
      <Service />
      <Features />
      <Subscribe />
    <Review />
      <Contact />
      <Footer />
      <Model show={show} handleClose={handleClose} handleSubmit={handleSubmit} email={email} password={password} >
      <Logins setemail={setemail} setpassword={setpassword}  />
      </Model> 
    </>
  );
}

export default App;
