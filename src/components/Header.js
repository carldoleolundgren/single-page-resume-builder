import uniqid from 'uniqid'

import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

/* const Name = (props) => {
  const nameInput = {
    height: 'fitContent',
    width: 'fit-content',
    fontSize: '3.75rem',
    fontWeight: '300',
    lineHeight: '1.2',
    letterSpacing: '-0.00833em',
    margin: '21.440px 0px'
  }

  return (
    <div>
      {!props.editing.name 
        ? <div className='parent-inline-block'>
            <Typography 
              variant='h3' 
              className='parent-inline-block'>
                {props.name}
            </Typography>
            {props.isInputting 
              ? <IconButton 
                  className='child-inline'
                  aria-label='edit' 
                  onClick={() => props.setEditing({...props.editing, name: true})}>
                  <EditIcon />
                </IconButton>
              : <div></div>
            }
          </div> 
        : <div>
            <Input 
              id='name'
              style={nameInput}
              defaultValue={props.name} 
              placeholder='Name'></Input>
            <IconButton onClick={() => props.saveNewData('name', document.querySelector('#name').value)}>
              <SaveIcon />
            </IconButton>
          </div>
      }
    </div>
  ); 
}

const Title = (props) => {  
  const titleInput = {
    height: 'fitContent',
    width: 'fitContent',
    fontSize: '2.125rem',
    fontWeight: '400',
    lineHeight: '1.235',
    letterSpacing: '0.00735em',
    margin: '21.440px 0px'
  }
  
  return (
    <div>
      {!props.editing.title 
        ? <div className='parent-inline-block'>
            <Typography 
              variant='h4'
              className='parent-inline-block'>
                {props.title}
            </Typography> 
            {props.isInputting 
              ? <IconButton 
                  className='child-inline'
                  aria-label='edit' 
                  size='small'
                  onClick={() => props.setEditing({...props.editing, title: true})}>
                  <EditIcon />
                </IconButton>
            : <div></div>
          }
          </div>
        : <div>
            <Input 
              id='title'
              style={titleInput}
              defaultValue={props.title} 
              placeholder='Job Title'></Input>
            <IconButton onClick={() => props.saveNewData('title', document.querySelector('#title').value)}>
              <SaveIcon />
            </IconButton>
          </div>
      }
    </div>
  ); 
}

const smallInput = {
  height: 'fitContent',
  width: '325px',
  fontSize: '1.25rem',
  fontWeight: '500',
  lineHeight: '1.6',
  letterSpacing: '0.0075em',
  margin: '21.440px 0px'
}

const PhoneNumber = (props) => {  
  return (
    <div>
      {!props.editing.phone 
        ? <div className='parent-inline-block'>
            <Typography 
              variant='h6'
              className='parent-inline-block'>
                {props.phone}
            </Typography>
            {props.isInputting 
              ? <IconButton 
                  className='child-inline'
                  aria-label='edit' 
                  size='small'
                  onClick={() => props.setEditing({...props.editing, phone: true})}>
                  <EditIcon />
                </IconButton>
              : <div></div>
            }
          </div> 
        : <div>
            <Input 
              id='phone' 
              style={smallInput}
              defaultValue={props.phone} 
              placeholder='Phone Number'></Input>
            <IconButton onClick={() => props.saveNewData('phone', document.querySelector('#phone').value)}>
              <SaveIcon />
            </IconButton>
          </div> 
      }
    </div>
  );
}

const EmailAddress = (props) => {  
  return (
    <div>
      {!props.editing.email 
        ? <div className='parent-inline-block'>
            <Typography 
              variant='h6'
              className='parent-inline-block'>
                {props.email}
            </Typography> 
            {props.isInputting 
              ? <IconButton 
                  className='child-inline'
                  aria-label='edit' 
                  size='small'
                  onClick={() => props.setEditing({...props.editing, email: true})}>
                  <EditIcon />
                </IconButton>
            : <div></div>
          }
          </div>
        : <div>
            <Input 
              id='email' 
              style={smallInput}
              defaultValue={props.email} 
              placeholder='Email'></Input> 
            <IconButton onClick={() => props.saveNewData('email', document.querySelector('#email').value)}>
              <SaveIcon />
            </IconButton>
          </div> 
      }
    </div>
  );
}

const Address = (props) => {
  return (
    <div>
      {!props.editing.address 
        ? <div className='parent-inline-block'>
            <Typography 
              variant='h6'
              className='parent-inline-block'>
                {props.address}
            </Typography> 
            {props.isInputting 
              ? <IconButton 
                  className='child-inline'
                  aria-label='edit' 
                  size='small'
                  onClick={() => props.setEditing({...props.editing, address: true})}>
                  <EditIcon />
                </IconButton>
            : <div></div>
          }
          </div>
        : <div>
            <Input 
              id='address' 
              style={smallInput}
              defaultValue={props.address} 
              placeholder='Address'></Input> 
            <IconButton onClick={() => props.saveNewData('address', document.querySelector('#address').value)}>
              <SaveIcon />
            </IconButton>
          </div> 
      }
    </div>
  );
}

const GitHub = (props) => {
  return (
    <div>
      {!props.editing.github 
        ? <div className='parent-inline-block'>
            <Typography 
              variant='h6'
              className='parent-inline-block'>
                {props.github}
            </Typography> 
            {props.isInputting 
              ? <IconButton 
                  className='child-inline'
                  aria-label='edit' 
                  size='small'
                  onClick={() => props.setEditing({...props.editing, github: true})}>
                  <EditIcon />
                </IconButton>
            : <div></div>
          }
          </div>
        : <div>
            <Input 
              id='github' 
              style={smallInput}
              defaultValue={props.github} 
              placeholder='GitHub Profile Link'></Input> 
            <IconButton onClick={() => props.saveNewData('github', document.querySelector('#github').value)}>
              <SaveIcon />
            </IconButton>
          </div> 
      }
    </div>
  );
} */

const styles = {
  editIcons: {
    padding: '0px 3px',
    marginTop: '-10px'
  },
  personalData: {
    display: "inline-block",
    lineHeight: '30px',
  }
}

const Header = (props) => {
  function saveNewData(editKey, newValue) {
    props.setEditing({...props.editing, [editKey]: false});
    props.saveEdits(editKey, newValue);
  }

  const personalData = props.resumeData.personalData;
  const personalDataList = [];
  const placeholders = {
    firstName: 'First Name',
    lastName: 'Last Name',
    title: 'Job Title',
    phone: 'Phone Number',
    email: 'Email Address',
    address: 'Physical Address',
    github: 'Link to Github Profile (leave out "https://")'
  }

  for (const property in personalData) {
    personalDataList.push(
      <div key={uniqid()}>
        {!props.resumeData[property] || props.editing[property]
          ? <div>
              <Input 
                id={property} 
                placeholder={placeholders[property]} 
                defaultValue={props.resumeData[property] ? props.resumeData[property] : ''}
                style={{width: '325px'}}/>
              <IconButton 
                aria-label='save' 
                size='small'
                style={styles.editIcons}
                onClick={() => saveNewData(property, document.querySelector(`#${property}`).value)}>
                  <SaveIcon />
              </IconButton>
            </div>
          : <div>
              <Typography variant='body1' style={styles.personalData}>
                {props.resumeData[property]}
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
      <Typography variant='h4'>Personal Data</Typography>
      {personalDataList}
    </div>
  );
}

export default Header;