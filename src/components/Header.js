import uniqid from 'uniqid'

import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const styles = {
  editIcons: {
    padding: '0px 3px',
  },
  personalData: {
    display: "inline-block",
    lineHeight: '30px',
    width: '325px'
  }
}

const Header = (props) => {
  function saveNewData(editKey, newValue) {
    props.setEditing({...props.editing, [editKey]: false});
    props.savePersonalData(editKey, newValue);
  }

  const personalData = props.resumeData.personalData;
  const personalDataList = [];
  const placeholders = {
    firstName: 'First Name',
    lastName: 'Last Name',
    title: 'Job Title',
    phone: 'Phone Number',
    email: 'Email Address',
    address: 'Physical U.S. Address',
    github: 'Link to Github Profile (leave out "https://")',
    careerObjective: 'Describe your career objective in three to four sentences'
  }

  for (const property in personalData) {
    personalDataList.push(
      <div key={uniqid()}>
        {!props.resumeData.personalData[property] || props.editing[property]
          ? <div>
              <Input 
                id={property} 
                placeholder={placeholders[property]} 
                defaultValue={props.resumeData.personalData[property] ? props.resumeData.personalData[property] : ''}
                style={{width: '325px'}}/>
              <IconButton 
                aria-label='save' 
                size='small'
                style={styles.editIcons}
                onClick={() => {
                  saveNewData(property, document.querySelector(`#${property}`).value);
                }}>
                  <SaveIcon />
              </IconButton>
            </div>
          : <div>
              <Typography variant='body1' style={styles.personalData}>
                {props.resumeData.personalData[property]}
              </Typography>
              <IconButton 
                aria-label='edit' 
                size='small'
                style={styles.editIcons}
                onClick={() => props.setEditing({...props.editing, [property]: true})}>
                  <EditIcon />
              </IconButton>
            </div>
        }
      </div>
    );
  }

  return (
    <div>
      <Typography variant='h4' style={{paddingTop: '50px'}}>Personal Data</Typography>
      {personalDataList}
      {!props.resumeData.careerObjective || props.editing.careerObjective 
        ? <div> 
            <TextField 
              id='careerObjective' 
              placeholder={placeholders.careerObjective}
              defaultValue={props.resumeData.careerObjective ? props.resumeData.careerObjective : ''}
              multiline
              rows={4}
              style={{width: '650px'}} />
            <IconButton 
              aria-label='save' 
              size='small'
              style={styles.editIcons}
              onClick={() => {
                console.log(personalData) //////////////////////////
                saveNewData('careerObjective', document.querySelector(`#careerObjective`).value)}}>
                <SaveIcon />
            </IconButton>
          </div>
        : <div>
            <Typography variant='body1' style={{...styles.personalData, width: '650px', lineHeight: '23px'}}>
              {props.resumeData.careerObjective}
            </Typography>
            <IconButton 
              aria-label='edit' 
              size='small'
              style={styles.editIcons}
              onClick={() => props.setEditing({...props.editing, careerObjective: true})}>
                <EditIcon />
            </IconButton>
          </div>
      }    
    </div>
  );
}

export default Header;