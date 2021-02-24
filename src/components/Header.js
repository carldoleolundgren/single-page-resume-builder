import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import './Header.css'

const Name = (props) => {
  return (
    <div>
      {!props.editing.name 
        ? <div className='parent-inline-block'>
            <Typography 
              variant='h2' 
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
              className='name-input'
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
              className='title-input' 
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
              className='small-input'
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
              className='small-input'
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

const Header = (props) => {
  function saveNewData(editKey, newValue) {
    props.setEditing({...props.editing, [editKey]: false});
    props.saveEdits(editKey, newValue);
  }
  
  return (
    <div>
      <Name 
        isInputting={props.isInputting}
        name={props.resumeData.name} 
        editing={props.editing}
        setEditing={props.setEditing}
        saveNewData={saveNewData}/>
      <Title 
        isInputting={props.isInputting}
        title={props.resumeData.title}
        editing={props.editing}
        setEditing={props.setEditing}
        saveNewData={saveNewData}/>
      <PhoneNumber 
        isInputting={props.isInputting}
        phone={props.resumeData.phone}
        editing={props.editing}
        setEditing={props.setEditing}
        saveNewData={saveNewData}/>
      <EmailAddress 
        isInputting={props.isInputting}
        email={props.resumeData.email}
        editing={props.editing}
        setEditing={props.setEditing}
        saveNewData={saveNewData}/>
    </div>
  );
}

export default Header;