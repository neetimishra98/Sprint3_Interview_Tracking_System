//Panel Services Accessible By The Admin....
import SurrenderAsHRPanel from './hrservices/surrenderashr'
import ShowPanelMembers from './services/showpanelmember'
import DeletePanelMember from './services/deletepanelmember'

import { Accordion, Card, Button } from 'react-bootstrap'

const PanelMemberForHR = (props) => {
    return (
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundImage:`url(/logo.png)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: "100px"
    
    
        }}>
            {/* All underlying operations from services */}
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Surrender As HR Panel
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Search an Panel component */}
                    <Card.Body class="bg-custom"><SurrenderAsHRPanel></SurrenderAsHRPanel></Card.Body>
                    {/* Search an Panel component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default PanelMemberForHR;