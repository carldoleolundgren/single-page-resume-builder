import uniqid from 'uniqid'

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';

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
        type='month'
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
        style={{marginTop: '7px'}}
        onClick={() => props.submitNewSchool()}>
          Submit
          </Button>
    </div> 
  );
}

const School = (props) => {
  return (
    <li >
      <div style={{display: 'flex'}}>
        <Typography variant='body1' style={{lineHeight: '30px'}}>{props.school}</Typography>
        <IconButton 
          variant='contained' 
          color='secondary' 
          size='small'
          style={{padding: '0px 3px'}}
          onClick={() => props.deleteSchool(props.schoolID)}>
            <DeleteIcon />
        </IconButton>
      </div>
      <Typography variant='body1'>{props.schoolLocation}</Typography>
      <Typography variant='body1'>{props.degree}, {props.graduationDisplay}</Typography>
      <Typography variant='body2'>{props.accomplishments}</Typography>
      <br></br>
    </li>
  );
}

const Education = (props) => {
  const schools = props.resumeData.schools;
  const schoolList = schools.map((school) => 
    <School 
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
      <CardHeader title='Education'/>
      <InputForm submitNewSchool={props.submitNewSchool}/>
      <ul>
        {schoolList}
      </ul>
    </div>
  );
}

export default Education;