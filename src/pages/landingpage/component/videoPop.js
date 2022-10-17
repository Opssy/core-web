import React from "react";
import '../../../styles/landingpage.scss'
const Popup = props => {
  return (
    <div className="landing__why--wrapper_popup">
      <div className="landing__why--wrapper_popup-box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;