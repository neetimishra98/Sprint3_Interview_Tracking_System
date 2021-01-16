import GiveTechRating from './services/givetechrating';
import ViewInterviewMemberForTech from './services/viewinterviewmemberfortech';
import ViewAllInterviewMembersForTech from './services/viewallinterviewmembersfortech'
import { Accordion, Card, Button } from 'react-bootstrap';
import ViewACandidateForTech from '../candidate/techservices/viewtechcandidate'
import SurrenderAsTechPanel from '../panelmember/techservices/surrendertechpanel'

const InterviewSchedulerForTech = () => {
    return (
        <div>
             <Accordion>

             <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        View All Interview Members 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewAllInterviewMembersForTech></ViewAllInterviewMembersForTech></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card> 
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        View Interview Member 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewInterviewMemberForTech></ViewInterviewMemberForTech></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                       Set Tech Rating to a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    {/* Fetch all Employee component */}
                    <Card.Body><GiveTechRating></GiveTechRating></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>    
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        View a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    {/* Search an Candidate component */}
                    <Card.Body><ViewACandidateForTech></ViewACandidateForTech></Card.Body>
                    {/* Search an Candidate component */}
                    </Accordion.Collapse>
                </Card>  
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            Surrender As Tech Panel
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    {/* Search an Panel component */}
                    <Card.Body><SurrenderAsTechPanel></SurrenderAsTechPanel></Card.Body>
                    {/* Search an Panel component */}
                    </Accordion.Collapse>
                </Card>        
            </Accordion>
        </div>
    );
}

export default InterviewSchedulerForTech;