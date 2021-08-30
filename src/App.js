import logo from './logo.svg';
import './App.css';

function App() {
  const peoples = ['Dhr', 'Foz', 'Tak', 'Far', 'Uzz', 'Tom', 'kan']
  return (
    <div className="App">


      <header className="App-header">

        <Profile name='Dhrubo' age='27' address='taltola'></Profile>
        <Profile name='Fozu' age='72' address='notunbag'></Profile>
        <Profile name='Taki' age='37' address='c-block'></Profile>
        <Profile name='Farabe' age='1000' address='bashabo'></Profile>
        <Profile name='Uzzal' age='5' address='c-block'></Profile>
        <Profile name='Tomal' age='57' address='b-block'></Profile>
        <Profile name={peoples[6]} age='17' address='sipaibag'></Profile>

        {
          peoples.map(person => <Profile name={person}></Profile>)
        }

      </header>
    </div>
  );

  function Profile(props) {
    // console.log(props)
    const profileStyle = {
      width: "550px",
      height: 'auto',
      border: '4px solid gold',
      margin: '15px',
      borderRadius: '8px'

    }

    return (
      <div style={profileStyle}>
        <h1>Name : {props.name}</h1>
        <h2>Age : {props.age}</h2>
        <h3>Address : {props.address}</h3>
      </div>
    )
  }

}

export default App;
