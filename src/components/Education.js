import uniqid from 'uniqid'

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const InputForm = (props) => {
  return (
    <div>
      <Input id='school' placeholder='School/University/Institution' style={{width: '325px'}}></Input>
      <br></br>
      <Input id='degree' placeholder='Degree/Certification' style={{width: '325px'}}></Input>
      <br></br>
      <Input id='schoolLocation' placeholder='Location' style={{width: '325px'}}></Input>
      <br></br>
      <TextField 
        type="month" 
        id='graduation' 
        label='Graduation Date' 
        style={{width: '325px'}}
        InputLabelProps={{shrink: true}}
        ></TextField>
      <br></br>
      <TextField 
        id='accomplishments' 
        multiline
        rows={3}
        placeholder='Noteworthy Accomplishments' 
        style={{width: '325px'}}>  
      </TextField>
      <br></br>
      <Button 
        variant='contained' 
        color='primary' 
        size='small'
        onClick={() => props.submitNewSchool()}>Submit</Button>
    </div> 
  );
}

const School = (props) => {
  return (
    <li>
      <Typography variant='body1'><b>{props.school.toUpperCase()}</b></Typography>
      <br></br>
      <Typography variant='body1'><i><b>{props.schoolLocation}</b></i></Typography>
      <br></br>
      <Typography variant='body1'>{props.degree}, {props.graduationDisplay}</Typography>
      <br></br>
      <Typography variant='body2'>{props.accomplishments}</Typography>
      {props.isInputting
        ? <div>
            <br></br>
            <IconButton 
              variant='contained' 
              color='secondary' 
              size='small'
              onClick={() => props.deleteSchool(props.schoolID)}>
                <DeleteIcon />
            </IconButton>
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
      schoolLocation={school.schoolLocation}
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
        ? <Typography variant='h3'>Education</Typography>
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