import { Form, Table, Jumbotron, Button } from 'react-bootstrap'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import viewByAllAction from '../../../actions/candidate/adminactions/viewByAllAction'
import viewByNameAction from '../../../actions/candidate/adminactions/viewByNameAction'
import viewByLocationAction from '../../../actions/candidate/adminactions/viewByLocationAction'
import viewByQualificationAction from '../../../actions/candidate/adminactions/viewByQualificationAction'
import viewByDesignationAction from '../../../actions/candidate/adminactions/viewByDesignationAction'
import viewByPrimarySkillsAction from '../../../actions/candidate/adminactions/viewByPrimarySkillsAction'

import getDistinctNameAction from '../../../actions/candidate/adminactions/getDistinctNameAction'
import getDistinctDesignationAction from '../../../actions/candidate/adminactions/getDistinctDesignationAction'
import getDistinctLocationAction from '../../../actions/candidate/adminactions/getDistinctLocationAction'
import getDistinctPrimarySkillAction from '../../../actions/candidate/adminactions/getDistinctPrimarySkillAction'
import getDistinctQualificationAction from '../../../actions/candidate/adminactions/getDistinctQualificationAction'

let dispatch;
let selectedview;
let selectedOption;
const ViewCandidate = (props) => {

  let [filter, setFilter] = useState();
  let [initialState, setInitialState] = useState();
  let candidateList = useSelector(state => state.CandidateReducer.candidates);
  let filterList = useSelector(state => state.CandidateReducer.filter);
  
   dispatch = useDispatch();

  
/*React.useEffect(() => {
      CandidateList()
    }, []);
  
    const CandidateList = () => {
      //dispatch()
    }*/

  console.log("candidateLists: ", candidateList);
  if(!Array.isArray(candidateList)) {
      candidateList = [];
      console.log("Set candidateList to blank array");
  }

  if(!Array.isArray(filterList)) {
    
    filterList=[];
    console.log("Set candidateList to blank array");
}


const searchHandleChange = (event) => {
  selectedOption = event.target.value;
  console.log("Selected option: " + selectedOption);
  if(selectedOption === "Name") {
      dispatch(getDistinctNameAction())
      .then((response) => {
          console.log("REsponse: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
      });
  } else if(selectedOption === "Location") {
      dispatch(getDistinctLocationAction())
      .then((response) => {
          console.log("REsponse: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
      });
  } else if(selectedOption === "Qualification") {
      dispatch(getDistinctQualificationAction())
      .then((response) => {
          console.log("REsponse: ", response);
          console.log("filterList: ", filterList);
          setFilter(filterList);
      });
  }
  else if(selectedOption === "Designation") {
    dispatch(getDistinctDesignationAction())
    .then((response) => {
        console.log("REsponse: ", response);
        console.log("filterList: ", filterList);
        setFilter(filterList);
    });
}
else if(selectedOption === "Primary Skills"){
  dispatch(getDistinctPrimarySkillAction())
  .then((response) => {
      console.log("REsponse: ", response);
      console.log("filterList: ", filterList);
      setFilter(filterList);
  });
}
}


function handleSearch(event) {
  event.preventDefault();
  if(selectedOption==="All"){
    dispatch(viewByAllAction())
    .then((response) => {
      console.log("Response: ", response);
      console.log("List: ", candidateList);
      setInitialState(candidateList);
  });
}
 else if(selectedOption==="Name"){
    dispatch(viewByNameAction(selectedview))
    .then((response) => {
      console.log("Response: ", response);
      console.log("List: ", candidateList);
      setInitialState(candidateList);
  });
  }else if(selectedOption==="Location")
  {
    dispatch(viewByLocationAction(selectedview))
    .then((response) => {
      console.log("Response: ", response);
      console.log("List: ", candidateList);
      setInitialState(candidateList);
  });
  }else if(selectedOption==="Qualification")
  {
    dispatch(viewByQualificationAction(selectedview))
    .then((response) => {
      console.log("Response: ", response);
      console.log("List: ", candidateList);
      setInitialState(candidateList);
  });
  }else if(selectedOption==="Designation")
  {
    dispatch(viewByDesignationAction(selectedview))
    .then((response) => {
      console.log("Response: ", response);
      console.log("List: ", candidateList);
      setInitialState(candidateList);
  });
  }
  else if(selectedOption==="Primary Skills")
  {
    dispatch(viewByPrimarySkillsAction(selectedview))
    .then((response) => {
      console.log("Response: ", response);
      console.log("List: ", candidateList);
      setInitialState(candidateList);
  });
  }
}







    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form onSubmit={handleSearch}>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>View Candidate Details</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicView">
                        <Form.Label for="view">View By</Form.Label>
                        <Form.Control as="select" id="view" onChange={searchHandleChange} required>
                            <option>Select View By</option>
                            <option>All</option>
                            <option>Name</option>
                            <option>Location</option>
                            <option>Qualification</option>
                            <option>Designation</option>
                            <option>Primary Skills</option>
                        </Form.Control>

                        <Form.Group controlId="formBasicName">
                            <Form.Label for="view">Filter</Form.Label>
                            <Form.Control as="select" id="filter" onChange={filterHandleChange}>
                              <option>select</option>
                              {renderFilterList(filterList)}       
                            </Form.Control>
                       </Form.Group>

                      <Form.Group>
                            <Button variant="dark" type="submit">
                                View
                    </Button>
                        </Form.Group>

                    </Form.Group>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                
                                <th>ID</th>
                                <th>Candidate Name</th>
                                <th>Location</th>
                                <th>Qualification</th>
                                <th>Designation</th>
                                <th>Experience</th>
                                <th>Primary Skills</th>
                                <th>Secondary Skills</th>
                                <th>Notice Period</th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderTableData(candidateList)}
                        </tbody>
                    </Table>

                </Form>
            </Jumbotron>
        </div>
    );
}

function renderTableData(candidateList) {
    console.log("candidateList: ", candidateList);
    return candidateList.map((candidate, index) => {
       const {candidateid, candidatename, location, qualification, designation, experience, primaryskills, secondaryskills, noticeperiod} = candidate //destructuring
       return (
          <tr key={candidateid}>
             <td>{candidateid}</td>
             <td>{candidatename}</td>
             <td>{location}</td>
             <td>{qualification}</td>
             <td>{designation}</td>
             <td>{experience}</td>
             <td>{primaryskills}</td>
             <td>{secondaryskills}</td>
             <td>{noticeperiod}</td>
          </tr>
       )
    })
  };
  

  function filterHandleChange(event) {
    selectedview = event.target.value
    console.log("Selected view: " + selectedview);
  }
  
  function renderFilterList(filterList) {
    console.log("filterList", filterList);
    return filterList.map((value) => {
        return (
            <option value = {value}>{value}</option>
        )
    })
  }
  
  

 export default ViewCandidate;