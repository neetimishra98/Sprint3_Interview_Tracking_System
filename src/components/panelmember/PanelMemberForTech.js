//Panel Services Accessible By The Admin....
import SurrenderAsTechPanel from './techservices/surrendertechpanel'

import { Accordion, Card, Button } from 'react-bootstrap'

const PanelMemberForTech = () => {
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
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            Surrender As Tech Panel
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    {/* Search an Panel component */}
                    <Card.Body class="bg-custom"><SurrenderAsTechPanel></SurrenderAsTechPanel></Card.Body>
                    {/* Search an Panel component */}
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default PanelMemberForTech;