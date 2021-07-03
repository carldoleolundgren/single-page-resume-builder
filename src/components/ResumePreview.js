import uniqid from 'uniqid'
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const Address = (props) => {
  let addressElement;

  if (props.address && props.address.includes(',')) {
    let arrayLength = props.address.split(',').length;
    
    let street = props.address.split(',')[0]
    if (arrayLength === 4) street = `${street}, ${props.address.split(',')[1]}`

    let cityStateZip = `${props.address.split(',')[arrayLength-2]}, ${props.address.split(',')[arrayLength-1]}`;
    addressElement = 
      <Typography variant='body2' align='right' style={styles.contactData}>
        {street}
        <br></br>
        {cityStateZip}
      </Typography>
    
  } else {
    let splitStr = props.address.split(' ')
    let str = '';
    let firstLine;
    let secondLine;

    for (let i=0; i < splitStr.length; i++) {
      let newStr = str += `${splitStr[i]} `

      if (newStr.length < 34 && str.length < 34) {
        firstLine = newStr;
      } else {
        secondLine = newStr.slice(-newStr.length+firstLine.length);
      }
    }
  
    addressElement =
      <Typography variant='body2' align='right'  style={{...styles.contactData, right: '150px'}}>
        {firstLine}
        <br></br>
        {secondLine}
      </Typography>
  } 

  return (
    addressElement
  );
}

const School = (props) => {
  return (
    <div>
      <li style={styles.resumeBottomLeftLi}>
        <Typography variant='body1' style={{fontWeight: 'bold'}}>{props.school.toUpperCase()}</Typography>
        <Typography variant='body1' style={{fontWeight: 'bold', fontStyle: 'italic'}}>{props.schoolLocation}</Typography>
        <Typography variant='body1'>{props.degree}</Typography>
        <Typography variant='body1'>{props.graduationDisplay}</Typography>
        <Typography variant='body2'>{props.accomplishments}</Typography>      
      </li>
    </div>
  );
}

const Education = (props) => {
  const schools = props.schools;
  const schoolList = schools.map((school) => 
    <School 
      key={uniqid()}
      school={school.school}
      schoolLocation={school.schoolLocation}
      degree={school.degree}
      graduationDisplay={school.graduationDisplay}
      accomplishments={school.accomplishments}
      schoolID={school.schoolID}
    />
  );

  return (
    <div>
      <ul style={{paddingLeft: '0'}}>
        {schoolList}
      </ul>
    </div>
  );
}

const Skill = (props) => {
  return (
    <li style={{...styles.resumeBottomLeftLi, marginBottom: '.1in'}}>
      <Typography variant='body1'>{props.skill}</Typography>
    </li>
  );
}

const Skills = (props) => {
  const skills = props.skills;
  const skillsList = skills.map((skill) => 
    <Skill 
      key={uniqid()}
      skill={skill.skill}
      skillID={skill.skillID}
    />
  );

  return (
    <div>
      <ul style={{paddingLeft: '0'}}>
        {skillsList}
      </ul>
    </div>
  );
}

const Responsibility = (props) => {
  return (
    <li>
      <Typography variant='body2'>{props.description}</Typography>
    </li>
  );
}

const Job = (props) => {
  const responsibilities = props.responsibilities;
  const responsibilitiesList = responsibilities.map((responsibility) => 
    <Responsibility 
      key={uniqid()}
      description={responsibility.description}/>
  );;


  return (
    <li style={styles.jobs}>
      <Typography variant='body1' style={{fontWeight: 'bold'}}>{props.job.toUpperCase()}</Typography>
      <Typography variant='body1'>{props.company}, {props.jobLocation} / {props.start} to {props.endDisplay}</Typography>
      <ul>
       {responsibilitiesList}
      </ul>
    </li>
  );
}

const Experience = (props) => {
  const jobs = props.jobs;
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
      responsibilities={job.responsibilities}
    />
  );

  return (
    <div>
      <ul style={{paddingLeft: '0'}}>
        {jobsList}
      </ul>
    </div>
  );
}

