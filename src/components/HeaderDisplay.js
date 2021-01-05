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
      <Name name={props.headerData.name}/>
      <Title title={props.headerData.title}/>
      <PhoneNumber phone={props.headerData.phone}/>
      <EmailAddress email={props.headerData.email}/>
    </div>
  );
}

export default HeaderDisplay;