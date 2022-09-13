import React from "react";
import "./App.css"
function RobotInfo(props){
    return(
        <>
       
            <div className="main-contain-research">
               
                <div key={props.robotData.id} className='contain-research' >
                        <img src={`https://robohash.org/${props.robotData.id}`} alt='robot profil' className='robot-logo-research'></img>
                        <h3 className='name-contain-research'>{props.robotData.name}</h3> 
                        <p className='email-contain-research'>{props.robotData.email}</p>
                        <p className='email-contain-research'>{props.robotData.phone}</p>
                        <p className='email-contain-research'>{props.robotData.username}</p>
                        <p className='email-contain-research'>{props.robotData.website}</p>
                </div>
            </div>
        </>
    )
}

export default RobotInfo;