import { Routes,Route } from 'react-router-dom';
import './App.css';
import InputSearch from './InputSearch';
import RobotInfo from './RobotInfo';

function App(props ) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InputSearch/>}/>
        <Route path="/profile/:id" element={<RobotInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
