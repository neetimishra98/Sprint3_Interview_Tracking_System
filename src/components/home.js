import { Navbar,Carousel, Jumbotron, Button, Nav, Card, Container, Row, Col } from 'react-bootstrap';

const HomeComponent = () => {
  return (
    <div className='container-fluid' 
     style={{ 'height': "700px" }}
            className="d-block w-100"
            src={'assets/img/int1.jpg'} >
              <Navbar bg="dark" variant="dark">

      <nav id="navbar-example2" class="navbar navbar-dark bg-dark">
      <Nav.Item>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#fat">TECHNICAL PANEL SERVICES</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#fat">TECHNICAL PANEL SERVICES</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#mdo">HUMAN RESOURCE SERVICES</a>
    </li>
  </ul>
  </Nav.Item>

  <Nav.Item className="ml-auto">
<form class="form-inline ml-auto ">
    <input class="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</Nav.Item>
</nav>
</Navbar>
<div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
  <h4 id="fat"></h4>
  <p><h4><b></b></h4></p>
  <h4 id="mdo"></h4>
  <p></p>
  <h4 id="one"></h4>
  <p></p>
  <h4 id="two"></h4>
  <p></p>
  <h4 id="three"></h4>
  <p></p>
  </div>
  </div>
  );
}
export default HomeComponent;

