import uniqid from 'uniqid'
import Typography from '@material-ui/core/Typography'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from '@material-ui/core/Link'

const Address = (props) => {
  //initiate variable to later hold react element for render through return statement
  let addressElement

  //format address inputs, assumes standard U.S. format
  if (props.address && props.address.includes(',')) {
    let arrayLength = props.address.split(',').length

    let street = props.address.split(',')[0]

    //if the address contains something like apt or unit number
    if (arrayLength === 4) street = `${street}, ${props.address.split(',')[1]}`

    let cityStateZip = `${props.address.split(',')[arrayLength - 2]}, ${
      props.address.split(',')[arrayLength - 1]
    }`

    addressElement = (
      <Typography variant="body2" align="right" style={styles.contactData}>
        {street}
        <br></br>
        {cityStateZip}
      </Typography>
    )
  } else {
    //if the address doesn't have typical U.S. formatting with commas, split it into lines of certain length
    let splitStr = props.address.split(' ')
    let str = ''
    let firstLine
    let secondLine

    for (let i = 0; i < splitStr.length; i++) {
      let newStr = (str += `${splitStr[i]} `)

      if (newStr.length < 34 && str.length < 34) {
        firstLine = newStr
      } else {
        secondLine = newStr.slice(-newStr.length + firstLine.length)
      }
    }

    addressElement = (
      <Typography
        variant="body2"
        align="right"
        style={{ ...styles.contactData, right: '150px' }}
      >
        {firstLine}
        <br></br>
        {secondLine}
      </Typography>
    )
  }

  return addressElement
}

// code organization throughout for sections with multiple potential entries:
// one element describing render of one list item, second element rendering array of list items
const School = (props) => {
  return (
    <div>
      <li style={styles.educationAndSkillsLi}>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
          {props.school.toUpperCase()}
        </Typography>
        <Typography
          variant="body1"
          style={{ fontWeight: 'bold', fontStyle: 'italic' }}
        >
          {props.schoolLocation}
        </Typography>
        <Typography variant="body1">{props.degree}</Typography>
        <Typography variant="body1">{props.graduationDisplay}</Typography>
        <Typography variant="body2">{props.accomplishments}</Typography>
      </li>
    </div>
  )
}

const Education = (props) => {
  const schools = props.schools
  const schoolList = schools.map((school) => (
    <School
      key={uniqid()}
      school={school.school}
      schoolLocation={school.schoolLocation}
      degree={school.degree}
      graduationDisplay={school.graduationDisplay}
      accomplishments={school.accomplishments}
      schoolID={school.schoolID}
    />
  ))

  return (
    <div>
      <ul style={{ paddingLeft: '0' }}>{schoolList}</ul>
    </div>
  )
}

const Skill = (props) => {
  return (
    <li style={{ ...styles.educationAndSkillsLi, marginBottom: '.1in' }}>
      <Typography variant="body1">{props.skill}</Typography>
    </li>
  )
}

const Skills = (props) => {
  const skills = props.skills
  const skillsList = skills.map((skill) => (
    <Skill key={uniqid()} skill={skill.skill} skillID={skill.skillID} />
  ))

  return (
    <div>
      <ul style={{ paddingLeft: '0' }}>{skillsList}</ul>
    </div>
  )
}

const Responsibility = (props) => {
  return (
    <li>
      <Typography variant="body2">{props.description}</Typography>
    </li>
  )
}

const Job = (props) => {
  const responsibilities = props.responsibilities
  const responsibilitiesList = responsibilities.map((responsibility) => (
    <Responsibility key={uniqid()} description={responsibility.description} />
  ))

  return (
    <li style={styles.jobs}>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        {props.job.toUpperCase()}
      </Typography>
      <Typography variant="body1">
        {props.company}, {props.jobLocation} / {props.start} to{' '}
        {props.endDisplay}
      </Typography>
      <ul>{responsibilitiesList}</ul>
    </li>
  )
}

const Experience = (props) => {
  const jobs = props.jobs
  const jobsList = jobs.map((job) => (
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
  ))

  return (
    <div>
      <ul style={{ paddingLeft: '0' }}>{jobsList}</ul>
    </div>
  )
}

const customGoldColor = 'rgb(195,157,57)'

