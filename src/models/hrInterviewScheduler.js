class hrInterviewScheduler {
    constructor(candidateid,panelid,location,date,hrrating,finalstatus,start_time,end_time) {
     this.location=location;
     this.date=date;
     this.start_time=start_time;
     this.end_time=end_time;
     this.hrrating=hrrating;
     this.finalstatus=finalstatus;
     this.candidate = { "candID": candidateid};
     this.panel={"panID" : panelid};
    }
  }
  
  export default hrInterviewScheduler;