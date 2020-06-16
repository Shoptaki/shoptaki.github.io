import React from 'react';
import "./recognize.css"
import recog1 from "../images/recog1.svg"
import recog2 from "../images/recog2.svg"
import recog3 from "../images/recog3.svg"

function Recognize () {
    return (
       
       <div className = "recog"> 
            
            <div className = "reg-container">
                <div className = "sub-container"></div>
                <div className="recog-title">Recognized By</div>
                <div className ="recog-image-box">
                <div>
                    <img className="recog-image" src={recog1}/>
                </div>
                <div>
                    <img className="recog-image" src={recog2}/>
                </div>
                <div>
                    <img className="recog-image3" src={recog3}/>
                </div>
                </div>
            </div>
            

        </div>
    )
}
export default Recognize
      