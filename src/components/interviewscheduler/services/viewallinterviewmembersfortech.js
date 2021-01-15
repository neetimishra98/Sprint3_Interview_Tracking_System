import React from 'react';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
//import ShowPanelMemberAction from '../../../actions/panelmember/showpanelmembers_action'
import ViewallInterviewMembersForTechAction from '../../../actions/interviewscheduler/viewallinterviewmembersaction'


const ViewAllInterviewMembersForTech = (props) => {

    let intmemberList = useSelector((state) => state.TechReducer.viewalltech);
    let dispatcher = useDispatch();
    React.useEffect(() => ViewAllInterviewMembers(), [])
    const ViewAllInterviewMembers = () => {
        dispatcher(ViewAllInterviewMembersForTech());
    }

    console.log("InterviewMemberList: ", intmemberList);
    if (!Array.isArray(intmemberList)) {
        intmemberList = [];
        console.log("Set interview Member to blank array");
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
                                <th>Interview Id</th>
                                <th>Date</th>
                                <th>End Time</th>
                                <th>Final Status</th>
                                <th>Tech Rating</th>
                                <th>Location</th>
                                <th>Start Time</th>
                            </tr>
                        </thead>
                        <hr></hr>
                        {renderData(intmemberList)}
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );

    function renderData(intmemberList) {
        console.log("panel member dispatcher object returned from the server : ", intmemberList);
        return intmemberList.map((intmember, index) => {
            //const Employeeid = panelmember.employeeEntity.employeeid;
            //const EmployeeName = panelmember.employeeEntity.name;
            const { interviewid, date, endtime,finalstatus,techrating,location ,starttime} = intmember //destructuring
            return (
                <tbody>
                    <tr>
                        <td>{interviewid}</td>
                        <td>{date}</td>
                        <td>{endtime}</td>
                        <td>{finalstatus}</td>
                        <td>{techrating}</td>
                        <td>{location}</td>
                        <td>{starttime}</td>
                    </tr>
                </tbody>
            )
        });
    }
}

export default ViewAllInterviewMembersForTech;
