
import { useEffect, useState } from 'react';
import './App.css';
import RobotInfo from './RobotInfo';

export default function InputSearch( props){
  const[data,setData] = useState([]);
  const[researchRobot,setResearchRobot]= useState("");
  const[robotDetails, setRobotDetails] = useState(false);
  const[robotData, setRobotData] = useState([]);

  useEffect (()=>{
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => {
        setData(data);
  });
},[]);

  const researchData = (e) => {
    setResearchRobot(e.target.value)
  }
  function robotInfo(robot) {
    setRobotDetails(prevrobotDetails => !prevrobotDetails);
    setRobotData(robot);
  }
 
  return(
    <>
    
        {
          robotDetails ? (
            <>
            <button className="btn-return" onClick={() => robotInfo()}>Retour</button>
            <RobotInfo robotData={robotData}/>
            </>
          )
          :
          (
            <>
            <h1>MES AMIS ROBOTS</h1>
            <input value={researchRobot}  type="text" placeholder="Rechercher par un nom" onChange={researchData}  />
    
            <div className='main-contain'>

                {
                
                data.filter((robot) => 
                  researchRobot.length < 3 ?  robot :
                  (robot.name.toLowerCase().includes(researchRobot.toLowerCase())
                )).map(robot => (
                  <div key={robot.id} className='contain' onClick={() => robotInfo(robot)}>
                      <img src={`https://robohash.org/${robot.id}`} alt='robot profil' className='robot-logo'></img>
                      <h3 className='name-contain'>{robot.name}</h3> 
                      <p className='email-contain'>{robot.email}</p>
                  </div>))
                
                }
               
            </div>
            </>
          )
        }
      
    </>
  )
}