const styles = {
  resumeContainer: {
    height: '11in',
    width: '8.5in',
    zIndex: '-1',
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: '0px auto',
    outline: `.03in solid ${customGoldColor}`,
    outlineOffset: '-.03in',
  },
  resumeHeader: {
    height: '2.2in',
    borderBottom: `.03in solid ${customGoldColor}`,
    display: 'inline-block',
    verticalAlign: 'top',
  },
  contactDataSection: {
    height: '2.2in',
    width: '2.9in',
    justifyContent: 'spaceBetween',
    flexDirection: 'column',
    borderBottom: `.03in solid ${customGoldColor}`,
    borderRight: `.03in solid ${customGoldColor}`,
    backgroundColor: 'rgb(80,80,80)',
    zIndex: '1',
  },
  clearFloats: {
    clear: 'both',
  },
  contactData: {
    float: 'right',
    marginRight: '.1in',
    marginBottom: '.2in',
    paddingLeft: 'min(5px)',
    wordWrap: 'break-word',
    maxWidth: '29ch',
    color: 'white',
    zIndex: '1',
  },
  contactIcon: {
    float: 'right',
    marginRight: '.15in',
    color: 'white',
    zIndex: '1',
  },
  nameBox: {
    height: '1.4in',
    width: '4.8in',
    margin: '0.45in auto 0 auto',
    backgroundColor: 'rgb(80,80,80)',
  },
  resumeBody: {
    display: 'inline-block',
    verticalAlign: 'top',
  },
  resumeBodyHeaders: {
    textAlign: 'center',
    letterSpacing: '0.25em',
    marginTop: '.3in',
  },
  educationAndSkills: {
    height: '8.77in',
    width: '2.9in',
    borderRight: `.03in solid ${customGoldColor}`,
    backgroundColor: 'rgb(80,80,80)',
    zIndex: '-1',
  },
  educationAndSkillsLi: {
    color: 'white',
    listStyleType: 'none',
    textAlign: 'right',
    margin: '0 .25in .3in .1in',
  },
  objectiveAndExperience: {
    width: '5.17in',
    margin: '0in .2in',
  },
  jobs: {
    listStyleType: 'none',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}

const ResumePreview = (props) => {
  return (
    <div style={{ ...styles.resumeContainer, top: `${props.resumeTop}px` }}>
      <div>
        {' '}
        {/* Top portion of resume - name, title, and contact info */}
        <div style={{ ...styles.resumeHeader, ...styles.contactDataSection }}>
          {' '}
          {/* Contact data section */}
          <div style={styles.clearFloats}>
            {' '}
            {/* email */}
            <EmailIcon
              fontSize="small"
              style={{ ...styles.contactIcon, marginTop: '.25in' }}
            />
            <Typography
              variant="body2"
              style={{ ...styles.contactData, marginTop: '.25in' }}
            >
              {props.resumeData.personalData.email}
            </Typography>
          </div>
          <div style={styles.clearFloats}>
            {' '}
            {/* phone number */}
            <PhoneIcon fontSize="small" style={styles.contactIcon} />
            <Typography variant="body2" style={styles.contactData}>
              {props.resumeData.personalData.phone}
            </Typography>
          </div>
          <div style={styles.clearFloats}>
            {' '}
            {/* address */}
            <LocationOnIcon fontSize="small" style={styles.contactIcon} />
            <Address address={props.resumeData.personalData.address} />
          </div>
          {props.resumeData.personalData.github && (
            <div style={styles.clearFloats}>
              {' '}
              {/* github, if it was entered */}
              <GitHubIcon fontSize="small" style={styles.contactIcon} />
              <Typography variant="body2" style={styles.contactData}>
                <Link
                  href={`https://${props.resumeData.personalData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {props.resumeData.personalData.github}
                </Link>
              </Typography>
            </div>
          )}
        </div>
        <div style={{ ...styles.resumeHeader, width: '5.57in' }}>
          {' '}
          {/* Name and title */}
          <div style={styles.nameBox}>
            {' '}
            {/* Box containing first and last names */}
            <Typography /* first name */
              variant="h3"
              align="center"
              style={{ color: 'white' }}
              gutterBottom
            >
              {props.resumeData.personalData.firstName}
            </Typography>
            <Typography /* last name */
              variant="h3"
              align="center"
              style={{ color: `${customGoldColor}` }}
            >
              {props.resumeData.personalData.lastName}
            </Typography>
          </div>
          <Typography /* title */
            variant="h5"
            align="center"
            color="textSecondary"
          >
            {props.resumeData.personalData.title}
          </Typography>
        </div>
      </div>
      <div>
        {' '}
        {/* Bottom portion of resume - left: skills, education; right: career objective, experience */}
        <div style={{ ...styles.resumeBody, ...styles.educationAndSkills }}>
          {' '}
          {/* education and skills */}
          {props.resumeData.schools.length > 0 && (
            <div>
              {' '}
              {/* education */}
              <Typography
                variant="h5"
                style={{
                  ...styles.resumeBodyHeaders,
                  color: `${customGoldColor}`,
                }}
              >
                EDUCATION
              </Typography>
              <Education schools={props.resumeData.schools} />
            </div>
          )}
          <Typography /* skills */
            variant="h5"
            style={{ ...styles.resumeBodyHeaders, color: `${customGoldColor}` }}
          >
            SKILLS
          </Typography>
          <Skills skills={props.resumeData.skills} />
        </div>
        <div style={{ ...styles.resumeBody, ...styles.objectiveAndExperience }}>
          {' '}
          {/* career objective and experience */}
          <div>
            {' '}
            {/* career objective */}
            <Typography
              variant="h5"
              style={{ ...styles.resumeBodyHeaders, color: 'black' }}
            >
              CAREER OBJECTIVE
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: '.20in', display: 'inline-block' }}
            >
              {props.resumeData.careerObjective}
            </Typography>
          </div>
          <div>
            {' '}
            {/* experience */}
            <Typography
              variant="h5"
              style={{ ...styles.resumeBodyHeaders, color: 'black' }}
            >
              EXPERIENCE
            </Typography>
            <Experience jobs={props.resumeData.jobs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePreview
