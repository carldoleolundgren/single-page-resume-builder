import uniqid from 'uniqid'

const InputForm = (props) => {
  return (
    <div>
      <label>
        School/University/Institution:
        <input id='school'></input>
      </label>
      <br></br>
      <label>
        Degree/Certification:
        <input id='degree'></input>
      </label>
      <br></br>
      <label>
        Graduation Date:
        <input type="month" id='graduation'></input>
      </label>
      <br></br>
      <label>
        Noteworthy Accomplishments:
        <textarea id='accomplishments'></textarea>
      </label>
      <br></br>
      <button onClick={() => props.submitNewSchool()}>Submit</button>
    </div> 
  );
}

const School = (props) => {
  return (
    <li>
      <b>{props.school}</b>
      <br></br>
      {props.degree}, {props.graduationDisplay}
      <br></br>
      {props.accomplishments}
      {props.isInputting
        ? <div>
            <br></br>
            <button onClick={() => props.deleteSchool(props.schoolID)}>Delete</button>
          </div>
        : <div></div>
      }
      
    </li>
  );
}

const Education = (props) => {
  const schools = props.resumeData.schools;
  const schoolList = schools.map((school) => 
    <School 
      isInputting={props.isInputting}
      key={uniqid()}
      school={school.school}
      degree={school.degree}
      graduationDisplay={school.graduationDisplay}
      accomplishments={school.accomplishments}
      deleteSchool={props.deleteSchool}
      schoolID={school.schoolID}
    />
  );

  return (
    <div>
      {props.isInputting || props.resumeData.schools.length > 0
        ? <h2>Education</h2>
        : <div></div>
      }
      {props.isInputting
        ? <InputForm 
            submitNewSchool={props.submitNewSchool}/>
        : <div></div>   
      }
      <ul>
        {schoolList}
      </ul>
    </div>
  );
}

export default Education;