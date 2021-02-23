import uniqid from 'uniqid'

const InputForm = (props) => {
  return (
    <div>
      <label>
        Company Name:
        <input id='company'></input>
      </label>
      <br></br>
      <label>
        Job Title:
        <input id='job'></input>
      </label>
      <br></br>
      <label>
        Description of Duties:
        <textarea id='description'></textarea>
      </label>
      <br></br>
      <label>
        Start Date:
        <input type="month" id='start'></input>
      </label>
      <br></br>
      <label>
        End Date:
        <input type="month" id='end'></input>
      </label>
      <br></br>
      <button onClick={() => props.submitNewJob()}>Submit</button>
    </div> 
  );
}

const Job = (props) => {
  return (
    <li>
      <b>{props.company}</b>
      <br></br>
      {props.job}
      <br></br>
      {props.description}
      <br></br>
      {props.start} to {props.endDisplay}
      {props.isInputting
        ? <div>
            <br></br>
            <button onClick={() => props.deleteJob(props.jobID)}>Delete</button>
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
      start={job.start}
      endDisplay={job.endDisplay}
      deleteJob={props.deleteJob}
      jobID={job.jobID}
    />
  );

  return (
    <div>
      <h2>Work Experience</h2>
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