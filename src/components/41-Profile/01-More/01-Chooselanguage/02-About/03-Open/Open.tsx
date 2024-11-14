import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import "./Open.css"

const Open: React.FC = () => {
    return (
        <div>
<div className="TContainer1">
        <button className="Tback-button"><FaArrowLeft /> Open Source Libraries</button>
        </div>
        <div className='TContainer2'>
            <p style={{fontWeight: "600",textDecoration: "underline"}}>Okhttp</p>
            <p style={{border:"1px solid black",padding:"10px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio tempore repudiandae recusandae, aspernatur veritatis voluptas at neque, laborum, temporibus consequatur. Consequatur corporis ad, fugiat repellendus explicabo necessitatibus quis quas.</p>
        </div>
        </div>
    );
};

export default Open;