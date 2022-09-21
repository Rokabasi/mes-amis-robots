
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import RobotInfo from './RobotInfo';

export default function InputSearch( ){
  const[data,setData] = useState([]);
  const[researchRobot,setResearchRobot]= useState("");
 
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
  
 
  return(
    <>    
            <h1>MES AMIS ROBOTS</h1>
            <input   type="text" placeholder="Rechercher par un nom" onChange={researchData}  />
            <div className='main-contain'>
                {
                data.filter((robot) => 
                  researchRobot.length < 3 ?  robot :
                  (robot.name.toLowerCase().includes(researchRobot.toLowerCase())
                )).map(robot => (
                    <div key={robot.id} className='contain' >
                      <Link to={`/profile/${robot.id}`} className="link">
                        <img src={`https://robohash.org/${robot.id}`} alt='robot profil' className='robot-logo'></img>
                        <h3 className='name-contain'>{robot.name}</h3> 
                        <p className='email-contain'>{robot.email}</p>
                      </Link>
                    </div>
                  )) 
                }              
            </div>
    </>
  )
}