import uniqid from 'uniqid'

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import './Experience.css'

const InputForm = (props) => {
  return (
    <div>
      <Input id='company' placeholder='Company Name' style={{width: '325px'}}></Input>
      <br></br>
      <Input id='job' placeholder='Job Title' style={{width: '325px'}}></Input>
      <br></br>
      <Input id='jobLocation' placeholder='Location' style={{width: '325px'}}></Input>
      <br></br>
      <TextField 
        id='description' 
        placeholder="Description of Duties"
        multiline
        rows={4}
        style={{width: '325px'}}>
      </TextField>
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
  return (
    <li>
      <Typography variant='body1'><b>{props.job.toUpperCase()}</b></Typography>
      <br></br>
      <Typography variant='body1'><i>{props.company}, {props.jobLocation} / {props.start} to {props.endDisplay}</i></Typography>
      <br></br>
      <Typography variant='body2'>{props.description}</Typography>
      {props.isInputting
        ? <div>
            <br></br>
            <IconButton 
              variant='contained' 
              color='secondary' 
              size='small'
              onClick={() => props.deleteJob(props.jobID)}>
                <DeleteIcon />
            </IconButton>
          </div>
        : <div></div>
      }
    </li>
  );
}

const Experience = (props) => {
  const jobs = props.resumeData.jobs;
  const jobsList = jobs.map((job) => 
    <Job 
      isInputting={props.isInputting}
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
      {props.isInputting 
        ? <InputForm 
            submitNewJob={props.submitNewJob}/>
        : <div></div>
      }
      <ul>
        {jobsList}
      </ul>
    </div>
  );
}

export default Experience;