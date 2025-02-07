// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Inputs({name, types, placeholder, onClick, onChange, disabled}){

  return(

    <input 
      className="Input" 
      type={types} 
      name={name} 
      placeholder={placeholder} 
      onClick={onClick} 
      onChange={onChange} 
      disabled={disabled}
    />
    
  );
}


function App() {

  const [attempts, setAttempts] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  // const [loggedin, setAsLoggedin] = useState(false);
  const hardUsername = 'krystian';
  const hardassword = 'genson';

  function handleClicks(){
    const usernameMatch = (username === hardUsername);
    const passwordMatch = (password === hardassword)
    const withinAttempts = (attempts < 2);

    const passedWithinThreshold = usernameMatch && passwordMatch && withinAttempts+1;

    if(passedWithinThreshold){
      setAttempts(0);
      setDisabled(false);
      // console.log("PASSED");
      return 0;
    };

    if(withinAttempts){
      setAttempts(attempts+1);      
    }else{
      setAttempts(attempts+1); 
      setDisabled(true);
    }
    // console.log({passedWithinThreshold, withinAttempts, attempts});
    
  }

  return (

      <fieldset className='form'>
        <h1>REGISTER FORM</h1>
        <i>Attempts used: {attempts}/3</i>
        <Inputs 
          types="text" 
          name="fname" 
          placeholder="First name" 
          value={username} 
          onChange={(e)=> setUsername(e.target.value)}
        />
        <Inputs 
          types="password" 
          name="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}
        />
        <Inputs types="submit" name="submit" onClick={()=>handleClicks()} disabled={isDisabled}/>
    </fieldset>

  );
}

export default App;
