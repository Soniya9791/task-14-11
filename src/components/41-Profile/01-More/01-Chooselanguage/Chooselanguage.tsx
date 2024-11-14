import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { FaArrowLeft, FaFonticonsFi } from "react-icons/fa";
import "./Chooselanguage.css"
import english from "../../../../assests/images/Place/English.png"
import tamil from "../../../../assests/images/Place/Tamil.png"
import telugu from "../../../../assests/images/Place/Telugu.png"
import kerala from "../../../../assests/images/Place/Kerala.png"
import hindi from "../../../../assests/images/Place/Hindi.png"




const Chooselanguage: React.FC = () => {

  const options = [
    {  name: "English", image: english },
    {  name: "தமிழ்", image: tamil },
    {  name: "हिंदी", image: hindi },
    { name: "తెలుగు", image: kerala },
    { name: "മലയാളം", image: telugu },
  

  ];

  return (
    <IonPage>
    <IonContent>
      <div className="CLMainContainer">
        <div className="CLContainer1">
        <button className="CLback-button"><FaArrowLeft /> Select Language</button>
        </div>


        <div className="CLContainer2">
        {options.map((option,index)=>(
    <div className="CLoption-item">
      <div className="CLcontent1">
      <span style={{fontSize:"Larger",padding:"10px"}}>{option.name}</span>
      <img src={option.image} alt={`${option.name} icon`} className="language-icon" />
      
      </div>
      
    </div>
  ))}
   
 

        </div>

        <div style={{height:"10vh"}}><div className="button-con">  <button className="But">Confirm</button>
        </div></div>
        
       
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Chooselanguage;


