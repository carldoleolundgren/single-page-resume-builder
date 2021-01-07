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
        <input id='start'></input>
      </label>
      <br></br>
      <label>
        End Date:
        <input id='end'></input>
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
      {props.start} to {props.end}
    </li>
  );
}

const ExperienceInput = (props) => {
  /* function saveNewData(editKey, newValue) {
    props.setEditing({...props.editing, [editKey]: false});
    props.saveEdits(editKey, newValue);
  } */
  
  const jobs = props.resumeData.jobs;
  const jobsList = jobs.map((job) => 
    <Job 
      key={uniqid()}
      company={job.company}
      job={job.job}
      description={job.description}
      start={job.start}
      end={job.end}
    />
  );

  return (
    <div>
      <h2>Work Experience</h2>
      <InputForm 
        submitNewJob={props.submitNewJob}/>
      <ul>
        {jobsList}
      </ul>
    </div>
  );
}

export default ExperienceInput;