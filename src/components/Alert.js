import React from "react";

export default function Alert(Props) {
    const firstUpperCase = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: "50px"}}>
    {Props.alert && <div className={`alert alert-${Props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{firstUpperCase(Props.alert.type)}</strong>: {Props.alert.msg}
    </div>}
    </div>
  );
}
