//About Us Component : CHECK WARNING.info FOR NOTES.....
  
import { getAllByAltText } from '@testing-library/react';
import { Jumbotron, Button, Nav, Card, Container, Row, Col } from 'react-bootstrap';

const AboutUsComponent = () => {
    return (
        <div>
            <Jumbotron style={{textAlign:"left", backdropFilter: "blur(10px)", marginLeft: 10, marginRight: 10}}>
                <h1>Interview Tracking App</h1>
                <p>
                    This is a service for tracking interview schedules in an organization, a simple project done by a team from Capgemini as a part of
                    their training. ITS provides services that connect to RESTful APIs which handle with data from a postgre database with mock data. 
                    There are services for Admin and Panel Members who need to login to access the same. Employees, Panel Members and Candidate details can be operated on with these services.
                </p>
                <p>
                    <Button variant="dark" href="https://github.com/neetimishra98/Sprint3_InterviewTrackingSystem" target="_blank">Check code on Github</Button>
                </p>
            </Jumbotron>
            <br></br>
            <h1>Our Team</h1>
            <br></br>
            {/* MEMBERS */}
            <Container>
                <Row md={3}>
                    {/* MEMBER IS FROM COL TO COL TAG.... */}
                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Rutuja Patil</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Neeti Mishra</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Meetali Patidar</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <br></br>
                <Row md={3}>

                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Shrishti Singh</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Sneha Chitale</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Prasanna Mandapalli</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <br></br>
                <Row md={3}>

                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Priyanka Yadav</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Suraj Vijaykumar Mandal</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col sm>
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Yash Sandeep Kadam</Card.Title>
                            <Card.Text>
                            Software Analyst
                            </Card.Text>
                            <Button href="https://www.linkedin.com/in/yash-kadam/" variant="primary" target="_blank">LinkedIn</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br>

            <div style={{background: "#151515", color: "#CECECE", textAlign:"left", margin: 0}}>Content owned by the team of above mentioned individuals. Code available on <a href="https://github.com/neetimishra98/Sprint3_InterviewTrackingSystem" target="_blank">github</a>.</div>
        </div>
    );
}



export default AboutUsComponent;



