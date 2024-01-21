import './App.css';
import React ,{useState} from 'react';

import Basic from './Basic form';
import Advanced from './Advanced form';


function App() {

const [view , setView] = useState('basic')

return (
<div className="container">
  <div className="login">
        <nav>
          <h1
          onClick={()=>{setView('basic')}}
          style={{color:view === 'basic'?'red':''}}
          >
            Basic
          </h1>
          <h1
          onClick={()=>{setView('advanced')}}
          style={{color:view === 'advanced'?'red':''}}
          >
            Advanced
          </h1>
        </nav>
        <div>
          {view === 'basic'?<Basic/> :<Advanced/>}
        </div>
  </div>
  </div>




)


}

export default App;

