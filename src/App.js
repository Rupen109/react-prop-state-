import { useState } from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import TwitList from './components/TwitList';

function App() {
  // const name = "dev ed";

  const [name, setName] = useState("dev ed");

  // const handleClick = () => {
  //   setName(" world"); 
  // }
  return (
    <div className="App">
      <div>

         <h1>hello {name} </h1>
        {/* <button onClick={handleClick}>click</button>  */}
        
        <CreateTweet /> 
         <TwitList setName={setName} name={name}/>
      </div>
    </div>
  );
}

export default App;
