import React, {useState} from 'react'
import HeaderInput from './components/HeaderInput'
import HeaderDisplay from './components/HeaderDisplay'

function App() {
  const [isInputting, setIsInputting] = useState(true);
  const [resumeData, setResumeData] = useState({
    name: 'Johnny Smith',
    title: 'Software Engineer',
    phone: '202-234-3456',
    email: 'JohnSmith@gmail.com'
  })
  const [editing, setEditing] = useState({
    name: false,
    title: false,
    phone: false,
    email: false,
  });

  
  function saveEdits(editKey, newValue) {
    setResumeData({...resumeData, [editKey]: newValue});
  } 

  return (
    <div>
      <button onClick={() => setIsInputting(true)}>Input Version</button>
      <button onClick={() => setIsInputting(false)}>Preview Version</button>
      {isInputting
        ? <HeaderInput 
          resumeData={resumeData}
          editing={editing}
          setEditing={setEditing}
          saveEdits={saveEdits}/>  
        : <HeaderDisplay 
          resumeData={resumeData}/>}
    </div>
  );
}

export default App;
