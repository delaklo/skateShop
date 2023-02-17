import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './shopElements.scss';
import ProfileSvg from './svg/ProfileSvg';
import ShopBasketSvg from './svg/ShopBasketSvg';
import CatalogueSvg from './svg/CatalogueSvg';
import LogoSvg from './svg/LogoSvg';
import { useState } from 'react';

function NavbarShop(props) {



// function findItem (e){
//   e.preventDefault();
//   setItem(e.target.value)
//   console.log(item)
//   props.getItem(item);
// }


  return (
    <Navbar bg="dark" expand="lg" className='text-white' id='nav' style={{width: '100vw'}}>
      <Container>
        <Navbar.Brand id='home' href="/"><div className='logo_wrapper'><LogoSvg /></div>
        <h3 className='nav__link'>SkateShop</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Button id='btn__catalogue'><CatalogueSvg /> Catalogue</Button>
        
        <InputGroup id="input__finder">
        <Form.Control
          placeholder="I am looking..."
          
       
          aria-label="I am looking..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
      </InputGroup>

      <div className='nav__svg_wrapper'> <ProfileSvg /></div>

      <div className='nav__svg_wrapper'> <ShopBasketSvg color={'white'} /> </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarShop;