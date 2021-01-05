import React, {useState} from 'react'
import HeaderInput from './components/HeaderInput'
import HeaderDisplay from './components/HeaderDisplay'

function App() {
  const [isInputting, setIsInputting] = useState(true);
  const [headerData, setHeaderData] = useState({
    name: 'Johnny Smith',
    title: 'Software Engineer',
    phone: '202-234-3456',
    email: 'JohnSmith@gmail.com'
  })
  
  function saveEdits(editKey, newValue) {
    console.log(headerData);
    setHeaderData(headerData[editKey] = newValue);
    console.log(headerData);
  } 

  return (
    <div>
      <button onClick={() => setIsInputting(true)}>Input Version</button>
      <button onClick={() => setIsInputting(false)}>Preview Version</button>
      {isInputting
        ? <HeaderInput 
          headerData={headerData}
          saveEdits={saveEdits}/>  
        : <HeaderDisplay 
          headerData={headerData}/>}
    </div>
  );
}

export default App;
