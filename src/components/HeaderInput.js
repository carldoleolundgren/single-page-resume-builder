import { useState } from "react";

const Name = (props) => {
  const [editing, setEditing] = useState(false);

  function saveNewName(editKey, newValue) {
    setEditing(false);
    props.saveEdits(editKey, newValue);
  }

  return (
    <div>
      {!editing 
        ? <h1>{props.name}</h1> 
        : <label>
            Name:
            <input id='name' defaultValue={props.name}></input>
          </label> 
      }
      {!editing
        ? <button onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => 
          saveNewName('name', document.querySelector('#name').value)}>
            Save
          </button>
      }
    </div>
  ); 
}

const Title = (props) => {
  const [editing, setEditing] = useState(false);
  
  return (
    <div>
      {!editing 
        ? <h2>{props.title}</h2> 
        : <label>
            Job Title:
            <input defaultValue={props.title}></input>
          </label> 
      }
      {!editing
        ? <button onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => setEditing(false)}>Save</button>
      }
    </div>
  ); 
}

const PhoneNumber = (props) => {
  const [editing, setEditing] = useState(false);
  
  return (
    <div>
      {!editing 
        ? <p>{props.phone}</p> 
        : <label>
            Phone Number:
            <input defaultValue={props.phone}></input>
          </label> 
      }
      {!editing
        ? <button onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => setEditing(false)}>Save</button>
      }
    </div>
  );
}

const EmailAddress = (props) => {
  const [editing, setEditing] = useState(false);
  
  return (
    <div>
      {!editing 
        ? <p>{props.email}</p> 
        : <label>
            Email address:
            <input defaultValue={props.email}></input>
          </label> 
      }
      {!editing
        ? <button onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => setEditing(false)}>Save</button>
      }
    </div>
  );
}

const HeaderInput = (props) => {
  return (
    <div>
      <Name name={props.headerData.name} saveEdits={props.saveEdits}/>
      <Title title={props.headerData.title}/>
      <PhoneNumber phone={props.headerData.phone}/>
      <EmailAddress email={props.headerData.email}/>
    </div>
  );
}

export default HeaderInput;