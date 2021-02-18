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
    jobs: [
      {
        company: 'Google',
        job: 'Junior Software Engineer',
        description: 'Ran the entire company.',
        start: '2015-01',
        end: '2015.12',
        jobID: 'testJobID'
      }
    ]
  })
  const [editing, setEditing] = useState({
    name: false,
    title: false,
    phone: false,
    email: false,
    jobs: false
  });

  function submitNewJob() {
    const resumeDataCopy = JSON.parse(JSON.stringify(resumeData));
    
    let newJob = {};
    newJob.company = document.querySelector('#company').value;
    newJob.job = document.querySelector('#job').value;
    newJob.description = document.querySelector('#description').value;
    newJob.start = document.querySelector('#start').value;
    if (document.querySelector('#end').value !== '') {
      newJob.end = parseFloat(document.querySelector('#end').value.replace('-','.'));
    } else newJob.end = 3000;
    
    resumeDataCopy.jobs.push(newJob);
    
    resumeDataCopy.jobs.sort((a,b) => {
      return b.end - a.end;
    });
    
    if (newJob.end === 3000) newJob.end = 'Present'
    
    setResumeData({...resumeDataCopy});
    
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
