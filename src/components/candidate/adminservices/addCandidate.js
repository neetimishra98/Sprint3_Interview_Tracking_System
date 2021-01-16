import { Alert,Form, Table, Jumbotron, Button } from 'react-bootstrap'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addCandidateAction from '../../../actions/candidate/adminactions/addCandidateAction'
import getDesignationsAction from '../../../actions/candidate/adminactions/getDesignationsAction'
import getLocationsAction from '../../../actions/candidate/adminactions/getLocationsAction'
import getPrimarySkillsAction from '../../../actions/candidate/adminactions/getPrimarySkillsAction'
import getSecondarySkillsAction from '../../../actions/candidate/adminactions/getSecondarySkillsAction'
import getQualificationsAction from '../../../actions/candidate/adminactions/getQualificationsAction'
import { useHistory } from "react-router-dom";
import Candidate from '../../../models/Candidate';


let dispatch;
let history;
let location;
let qualification;
let designation; 
let primaryskill;
let secondaryskill;
let selectedPrimary;
let selectedSecondary;

const AddCandidate = () => {

    dispatch = useDispatch();
    history = useHistory();

    let locationList = useSelector(state => state.CandidateReducer.location);

   React.useEffect(() => {
       LocationList()
      }, []);
    
    const LocationList = () => {
        dispatch(getLocationsAction())
      }
      
     if(!Array.isArray(locationList)){
         locationList = [];
         console.log("Set locationList to blank array");
     } 
    console.log("mmmmmmlocationList: ", locationList);

    
    let qualificationList = useSelector(state => state.CandidateReducer.qualification);

    React.useEffect(() => {
       QualificationList()
      }, []);
    
      const QualificationList = () => {
        dispatch(getQualificationsAction())
      }
      if(!Array.isArray(qualificationList)){
        qualificationList = [];
        console.log("Set locationList to blank array");
    } 
   console.log("qualificationList: ", qualificationList);  
   
   let designationList = useSelector(state => state.CandidateReducer.designation);

    React.useEffect(() => {
       DesignationList()
      }, []);
    
      const DesignationList = () => {
        dispatch(getDesignationsAction())
      }
      if(!Array.isArray(designationList)){
        designationList = [];
        console.log("Set designationList to blank array");
    } 
   console.log("designationList: ", designationList); 
   
   let primaryskillsList = useSelector(state => state.CandidateReducer.primaryskill);

    React.useEffect(() => {
       PrimarySkillsList()
      }, []);
    
      const PrimarySkillsList = () => {
        dispatch(getPrimarySkillsAction())
      }
      if(!Array.isArray(primaryskillsList)){
        primaryskillsList = [];
        console.log("Set primaryskillsList to blank array");
    } 
   console.log("primaryskillsList: ", primaryskillsList); 

   let secondaryskillsList = useSelector(state => state.CandidateReducer.secondaryskill);

    React.useEffect(() => {
       SecondarySkillsList()
      }, []);
    
      const SecondarySkillsList = () => {
        dispatch(getSecondarySkillsAction())
      }
      if(!Array.isArray(secondaryskillsList)){
        secondaryskillsList = [];
        console.log("Set secondaryskillsList to blank array");
    } 
   console.log("secondaryskillsList: ", secondaryskillsList); 


   return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Add Candidate Details</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" id="name" name="name" placeholder="Enter name" onBlur={validateCandidateName}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select" id="loc" name="loc" onChange={handleChangeLoc}>
                        <option>select</option>
                        {renderLocations(locationList)}       
                    </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicQualification">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control as="select" id="qual" name="qual" onChange={handleChangeQual}>
                        <option>select</option>
                        {renderQualifications(qualificationList)}       
                    </Form.Control>
                    
                    </Form.Group>

                    <Form.Group controlId="formBasicDesignation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control as="select" id="desig" name="design" onChange={handleChangeDesign}>
                        <option>select</option>
                        {renderDesignations(designationList)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicExperience">
                        <Form.Label>Experience in Years</Form.Label>
                        <Form.Control type="Number"  id="exp" name="exp" onBlur={validateExperience}/>
                    </Form.Group>                    

                    <Form.Group controlId="formBasicPrimarySkill">
                        <Form.Label>Primary Skill</Form.Label>
                        <Form.Control as="select" id="ps" name="ps" onChange={handleChangePs} onBlur={validatePs}>
                        <option>select</option>
                        {renderPrimarySkills(primaryskillsList)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicSecondarySkill">
                        <Form.Label>Secondary Skill</Form.Label>
                        <Form.Control as="select" id="ss" name="ss" onChange={handleChangeSs} onBlur={validateSs}>
                        <option>select</option>
                        {renderSecondarySkills(secondaryskillsList)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicNoticePeriod">
                        <Form.Label>NoticePeriod in Months</Form.Label>
                        <Form.Control type="Number" id="np" name="np" onBlur={validateNoticePeriod}/>
                    </Form.Group> 

                    <Form.Group controlId="formBasicButton">
                    <Button variant="dark" type="submit">Submit </Button>
                    &nbsp; &nbsp;    
                    <Button variant="primary" type="reset">Reset </Button>
                    </Form.Group>
  

                </Form>
            </Jumbotron>
        </div>
    );
}




function validatePs(event) {
    selectedPrimary = event.target.value;
  console.log("Selected option: " + selectedPrimary);
}

function validateSs(event){
    selectedSecondary = event.target.value;
  console.log("Selected option: " + selectedSecondary);

  if(selectedSecondary === selectedPrimary)
  {
      alert("Skill you entered is already your primary skill, enter another skill!");
  }
  
}

function handleChangeLoc(event) {
    location = event.target.value
    console.log("location: ", location);
}

function renderLocations(locationList) {
    console.log("locationList: ", locationList);
    return locationList.map((loc, index) => {
       //const { location } = loc //destructuring
       
       return (
        <option key={loc.location} value={loc.location}>{loc.location}</option>
       )
    })
 };
 

 function handleChangeQual(event){
     qualification = event.target.value
    // qualification =  dispatch(getQualificationsAction(qualif));
     console.log("qualification: ", qualification);
 }

 function renderQualifications(qualificationList){
    console.log("qualificationList: ", qualificationList);
    return qualificationList.map((qual, index) => {
       //const { qualification } = qual //destructuring
       return (
        <option key={qual.qualification} value={qual.qualification}>{qual.qualification}</option>
       )
    })
 };

 
 function handleChangeDesign(event){
    designation = event.target.value
    // qualification =  dispatch(getQualificationsAction(qualif));
     console.log("designation: ", designation);
 }

 function renderDesignations(designationList){
    console.log("designationList: ", designationList);
    return designationList.map((desig, index) => {
       //const { qualification } = qual //destructuring
       return (
        <option key={desig.designation} value={desig.designation}>{desig.designation}</option>
       )
    })
 };


 function handleChangePs(event){
    primaryskill = event.target.value
    // qualification =  dispatch(getQualificationsAction(qualif));
     console.log("primaryskill: ", primaryskill);
 }

 function renderPrimarySkills(primaryskillsList){
    console.log("primaryskillsList: ", primaryskillsList);
    return primaryskillsList.map((ps, index) => {
       //const { qualification } = qual //destructuring
       return (
        <option key={ps.primaryskill} value={ps.primaryskill}>{ps.primaryskill}</option>
       )
    })
 };

function handleChangeSs(event){
    secondaryskill = event.target.value
    // qualification =  dispatch(getQualificationsAction(qualif));
     console.log("secondaryskill: ", secondaryskill);
}

function renderSecondarySkills(secondaryskillsList){
    console.log("secondaryskillsList: ", secondaryskillsList);
    return secondaryskillsList.map((ss, index) => {
       //const { qualification } = qual //destructuring
       return (
        <option key={ss.secondaryskill} value={ss.secondaryskill}>{ss.secondaryskill}</option>
       )
    })
 };


 function validateCandidateName(event)
 {
     const data = event.target.value;
     console.log("target", data);

     let regex = /^([A-Z][a-zA-Z]{3,})$/;
     let str = data;
     console.log(regex, str);

     if(regex.test(str) && str != "" && str != null)
     {
         console.log("valid");
     }
     else
     {
         alert("Enter valid name, it should only contain characters and cannot be null or blank!");
     }
 }

 function validateExperience(event)
 {
    const data = event.target.value;
    console.log("target", data);

    let regex = /^[0-9]$/;
    let str = data;
    console.log(regex, str);

    if(regex.test(str) && str != "")
    {
        console.log("valid");
    }
    else
    {
        alert("Enter valid Experience, it cannot be negative or blank!");
    }
 }


 function validateNoticePeriod(event) {

    const data = event.target.value;
    console.log("target", data);

    let regex = /^[2-9]$/;
    let str = data;
    console.log(regex, str);

    if(regex.test(str) && str != "")
    {
        console.log("valid");
    }
    else
    {
        alert("Enter valid Notice Period, it cannot be blank and must be atleat 2 months!");
    }
 }




 function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const candidatename = data.get('name');
    console.log("nameeeeeeeee",candidatename);
   // const designation = data.get('design');
   // const qualification = data.get('qualification');
    const experience = data.get('exp');
    const primaryskill = data.get('ps');
    const secondaryskill = data.get('ss');
    const noticeperiod = data.get('np');

    const candObj = new Candidate(candidatename, location, qualification, designation, experience, primaryskill, secondaryskill, noticeperiod);
    console.log('Candidate object', candObj);
    dispatch(addCandidateAction(candObj));
    history.push('/admin');
    alert("Candidate Details added Successfully!");
}

export default AddCandidate;

