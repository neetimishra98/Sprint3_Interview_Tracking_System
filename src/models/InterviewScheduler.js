class InterviewScheduler {
    constructor(candidateid,panelid,location,date,techrating,finalstatus,start_time,end_time) {
     this.location=location;
     this.date=date;
     this.start_time=start_time;
     this.end_time=end_time;
     this.techrating=techrating;
     this.finalstatus=finalstatus;
     this.candidate = { "candID": candidateid};
     this.panel={"panID" : panelid};
    }
  }
  
  export default InterviewScheduler;
  