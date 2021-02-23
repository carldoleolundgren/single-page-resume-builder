import React, {useState} from 'react'
import uniqid from 'uniqid'

import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  const [isInputting, setIsInputting] = useState(true);
  const [resumeData, setResumeData] = useState({
    name: 'Johnny Smith',
    title: 'Software Engineer',
    phone: '202-234-3456',
    email: 'JohnSmith@gmail.com',
    jobs: [],
    schools: []
  })
  const [editing, setEditing] = useState({
    name: false,
    title: false,
    phone: false,
    email: false,
    jobs: false
  });

  function saveEdits(editKey, newValue) {
    setResumeData({...resumeData, [editKey]: newValue});
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function submitNewJob() {
    //create a copy of resumeData to manipulate
    const resumeDataCopy = JSON.parse(JSON.stringify(resumeData));
    
    //create object literal and add values from input fields
    let newJob = {};
    newJob.company = document.querySelector('#company').value;
    newJob.job = document.querySelector('#job').value;
    newJob.description = document.querySelector('#description').value;
    newJob.jobID = `${newJob.company}${uniqid()}`;

    if (document.querySelector('#start').value !== '') {
      newJob.start = parseFloat(document.querySelector('#start').value.replace('-','.'));
    }

    if (document.querySelector('#end').value !== '') {
      newJob.endSort = parseFloat(document.querySelector('#end').value.replace('-','.'));
    } else newJob.endSort = 3000;
    
    //change date formats to MMM YYYY format
    if ('start' in newJob) {
      let month = newJob.start.toString().split('.')[1];
      month = months[month - 1];
      let year = newJob.start.toString().split('.')[0];
      newJob.start = `${month} ${year}`
    }

    if (newJob.endSort === 3000) {
      newJob.endDisplay = 'Present'
    } else {
      let month = newJob.endSort.toString().split('.')[1];
      month = months[month - 1];
      let year = newJob.endSort.toString().split('.')[0];
      newJob.endDisplay = `${month} ${year}`
    }

    //push newJob object to manipulable resumeDataCopy.jobs array
    resumeDataCopy.jobs.push(newJob);
    
    //sort the jobs by their end date
    resumeDataCopy.jobs.sort((a,b) => {
      return b.endSort - a.endSort;
    });
    
    //set state hook
    setResumeData({...resumeDataCopy});
    
    //clear input fields
    document.querySelector('#company').value = '';
    document.querySelector('#job').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#start').value = '';
    document.querySelector('#end').value = '';
  }
  
  function deleteJob(jobID) {
    let jobsArray = [...resumeData.jobs];
    let index = jobsArray.findIndex(x => x.jobID === jobID)
    console.log(jobID)
    jobsArray.splice(index, 1);

    setResumeData({...resumeData, jobs: jobsArray})
  }

  function submitNewSchool() {
    //create a copy of resumeData to manipulate
    const resumeDataCopy = JSON.parse(JSON.stringify(resumeData));
    
    //create object literal and add values from input fields
    let newSchool = {};
    newSchool.school = document.querySelector('#school').value;
    newSchool.degree = document.querySelector('#degree').value;
    newSchool.accomplishments = document.querySelector('#accomplishments').value;
    newSchool.schoolID = `${newSchool.school}${uniqid()}`

    if (document.querySelector('#graduation').value !== '') {
      newSchool.graduationSort = parseFloat(document.querySelector('#graduation').value.replace('-','.'));
    } else newSchool.graduationSort = 3000;
    
    //change date formats to MMM YYYY format
    if (newSchool.graduationSort === 3000) {
      newSchool.graduationDisplay = 'Present'
    } else {
      let month = newSchool.graduationSort.toString().split('.')[1];
      month = months[month - 1];
      let year = newSchool.graduationSort.toString().split('.')[0];
      newSchool.graduationDisplay = `${month} ${year}`
    }

    //push newJob object to manipulable resumeDataCopy.jobs array
    resumeDataCopy.schools.push(newSchool);
    
    //sort the jobs by their end date
    resumeDataCopy.schools.sort((a,b) => {
      return b.endSort - a.endSort;
    });
    
    //set state hook
    setResumeData({...resumeDataCopy});
    
    //clear input fields
    document.querySelector('#school').value = '';
    document.querySelector('#degree').value = '';
    document.querySelector('#accomplishments').value = '';
    document.querySelector('#graduation').value = '';
  }

  function deleteSchool(schoolID) {
    let schoolsArray = [...resumeData.schools];
    let index = schoolsArray.findIndex(x => x.schoolID === schoolID)
    schoolsArray.splice(index, 1);

    setResumeData({...resumeData, schools: schoolsArray})
  }

  return (
    <div>
      <button onClick={() => setIsInputting(true)}>Input Version</button>
      <button onClick={() => setIsInputting(false)}>Preview Version</button>
        <div>
          <Header 
            isInputting={isInputting}
            resumeData={resumeData}
            editing={editing}
            setEditing={setEditing}
            saveEdits={saveEdits}/> 
          <Experience 
            isInputting={isInputting}
            resumeData={resumeData}
            submitNewJob={submitNewJob}
            deleteJob={deleteJob}/>
          <Education
            isInputting={isInputting}
            resumeData={resumeData}
            submitNewSchool={submitNewSchool}
            deleteSchool={deleteSchool}/>
        </div>
    </div>
  );
}

export default App;
