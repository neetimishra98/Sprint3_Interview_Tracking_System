import React from 'react';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ViewAllInterviewMembersForTechAction from '../../../actions/interviewscheduler/viewinterviewmemberfortechaction'


const ViewAllInterviewMembers = (props) => {


    let interviewListForTech= useSelector((state)=>state.TechReducer.viewalltech);
    let dispatcher = useDispatch();
    React.useEffect(()=>InterviewMemberForTechList(), [])
        const InterviewMemberForTechList = () => {
            dispatcher(ViewAllInterviewMembersForTechAction());
        }

       
        console.log("InterviewMemberList: ", interviewListForTech);
        if (!Array.isArray(interviewListForTech)) {
            interviewListForTech = [];
            console.log("Set interview Member to blank array");
        }


    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 600 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>List All Interview Member.</Form.Label>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                <tr>
                <th>Interview ID</th>  
                        <th>Location</th>
                        <th>Date</th>
                        <th>Start_Time</th>
                        <th>End_Time</th>
                        <th>TechRating</th>
                        <th>Final<br></br>Status</th> 
                </tr>
            </thead>
            <hr></hr>
                {renderData(interviewListForTech)}
       
        </Table>
        </Form>
        </Jumbotron>
    </div>

    );


function renderData(interviewListForTech) {
    console.log("interviewmember dispatcher object returned from the server : ", interviewListForTech);
    if(interviewListForTech!==undefined) {
      return interviewListForTech.map((interviewmember,index) =>{
        const {interviewid,location,date,start_time,end_time,techrating,finalstatus} = interviewmember //destructuring
        return(
                    <tbody>
                        <tr>
                        <td>{interviewid}</td>     
                        <td>{location}</td>
                        <td>{date}</td>
                        <td>{start_time}</td>
                        <td>{end_time}</td>
                        <td>{techrating}</td>
                        <td>{finalstatus}</td>    
                </tr>
                </tbody>
    )
});
    }
}
}
export default ViewAllInterviewMembers;
