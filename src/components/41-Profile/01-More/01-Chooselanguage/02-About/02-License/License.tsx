import React from 'react';
import { FaArrowLeft } from "react-icons/fa";

const License: React.FC = () => {
    return (
        <div>
<div className="TContainer1">
        <button className="Tback-button"><FaArrowLeft />Licenses and Registrations</button>
        </div>
        <div> <p className='Term'>Terms of Service </p>
       <p style={{fontSize:"Large",fontStyle:"italic",paddingLeft:"25px"}}>Latest update on march</p>
       <p className='accept'>1. Acceptance of terms</p>
       </div>
        </div>
    );
};

export default License;