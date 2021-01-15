//Hr Interview Scheduler Services Component : CHECK WARNING.info FOR NOTES.....
import React from 'react';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ShowInterviewMemberAction from '../../../actions/interviewscheduler/showinterviewmembers_action';



const ShowInterviewMember = (props) => {


    let interviewList= useSelector((state)=>state.HRReducer.viewmemberlistforhr);
    let dispatcher = useDispatch();
    React.useEffect(()=>InterviewMemberList(), [])
        const InterviewMemberList = () => {
            dispatcher(ShowInterviewMemberAction());
        }

       
        console.log("InterviewMemberList: ", interviewList);
        if (!Array.isArray(interviewList)) {
            interviewList = [];
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
                <th>INTERVIEW ID</th>  
                        <th>LOCATION</th>
                        <th>DATE</th>
                        <th>START_TIME</th>
                        <th>END_TIME</th>
                        <th>HRRATING</th>
                        <th>FINAL<br></br>STATUS</th> 
                </tr>
            </thead>
            <hr></hr>
                {renderData(interviewList)}
       
        </Table>
        </Form>
        </Jumbotron>
    </div>

    );


function renderData(interviewList) {
    console.log("interviewmember dispatcher object returned from the server : ", interviewList);
    if(interviewList!==undefined) {
      return interviewList.map((interviewmember,index) =>{
        const {interviewid,location,date,start_time,end_time,hrrating,finalstatus} = interviewmember //destructuring
        return(
                    <tbody>
                        <tr>
                        <td>{interviewid}</td>     
                        <td>{location}</td>
                        <td>{date}</td>
                        <td>{start_time}</td>
                        <td>{end_time}</td>
                        <td>{hrrating}</td>
                        <td>{finalstatus}</td>    
                </tr>
                </tbody>
    )
});
    }
}
}
export default ShowInterviewMember;
