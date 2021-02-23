import uniqid from 'uniqid'

const InputForm = (props) => {
  return (
    <div>
      <label>
        Skill:
        <input id='skill'></input>
      </label>
      <button onClick={() => props.submitNewSkill()}>Submit</button>
    </div> 
  );
}

const Skill = (props) => {
  return (
    <li>
      <b>{props.skill}</b>
      <br></br>
      {props.isInputting
        ? <div>
            <br></br>
            <button onClick={() => props.deleteSkill(props.skillID)}>Delete</button>
          </div>
        : <div></div>
      }
      
    </li>
  );
}

const Skills = (props) => {
  const skills = props.resumeData.skills;
  const skillsList = skills.map((skill) => 
    <Skill 
      isInputting={props.isInputting}
      key={uniqid()}
      skill={skill.skill}
      deleteSkill={props.deleteSkill}
      skillID={skill.skillID}
    />
  );

  return (
    <div>
      {props.isInputting || props.resumeData.skills.length > 0
        ? <h2>Skills</h2>
        : <div></div>
      }
      {props.isInputting
        ? <InputForm 
            submitNewSkill={props.submitNewSkill}/>
        : <div></div>   
      }
      <ul>
        {skillsList}
      </ul>
    </div>
  );
}

export default Skills;