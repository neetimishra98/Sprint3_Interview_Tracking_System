import GiveHrRating from './hrservices/givehrrating'
import ViewInterviewMembersForHr from './hrservices/viewallinterviewmembers'
import ViewListForHr from './hrservices/viewlistforhr';
import { Accordion, Card, Button } from 'react-bootstrap';



const InterviewSchedulerForHr = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">

                        Give HrRating To a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    {/* givehrrating to InterviewScheduler component */}
                    <Card.Body><GiveHrRating></GiveHrRating></Card.Body>
                    {/* givehrrating to InterviewScheduler component */}
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        View All Candidates using Interview id
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all interview members from  InterviewScheduler component  using interviewid*/}
                    <Card.Body><ViewInterviewMembersForHr></ViewInterviewMembersForHr></Card.Body>
                    {/* Fetch all interview members from  InterviewScheduler component  using interviewid*/}
                    </Accordion.Collapse>
                </Card>


                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        View All HrInterview Members
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    {/* Fetch all Interview Members from InterviewScheduler component */}
                    <Card.Body><ViewListForHr></ViewListForHr></Card.Body>
                    {/* Fetch all Interview Members from InterviewScheduler component */}
                    </Accordion.Collapse>
                </Card>


               

                </Accordion>
        </div>
    );
}

export default InterviewSchedulerForHr;

