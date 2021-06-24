import React, {useState} from 'react'

import uniqid from 'uniqid'

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const InputForm = (props) => {
  let [numOfResponsibilities, setNumOfResponsibiltiies] = useState(1);
  let [responsibilitiesArr, setResponsibilitiesArr] = useState([]);
  
  const ResponsibilityInput = (props) => {
    return (
      <div>
        <TextField 
          className='responsibilities'
          placeholder={`Enter work responsibility and/or accomplishment \n(resume can fit approx. 8 to 12 bullets on average)`}
          multiline
          rows={2}
          style={{width: '650px'}}
          defaultValue={props.value}>
        </TextField>
        <IconButton onClick={() => {
          let num = numOfResponsibilities + 1;
          setNumOfResponsibiltiies(num)
          updateStateArr()
        }}>
          <AddIcon />
        </IconButton>
      </div>
    ); 
  } 

  const ResponsibilityInputsList = () => {
    let renderArr = [];

    for (let i=0; i<numOfResponsibilities; i++) {
      renderArr.push(<ResponsibilityInput key={i} index={i} value={responsibilitiesArr[i]}/>);
    }
    
    return (
      renderArr
    );
  }

  function updateStateArr() {
    let valuesArr = [];

    for (let i=0; i<document.querySelectorAll('.responsibilities').length; i++) {
      valuesArr.push(document.querySelectorAll('.responsibilities')[i].firstChild.firstChild.value);
    }
    
    setResponsibilitiesArr(valuesArr);
  }

  return (
    <div>
      <Input id='company' placeholder='Company Name' style={{width: '325px'}}></Input>
      <br></br>
      <Input id='job' placeholder='Job Title' style={{width: '325px'}}></Input>
      <br></br>
      <Input id='jobLocation' placeholder='Location' style={{width: '325px'}}></Input>
      <br></br>
      <ResponsibilityInputsList />
      <br></br>
      <TextField
        id='start'
        label='Start Date'
        type='month'
        defaultValue=''
        InputLabelProps={{shrink: true}}
      />
      <br></br>
      <TextField
        id='end'
        label='End Date'
        type='month'
        defaultValue=''
        InputLabelProps={{shrink: true}}
      />
      <br></br>
      <Button 
        variant='contained' 
        color='primary' 
        size='small'
        style={{marginTop: '7px'}}
        onClick={() => {
          props.submitNewJob()
          setNumOfResponsibiltiies(1)
          setResponsibilitiesArr([]);
        }}>
          Submit
      </Button>
    </div> 
  );
}

const Job = (props) => {
  const responsibiltiies = props.responsibilities;
  const descriptionList = responsibiltiies.map((responsibility) => 
    <li key={uniqid()}>
      <Typography variant='body2'>{responsibility.description}</Typography>
    </li>
  );
  
  return (
    <li>
      <Typography variant='body1'>{props.company}</Typography>
      <Typography variant='body1'>{props.job}</Typography>
      <Typography variant='body1'>{props.jobLocation}</Typography>
      <Typography variant='body1'>{props.start} to {props.endDisplay}</Typography>
      <ul>
        {descriptionList}
      </ul>
      <IconButton 
        variant='contained' 
        color='secondary' 
        size='small'
        onClick={() => props.deleteJob(props.jobID)}>
          <DeleteIcon />
      </IconButton>
    </li>
  );
}

const Experience = (props) => {
  const jobs = props.resumeData.jobs;
  const jobsList = jobs.map((job) => 
    <Job 
      key={uniqid()}
      company={job.company}
      job={job.job}
      responsibilities={job.responsibilities}
      jobLocation={job.jobLocation}
      start={job.start}
      endDisplay={job.endDisplay}
      deleteJob={props.deleteJob}
      jobID={job.jobID}
    />
  );

  return (
    <div>
      <Typography variant='h4' style={{paddingTop: '50px'}}>Work Experience</Typography>
      <InputForm submitNewJob={props.submitNewJob}/>
      <ul>
        {jobsList}
      </ul>
    </div>
  );
}

export default Experience;