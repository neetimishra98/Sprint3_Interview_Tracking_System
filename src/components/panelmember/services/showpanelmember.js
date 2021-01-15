import React from 'react';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import ShowPanelMemberAction from '../../../actions/panelmember/showpanelmembers_action'


const ShowPanelMembers = (props) => {

    let panelMemberList = useSelector((state) => state.PanelMemberReducer.panelmembers);
    let dispatcher = useDispatch();
    React.useEffect(() => PanelMemberList(), [])
    const PanelMemberList = () => {
        dispatcher(ShowPanelMemberAction());
    }

    console.log("PanelMemberList: ", panelMemberList);
    if (!Array.isArray(panelMemberList)) {
        panelMemberList = [];
        console.log("Set Panel Member to blank array");
    }

    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 600 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>List All Panel Member.</Form.Label>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>PanelID</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>EmployeeID</th>
                                <th>Employee Name</th>
                            </tr>
                        </thead>
                        <hr></hr>
                        {renderData(panelMemberList)}
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );

    function renderData(panelMemberList) {
        console.log("panel member dispatcher object returned from the server : ", panelMemberList);
        return panelMemberList.map((panelmember, index) => {
            const Employeeid = panelmember.employeeEntity.employeeid;
            const EmployeeName = panelmember.employeeEntity.name;
            const { panelid, location, type } = panelmember //destructuring
            return (
                <tbody>
                    <tr>
                        <td>{panelid}</td>
                        <td>{location}</td>
                        <td>{type}</td>
                        <td>{Employeeid}</td>
                        <td>{EmployeeName}</td>
                    </tr>
                </tbody>
            )
        });
    }
}

export default ShowPanelMembers;
