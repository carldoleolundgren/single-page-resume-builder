import React, {useState} from 'react'

import uniqid from 'uniqid'

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import './Experience.css'

const InputForm = (props) => {
  let [numOfResponsibilities, setNumOfResponsibiltiies] = useState(1);
  
  const ResponsibilityInput = () => {
    return (
    <div key={uniqid()}>
      <TextField 
        id='description' 
        placeholder="Enter work responsibility and/or accomplishment"
        multiline
        rows={2}
        style={{width: '650px'}}>
      </TextField>
      <IconButton onClick={() => {
        let num = numOfResponsibilities + 1;
        setNumOfResponsibiltiies(num)
      }}>
        <AddIcon />
      </IconButton>
    </div>
    ); 
  }

  return (
    <div>
      <Input id='company' placeholder='Company Name' style={{width: '325px'}}></Input>
      <br></br>
      <Input id='job' placeholder='Job Title' style={{width: '325px'}}></Input>
      <br></br>
      <Input id='jobLocation' placeholder='Location' style={{width: '325px'}}></Input>
      <br></br>
      {Array.from(Array(numOfResponsibilities)).map(() => <ResponsibilityInput key={uniqid()} />)}
      <br></br>
      <TextField
        id="start"
        label="Start Date"
        type="month"
        defaultValue=""
        InputLabelProps={{shrink: true}}
      />
      <br></br>
      <TextField
        id="end"
        label="End Date"
        type="month"
        defaultValue=""
        InputLabelProps={{shrink: true}}
      />
      <br></br>
      <Button 
        variant='contained' 
        color='primary' 
        size='small'
        onClick={() => props.submitNewJob()}>
          Submit
      </Button>
    </div> 
  );
}

const Job = (props) => {
  const duties = props.description;
  const descriptionList = duties.map((duty) => 
    <li>
      <Typography variant='body2' key={uniqid()}>{duty}</Typography>
    </li>
  );
  
  return (
    <li>
      <Typography variant='body1'><b>{props.job.toUpperCase()}</b></Typography>
      <Typography variant='body1'><i>{props.company}, {props.jobLocation} / {props.start} to {props.endDisplay}</i></Typography>
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
      description={job.description}
      jobLocation={job.jobLocation}
      start={job.start}
      endDisplay={job.endDisplay}
      deleteJob={props.deleteJob}
      jobID={job.jobID}
    />
  );

  return (
    <div>
      <Typography variant='h3'>Work Experience</Typography>
      <InputForm submitNewJob={props.submitNewJob}/>
      <ul>
        {jobsList}
      </ul>
    </div>
  );
}

export default Experience;