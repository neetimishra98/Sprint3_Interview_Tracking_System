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
              <a class="nav-link" href="/admin">ADMIN SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tech">TECHNICAL PANEL SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/hr">HUMAN RESOURCE SERVICES</a>
            </li>
          </ul>
          </Nav.Item>

          <Nav.Item className="ml-auto">
        </Nav.Item>
        </nav>
    </Navbar>

    <Jumbotron style={{backgroundColor: 'rgba(10,10,10,0.5)'}}>
      <Row>
      <Col style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'white'}}>
        <h1>Welcome to Interview Tracking System</h1>
        <p>
          We have various services to offer. The services are organized in tabs. Click on one of the links below to get started
        </p>
        <p>
          <Button href='/about' variant='primary'>Learn More</Button>
        </p>
      </Col>
      <Col>
      <center>
        <p>
        <Card
          bg="dark"
          text="light"
          style={{ width: '18rem', backgroundImage: 'linear-gradient(to right, #00b09b, #96c93d)' }}
          className="mb-2"
        >
          <a href='/admin'>
          <Card.Body>
            <Card.Title style={{color:"white"}} href='/admin'>Admin Services</Card.Title>
            <Card.Text style={{color:"white"}}>
             Admin Services manages the candidate information, schedule interviews and manages the panel member information.
            </Card.Text>
          </Card.Body>
          </a>
        </Card>
        </p>

        <p>
        <Card
          bg="dark"
          text="light"
          style={{ width: '18rem', background: 'linear-gradient(to right, #fc5c7d, #6a82fb)' }}
          className="mb-2"
        >
          <a href='/tech'>
          <Card.Body>
            <Card.Title style={{color:"white"}}>Technical Services</Card.Title>
            <Card.Text style={{color:"white"}}>
             Technical Panel Services manages interview scheduled by admin and gives a rating to the candidate.
            </Card.Text>
          </Card.Body>
          </a>
        </Card>
        </p>

        <p>
        <Card
          bg="dark"
          text="light"
          style={{ width: '18rem', background: 'linear-gradient(to right, #00b4db, #0083b0)' }}
          className="mb-2"
        >
          <a href='/hr'>
          <Card.Body>
            <Card.Title style={{color:"white"}}>HR Services</Card.Title>
            <Card.Text style={{color:"white"}}>
            HR(Human Resources) Panel manages interview scheduled by admin and gives a rating to the candidate.
            </Card.Text>
          </Card.Body>
          </a>
        </Card>
        </p>
        </center>
      </Col>
      </Row>
    </Jumbotron><br></br>

    <div style={{background: "#151515", color: "#CECECE", textAlign:"left", margin: 0}}>Content owned by the team of above mentioned individuals. Code available on <a href="https://github.com/neetimishra98/Sprint3_InterviewTrackingSystem" target="_blank">github</a>.</div>

  </div>
  );
}
export default HomeComponent;

