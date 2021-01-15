//Interview Services Accessible By The Admin....
import techInterviewScheduleAdmin from '../interviewscheduler/techInterviewScheduleAdmin';
import hrInterviewScheduleAdmin from '../interviewscheduler/hrInterviewScheduleAdmin';

import HRShareandschedule from './adminhrServices/hrshareandschedule.js';
import HRCancelInterview from './adminhrServices/hrcancelinterview.js'
import HRUpdateInterview from "./adminhrServices/hrupdatescheduleinterview";

import TechShareandschedule from './adminTechServices/techshareandschedule.js';
import TechCancelInterview from './adminTechServices/techcancelinterview.js'
import TechUpdateInterview from "./adminTechServices/techupdatescheduleinterview";

import { Row,Col,Container,Accordion, Card, Button } from 'react-bootstrap';

//for normal image.
//<img src="logo.jpg" alt="pic" />
//  backgroundImage: "url(/img/logo.png)"

const InterviewSchedulerForAdmin = () => {
 

return (
  <div>
 
      <Container className="mr-5">
      <card>
      {/* All underlying operations from services */}
      <Accordion>
          
         <table className="marginLeft">
         <Col className="align-items-center">
                   <Row>
                  <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                      <center><h2><b><i>  TECH INTERVIEW</i></b></h2></center>
              </Accordion.Toggle>
             
              <Accordion.Collapse eventKey="0">
                  {/* Add Candidate component */}
                  <Card.Body class="bg-custom">
                    <TechShareandschedule></TechShareandschedule>
                    
                    <TechUpdateInterview></TechUpdateInterview>

                    <TechCancelInterview></TechCancelInterview>

                   </Card.Body>
                  {/* Add an Candidate component */}
              </Accordion.Collapse>
              </Row>
              <Row>
              <Accordion.Toggle as={Button} variant="dark" eventKey="1">
              <center><h2><b><i> HR INTERVIEW</i></b></h2></center>
              </Accordion.Toggle>
         
          <Accordion.Collapse eventKey="1">
              {/* View Candidate component */}
              <Card.Body class="bg-custom">
                    <HRShareandschedule></HRShareandschedule>
                    
                    <HRUpdateInterview></HRUpdateInterview>

                    <HRCancelInterview></HRCancelInterview>

                   </Card.Body>
              {/* View an Candidate component */}
          </Accordion.Collapse>
          </Row>
        
          </Col>
          </table>
      </Accordion>
      </card>
      </Container>
  </div>
);
}

export default InterviewSchedulerForAdmin;




























/*
   <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                       TECHNICAL INTERVIEW
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                  
                    <Card.Body>

                    
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Schedule Technical Interview
                    </Accordion.Toggle>
                  
                    <Accordion.Collapse eventKey="0">
                    <Card.Body><TechShareandschedule></TechShareandschedule></Card.Body>
                    </Accordion.Collapse>
               

                
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                     Update Technical Interview
                    </Accordion.Toggle>
                   
                    <Accordion.Collapse eventKey="1">
                    <Card.Body><TechUpdateInterview></TechUpdateInterview></Card.Body>
                    </Accordion.Collapse>
             
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Cancel Technical Interview
                    </Accordion.Toggle>
                
                    <Accordion.Collapse eventKey="2">
                    <Card.Body><TechCancelInterview></TechCancelInterview></Card.Body>
                    </Accordion.Collapse>
            
                    </Card.Body>
                   
                    </Accordion.Collapse>
                </Card>
                */
