import { Navbar, Carousel, Jumbotron, Button, Nav, Card, Container, Row, Col } from 'react-bootstrap';
import MultipleLoginComponent from '../components/MultiLogin';

const HomeComponent = () => {
  return (
    <div>


      <Jumbotron style={{ backgroundColor: 'rgba(15,15,15,0.4)', filter: 'blur(10)' }}>

        <Row>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <h1><b><i>Welcome to Interview Tracking System</i></b></h1>
            <p>
              <h6>We have various services to offer. See the cards to get the brief description about each of the services!</h6>
            </p>
            <p>
              <h5><b><i>Please Login to use the services!!</i></b></h5>
            </p>
            <p>
              <Card style={{ backgroundColor: 'rgba(15,15,15,0.2)', color: "white" }}>
                <MultipleLoginComponent></MultipleLoginComponent>
              </Card>
            </p>

          </Col>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <center>
              <p>
                <Card
                  bg="dark"
                  text="light"
                  style={{ width: '20rem', backgroundImage: 'linear-gradient(to right, #00b09b, #96c93d)' }}
                  className="mb-3"
                >
                  <a>
                    <Card.Body>
                      <Card.Title style={{ color: "white" }} href='/admin'>Admin Services</Card.Title>
                      <Card.Text style={{ color: "white" }}>
                        Admin Services manages the candidate information, schedule interviews and manages the panel member information.
            </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </p>
              <br></br>
              <br></br>
              <p>
                <Card
                  bg="dark"
                  text="light"
                  style={{ width: '20rem', background: 'linear-gradient(to right, #fc5c7d, #6a82fb)' }}
                  className="mb-3"
                >
                  <a>
                    <Card.Body>
                      <Card.Title style={{ color: "white" }}>Technical Services</Card.Title>
                      <Card.Text style={{ color: "white" }}>
                        Technical Panel Services manages interview scheduled by admin and gives a rating to the candidate.
            </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </p>
              <br></br>
              <br></br>
              <p>
                <Card
                  bg="dark"
                  text="light"
                  style={{ width: '20rem', background: 'linear-gradient(to right, #00b4db, #0083b0)' }}
                  className="mb-2"
                >
                  <a>
                    <Card.Body>
                      <Card.Title style={{ color: "white" }}>HR Services</Card.Title>
                      <Card.Text style={{ color: "white" }}>
                        HR(Human Resources) Panel manages interview scheduled by admin and gives a rating to the candidate.
            </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </p>
            </center>
          </Col>
        </Row>
      </Jumbotron>
      <div class="d-flex flex-column">
        <footer class="footer">
          <div style={{backgroundColor: 'rgba(15,15,15,0.4)'}}>
            <span><b style={{color: "white"}}>&copy; Content owned by the team of above mentioned individuals. Code available on</b></span>
            <a href="https://github.com/neetimishra98/Sprint3_InterviewTrackingSystem">Git Hub Repository</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default HomeComponent;


/*








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







 <p>
          <Button href='/about' variant='primary'>Learn More</Button>
        </p>
          --------------------










          */