const styles = {
  resumeContainer: {
    height: '11in',
    width: '8.5in',
    position: 'absolute',
    left: '50%',
    marginLeft: '-4.25in',
    right: '50%',
    marginRight: '-4.25in',
    outline: '2px solid rgb(195,157,57)',
    outlineOffset: '-2px',
    zIndex: '-1',
    overflow: 'hidden',
    backgroundColor: 'white',
    top: '120px'
  },
  resumeBottomLeftHeaders: {
    color: 'rgb(195,157,57)',
    textAlign: 'center',
    letterSpacing: '0.25em',
    marginTop: '.5in'
  },
  resumeTop: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '2.2in',
    width: '100%',
    zIndex: '0',
  },
  resumeHeader: {
    position: 'absolute',
    right: '0',
    height: '2.2in',
    width: '5.6in',
    borderBottom: '2px solid rgb(195,157,57)',
  },
  nameBox: {
    position: 'relative',
    right: '0',
    height: '1.4in',
    marginTop: '0',
    width: '4.8in',
    margin: '.45in .35in',
    backgroundColor: 'rgb(80,80,80)',
  },
  title: {
    marginTop: '-.42in'
  },
  resumeTopLeft: {
    height: '2.2in',
    width: '2.9in',
    top: '0',
    left: '0',
    justifyContent: 'spaceBetween',
    flexDirection: 'column',
    borderBottom: '2px solid rgb(195,157,57)',
    borderRight: '2px solid rgb(195,157,57)',
    backgroundColor: 'rgb(80,80,80)',
    zIndex: '1'
  },
  contactIcon: {
    float: 'right',
    marginRight: '.15in',
    color: 'white',
    zIndex: '1'
  },
  contactData: {
    float: 'left', 
    marginRight: '.1in',
    zIndex: '1'
  },
  resumeBottomLeft: {
    position: 'absolute',
    left: '0',
    top: '2.2in',
    height: '8.8in',
    width: '2.9in',
    borderRight: '2px solid rgb(195,157,57)',
    backgroundColor: 'rgb(80,80,80)',
    zIndex: '-1'
  },
  resumeBottomLeftLi: {
    color: 'white',
    listStyleType: 'none',
    textAlign: 'right',
    margin: '0 .25in .3in .1in',
  },
  resumeMainBody: {
    position: 'absolute',
    top: '2.2in',
    height: '8.8in',
    left: '2.9in',
    width: '5.1in',
    margin: '0in .3in',
  },
  jobs: {
    listStyleType: 'none',
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
}

const ResumePreview = (props) => {
  return (
    <div style={{...styles.resumeContainer, top: `${props.resumeTop}px`}}>
        <div style={styles.resumeHeader}>
          <div style={styles.nameBox}>
            <Typography 
              variant='h3' 
              align='center'
              style={{color: 'white'}} 
              gutterBottom>
              {props.resumeData.personalData.firstName}
            </Typography>
            <Typography 
              variant='h3' 
              align='center'
              style={{color: 'rgb(195,157,57)'}}>
              {props.resumeData.personalData.lastName}
            </Typography>
          </div>
          <Typography 
            variant='h5' 
            align='center'
            color='textSecondary'
            style={styles.title}>
            {props.resumeData.personalData.title}
          </Typography>
        </div>
        
        <div style={styles.resumeTopLeft}>
          <br></br>
          <div style={styles.contactIcon}>
            <Typography variant='body2' style={styles.contactData}>{props.resumeData.personalData.email}</Typography>
            <EmailIcon fontSize='small'></EmailIcon>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div style={styles.contactIcon}>
            <Typography variant='body2' style={styles.contactData}>{props.resumeData.personalData.phone}</Typography>
            <PhoneIcon fontSize='small'></PhoneIcon>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div style={styles.contactIcon}>
            <Address address={props.resumeData.personalData.address} />
            <LocationOnIcon fontSize='small'></LocationOnIcon>
          </div>
          <br></br>
          <br></br>
          <br></br>
          {props.resumeData.personalData.github &&
            <div style={styles.contactIcon}>
              <Typography variant='body2' style={styles.contactData}>
                <Link 
                  href={`https://${props.resumeData.personalData.github}`} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  style={styles.link}>
                    {props.resumeData.personalData.github}
                </Link>
                </Typography>
              <GitHubIcon fontSize='small'></GitHubIcon>
            </div>
          }
        </div>

        <div style={styles.resumeBottomLeft}>
          {props.resumeData.schools.length > 0 
            ? <div>
                <Typography variant='h5' style={styles.resumeBottomLeftHeaders}>
                  EDUCATION
                </Typography>
                <Education schools={props.resumeData.schools}/>
              </div>
            : <div></div>
          }
          <Typography variant='h5' style={styles.resumeBottomLeftHeaders}>
            SKILLS
          </Typography>
          <Skills skills={props.resumeData.skills}/>
        </div>
        
        <div style={styles.resumeMainBody}>
            <Typography variant='h5' style={{...styles.resumeBottomLeftHeaders, color: 'black'}} >
              CAREER OBJECTIVE
            </Typography>
            <Typography variant='body1' style={{marginTop: '.20in'}}>
              {props.resumeData.careerObjective}
            </Typography>
            <Typography variant='h5' style={{...styles.resumeBottomLeftHeaders, color: 'black'}} >
              EXPERIENCE
            </Typography>
            <Experience jobs={props.resumeData.jobs} />
        </div>
      </div>
  );
}

export default ResumePreview;
