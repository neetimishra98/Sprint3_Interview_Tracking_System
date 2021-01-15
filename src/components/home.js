import { Carousel, Jumbotron, Button, Nav, Card, Container, Row, Col } from 'react-bootstrap';

const HomeComponent = () => {
  return (
    <div className='container-fluid' >
      <Carousel>
        <Carousel.Item style={{ 'height': "700px" }} >
          <img style={{ 'height': "700px" }}
            className="d-block w-100"
            src={'assets/img/int1.jpg'} />
          <Carousel.Caption>
            <h3><b>INTERVIEW TRACKING SYSTEM</b></h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ 'height': "700px" }}>
          <img style={{ 'height': "700px" }}
            className="d-block w-100"
            src={'assets/img/int3.jpg'} />
          <Carousel.Caption>
            <center>
            <h3><b>INTERVIEW TRACKING SYSTEM</b></h3>
            </center>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


export default HomeComponent;































