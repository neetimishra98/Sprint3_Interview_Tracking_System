//Home Component : CHECK WARNING.info FOR NOTES.....

import HRComponent from './hr';
import { Carousel, Jumbotron, Card, Container, Row, Col } from 'react-bootstrap';

//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 


const HomeHRComponent = () => {
    return (
  <div >
     
            {/* Some Logic To Check If User Logged In Is Admin Or A Panel Member.... */}
            <HRComponent></HRComponent>
    
        
    
    </div>
  );
}




export default HomeHRComponent;