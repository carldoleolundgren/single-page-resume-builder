import React, {useState} from 'react'
import uniqid from 'uniqid'

import Button from '@material-ui/core/Button';

import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import ResumePreview from './components/ResumePreview'

function App() {
  const [isInputting, setIsInputting] = useState(true);
  const [resumeData, setResumeData] = useState({
    personalData: {
      firstName: '',
      lastName: '',
      title: '',
      phone: '',
      email: '',
      address: '',
      github: '',
    },
    careerObjective: '',
    jobs: [],
    schools: [],
    skills: []
  })
  const [editing, setEditing] = useState({
    firstName: false,
    lastName: false,
    title: false,
    phone: false,
    email: false,
    address: false,
    github: false,
    careerObjective: false,
  });

  function saveEdits(editKey, newValue) {
    setResumeData({...resumeData, [editKey]: newValue});
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function submitPersonalData(dataKey) {
    //create a copy of resumeData to manipulate
    const resumeDataCopy = JSON.parse(JSON.stringify(resumeData));

    //assign values directly to resumeDataCopy
    resumeDataCopy.firstName = document.querySelector('#firstName').value;
    resumeDataCopy.lastName = document.querySelector('#lastName').value;
    resumeDataCopy.title = document.querySelector('#title').value;
    resumeDataCopy.phone = document.querySelector('#phone').value;
    resumeDataCopy.email = document.querySelector('#email').value;
    resumeDataCopy.address = document.querySelector('#address').value;
    resumeDataCopy.github = document.querySelector('#github').value;

    setResumeData({...resumeDataCopy});
  }

  function submitNewJob() {
    //create a copy of resumeData to manipulate
    const resumeDataCopy = JSON.parse(JSON.stringify(resumeData));
    
    //create object literal and add values from input fields
    let newJob = {};
    newJob.company = document.querySelector('#company').value;
    newJob.job = document.querySelector('#job').value;
    newJob.jobLocation = document.querySelector('#jobLocation').value;
    newJob.jobID = `${newJob.company}${uniqid()}`;

    if (document.querySelector('#start').value !== '') {
      newJob.start = parseFloat(document.querySelector('#start').value.replace('-','.'));
    }

    if (document.querySelector('#end').value !== '') {
      newJob.endSort = parseFloat(document.querySelector('#end').value.replace('-','.'));
    } else newJob.endSort = 3000;

    //create array of duties
    newJob.responsibilities = [];
    let numberOfResponsibilties = document.querySelectorAll('.responsibilities').length;

    for (let i=0; i < numberOfResponsibilties; i ++) {
      let newResponsibility = {};
      newResponsibility.index = i;
      newResponsibility.description = document.querySelectorAll('.responsibilities')[i].children[0].children[0].value
      if (newResponsibility.description) {
        newJob.responsibilities.push(newResponsibility);
      }
    }

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
    console.log(resumeData);
    
    //clear input fields
    document.querySelector('#company').value = '';
    document.querySelector('#job').value = '';
    document.querySelectorAll('.responsibilities').value = '';
    document.querySelector('#jobLocation').value = '';
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
    newSchool.schoolLocation = document.querySelector('#schoolLocation').value;
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
      return b.graduationSort - a.graduationSort;
    });
    
    //set state hook
    setResumeData({...resumeDataCopy});
    
    //clear input fields
    document.querySelector('#school').value = '';
    document.querySelector('#degree').value = '';
    document.querySelector('#schoolLocation').value = '';
    document.querySelector('#accomplishments').value = '';
    document.querySelector('#graduation').value = '';
  }

  function deleteSchool(schoolID) {
    let schoolsArray = [...resumeData.schools];
    let index = schoolsArray.findIndex(x => x.schoolID === schoolID)
    schoolsArray.splice(index, 1);

    setResumeData({...resumeData, schools: schoolsArray})
  }

  function submitNewSkill() {
    //create a copy of resumeData to manipulate
    const resumeDataCopy = JSON.parse(JSON.stringify(resumeData));

    //create object literal and add values from input fields
    let newSkill = {};
    newSkill.skill = document.querySelector('#skill').value;
    newSkill.skillID = `${newSkill.skill}${uniqid()}`

    //push newJob object to manipulable resumeDataCopy.jobs array
    resumeDataCopy.skills.push(newSkill);

    //set state hook
    setResumeData({...resumeDataCopy});

    //clear input fields
    document.querySelector('#skill').value = '';
  }

  function deleteSkill(skillID) {
    let skillsArray = [...resumeData.skills];
    let index = skillsArray.findIndex(x => x.skillID === skillID)
    skillsArray.splice(index, 1);

    setResumeData({...resumeData, skills: skillsArray})
  }
  
  const styles = {
    centeredDiv: {
      margin: 'auto',
      width: '50%',
      display: 'flex',
    },
  }

  return (
    <div>
      {/* Top buttons */}
      <div style={styles.centeredDiv}>
        <div style={styles.centeredDiv}>
          <Button        
            variant="contained"
            color={isInputting ? "default" : "primary"}
            size="small"
            onClick={() => setIsInputting(true)}>
              Input Version
          </Button>
        </div>
        <div style={styles.centeredDiv}>
          <Button 
            variant="contained"
            color={!isInputting ? "default" : "primary"}
            size="small"
            onClick={() => setIsInputting(false)}>
              Preview Version
          </Button>
        </div>
      </div>
      
      {/* Preview Version */}
      {!isInputting
        ? <ResumePreview 
            resumeData={resumeData}/>
        : <div></div>
      }
      {/* Input Version */}
      {isInputting 
        ? <div>
            <Header 
              resumeData={resumeData}
              editing={editing}
              submitPersonalData={submitPersonalData}
              setEditing={setEditing}
              saveEdits={saveEdits}/> 
            <Experience 
              isInputting={isInputting}
              resumeData={resumeData}
              submitNewJob={submitNewJob}
              deleteJob={deleteJob}/>
            <Education
              resumeData={resumeData}
              submitNewSchool={submitNewSchool}
              deleteSchool={deleteSchool}/>
            <Skills
              resumeData={resumeData}
              submitNewSkill={submitNewSkill}
              deleteSkill={deleteSkill}/>
          </div>
        : <div></div>
      }
    </div>

  );
}

export default App;
