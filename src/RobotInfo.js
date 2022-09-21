import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css"

function RobotInfo(){

    const [robotInfo,setRobotInfo] = useState([])
    let {id} = useParams()

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(data =>  { data.map( (item) => { 
                                    if(item.id == id ) {
                                        setRobotInfo(item)
                                        }    
                                })
        }) 
  },[id]);
    return(
        <>
            <div className="main-contain-research">
               
                <div key={robotInfo.id} className='contain-research' >
                        <img src={`https://robohash.org/${robotInfo.id}`} alt='robot profil' className='robot-logo-research'></img>
                        <h3 className='name-contain-research'>{robotInfo.name}</h3> 
                        <p className='email-contain-research'>{robotInfo.username}</p>
                        <p className='email-contain-research'>{robotInfo.email}</p>
                        <p className='email-contain-research'>{robotInfo.phone}</p>
                        <p className='email-contain-research'>{robotInfo.website}</p>
                </div>
            </div>
            
        </>
    )
}

export default RobotInfo;