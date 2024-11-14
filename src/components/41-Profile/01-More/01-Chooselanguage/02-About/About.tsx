import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import "./About.css";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from 'react-router';

const About: React.FC = () => {

    const history = useHistory();
    return (
        <div>
            <div className="CLContainer1">
        <button className="CLback-button"><FaArrowLeft /> About</button>
        </div>
        

            <div className='AContainer'>
               <div onClick={()=>{history.push("/terms")}} className='Para' style={{borderBottom:"1px solid rgb(209 203 203)"}}> <p>Terms of Service <IoIosArrowForward /> </p>
               </div>
               <div className='Para' style={{borderBottom:"1px solid rgb(209 203 203)"}}>
                <p>App version <br />v18.6.1 Live</p>
              </div> <div onClick={()=>{history.push("/open")}} style={{borderBottom:"1px solid rgb(209 203 203)"}} className='Para'> <p>Open Source Libraries <IoIosArrowForward /></p></div>
              <div onClick={()=>{history.push("/license")}} className='Para' style={{borderBottom:"1px solid rgb(209 203 203)"}}>  <p>Licenses and Registrations <IoIosArrowForward /></p></div>
            </div>
        </div>
    );
};

export default About;