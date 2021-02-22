import React, {useState} from 'react'
import HeaderInput from './components/HeaderInput'
import HeaderDisplay from './components/HeaderDisplay'
import ExperienceInput from './components/ExperienceInput'
import ExperienceDisplay from './components/ExperienceDisplay'
import EducationInput from './components/EducationInput'

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

    if (document.querySelector('#start').value !== '') {
      newJob.start = parseFloat(document.querySelector('#start').value.replace('-','.'));
    }

    if (document.querySelector('#end').value !== '') {
      newJob.endSort = parseFloat(document.querySelector('#end').value.replace('-','.'));
    } else newJob.endSort = 3000;
    
    //change date formats to MMM YYYY format
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

    if (document.querySelector('#graduation').value !== '') {
      newSchool.graduationSort = parseFloat(document.querySelector('#graduation').value.replace('-','.'));
      console.log(newSchool.graduationSort)
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

  return (
    <div>
      <button onClick={() => setIsInputting(true)}>Input Version</button>
      <button onClick={() => setIsInputting(false)}>Preview Version</button>
      {isInputting
        ? <div>
            <HeaderInput 
              resumeData={resumeData}
              editing={editing}
              setEditing={setEditing}
              saveEdits={saveEdits}/> 
            <ExperienceInput 
              resumeData={resumeData}
              submitNewJob={submitNewJob}
              deleteJob={deleteJob}/>
            <EducationInput
              resumeData={resumeData}
              submitNewSchool={submitNewSchool}/>
          </div>
        : <div>
            <HeaderDisplay 
              resumeData={resumeData}/>
            <ExperienceDisplay
              resumeData={resumeData}/>
          </div>
      }
    </div>
  );
}

export default App;
