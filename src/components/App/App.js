import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import JavaScript from '../JavaScript/JavaScript';
function App() {
  return (
    <div className="App">
      <h1>Code Challenges</h1>
      <Router>        
       <JavaScript/>
      </Router>
    </div>
  );
}


export default App;
