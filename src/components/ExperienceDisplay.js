import uniqid from 'uniqid'

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

const ExperienceDisplay = (props) => {
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
      <ul>
        {jobsList}
      </ul>
    </div>
  );
}

export default ExperienceDisplay;