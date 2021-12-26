import React from "react";

export default function Alert(props) {
    const CapitalizeLetter=(word)=>{
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
  return (
  props.alert &&  <div>
      <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
          <strong>{CapitalizeLetter(props.alert.type)}</strong> : {props.alert.message}
      </div>
    </div>
  );
}
