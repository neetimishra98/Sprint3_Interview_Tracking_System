import './App.css';

//Internal Components
import Logo from "./logo.svg"
import HomeComponent from './components/home'
import HomeAdminComponent from './components/homeadmin';
import AboutUsComponent from './components/about';
import HomeHRComponent from './components/homehr';
import HomeTechComponent from './components/hometech';
//Installed Components
import { Route, Link, Switch } from 'react-router-dom';
//Bootstrap
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">

    {/* NAVIGATION BAR COMPONENT FROM BOOTSTRAP */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
          src={Logo} 
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{' '}
        Interview Tracking System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <Link to='/'>
              <Nav.Link href="/" active>Home</Nav.Link>
            </Link>
            <Link to='/admin'>
              <Nav.Link href="/admin" active>Services</Nav.Link>
            </Link>
            <Link to='/about'>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Link>
            <Nav.Link href="#link" disabled>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Some Common Components if required at all */}

      {/* Switching the content from nav operations */}
      <Switch>
        <Route path='/' component={HomeComponent} exact />
        <Route path='/admin' component={HomeAdminComponent} exact />
        <Route path='/hr' component={HomeHRComponent} exact />
        <Route path='/tech' component={HomeTechComponent} exact />
        <Route path='/about' component={AboutUsComponent} exact />
      </Switch>
    </div>
  );
}
//  background-image: url("../src/logo.png");
/*
.bg-custom{
  background-image: linear-gradient(45deg, #114455, #292929);
}
*/
export default App;