import uniqid from 'uniqid'

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const InputForm = (props) => {
  return (
    <div>
      <Input id='skill' placeholder='Skill'></Input>
      <Button 
        variant='contained' 
        color='primary' 
        size='small'
        onClick={() => props.submitNewSkill()}>
          Submit
      </Button>
    </div> 
  );
}

const Skill = (props) => {
  return (
    <li>
      <Typography variant='body1'>{props.skill}</Typography>
      {props.isInputting
        ? <IconButton 
            variant='contained' 
            color='secondary' 
            size='small'
            onClick={() => props.deleteSkill(props.skillID)}>
              <DeleteIcon />
          </IconButton>
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
        ? <Typography variant='h3'>Skills</Typography>
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