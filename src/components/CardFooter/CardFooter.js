import React from 'react';
import "./CardFooter.css";

function CardFooter({children}) {
  return (
    <div className="footer">
      {children}
    </div>
  )
}

export default CardFooter
