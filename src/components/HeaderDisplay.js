const Name = (props) => {
  return (
    <h1>{props.name}</h1>
  ); 
}

const Title = (props) => {
  return (
    <h2>{props.title}</h2>
  );
}

const PhoneNumber = (props) => {
  return (
    <p>{props.phone}</p>
  );
}

const EmailAddress = (props) => {
  return (
    <p>{props.email}</p>
  );
}

const HeaderDisplay = (props) => {
  return (
    <div>
      <Name name={props.resumeData.name}/>
      <Title title={props.resumeData.title}/>
      <PhoneNumber phone={props.resumeData.phone}/>
      <EmailAddress email={props.resumeData.email}/>
    </div>
  );
}

export default HeaderDisplay;