import uniqid from 'uniqid'

const School = (props) => {
  return (
    <li>
      <b>{props.school}</b>
      <br></br>
      {props.degree}, {props.graduationDisplay}
      <br></br>
      {props.accomplishments}
    </li>
  );
}

const EducationDisplay = (props) => {
  const schools = props.resumeData.schools;
  const schoolList = schools.map((school) => 
    <School 
      key={uniqid()}
      school={school.school}
      degree={school.degree}
      graduationDisplay={school.graduationDisplay}
      accomplishments={school.accomplishments}
    />
  );

  return (
    <div>
      <h2>Education</h2>
      <ul>
        {schoolList}
      </ul>
    </div>
  );
}

export default EducationDisplay;