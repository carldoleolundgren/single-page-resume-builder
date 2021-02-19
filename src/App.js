import React, {useState} from 'react'
import HeaderInput from './components/HeaderInput'
import HeaderDisplay from './components/HeaderDisplay'
import ExperienceInput from './components/ExperienceInput'
import ExperienceDisplay from './components/ExperienceDisplay'

function App() {
  const [isInputting, setIsInputting] = useState(true);
  const [resumeData, setResumeData] = useState({
    name: 'Johnny Smith',
    title: 'Software Engineer',
    phone: '202-234-3456',
    email: 'JohnSmith@gmail.com',
    jobs: []
  })
  const [editing, setEditing] = useState({
    name: false,
    title: false,
    phone: false,
    email: false,
    jobs: false
  });

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
      newJob.start = '';
      newJob.start = `${month} ${year}`
    }

    if (newJob.endSort === 3000) {
      newJob.endDisplay = 'Present'
    } else {
      let formattedEndDate = newJob.endSort.toString().split('.').reverse();
      formattedEndDate[0] = `${months[formattedEndDate[0] - 1]} `;
      formattedEndDate.join('')
      newJob.endDisplay = formattedEndDate;
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

  function saveEdits(editKey, newValue) {
    setResumeData({...resumeData, [editKey]: newValue});
  }
  
  function deleteJob(jobID) {
    let jobsArray = [...resumeData.jobs];
    let index = jobsArray.findIndex(x => x.jobID === jobID)
    jobsArray.splice(index, 1);

    setResumeData({...resumeData, jobs: jobsArray})
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
