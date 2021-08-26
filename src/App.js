import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">


      <header className="App-header">
        <Profile name='Dhrubo' age='27'></Profile>
        <Profile name='Montasir' age='72'></Profile>
        <Profile name='Azad' age='37'></Profile>
         
      </header>
    </div>
  );

  function Profile(props) {
  const profileStyle = {
    width:"550px",
    height:'200px',
    border:'4px solid gold',
    margin:'15px',
    borderRadius:'8px'
      
  }

    return(
     <div style={profileStyle}>
       <h1>Name : {props.name}</h1>
       <h2>Age : {props.age}</h2>
     </div>
    )
  }

}

export default App;
