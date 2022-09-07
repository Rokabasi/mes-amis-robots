
import { useEffect, useState } from 'react'
import './App.css'

export default function InputSearch(){
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
    
      <input value={researchRobot}  type="text" placeholder="Rechercher par un nom" onChange={researchData}  />
    
            <div className='main-contain'>

                { data && data.filter((robot) => {
                  return robot.name.toLowerCase().includes(researchRobot.toLowerCase())
                }).map(robot => (
                    <div key={robot.id} className='contain'>
                        <img src={`https://robohash.org/${robot.id}`} alt='robot profil' className='robot-logo'></img>
                        <h3 className='name-contain'>{robot.name}</h3> 
                        <p className='email-contain'>{robot.email}</p>
                    </div>
                ))}
            </div>
      
    </>
  )
}