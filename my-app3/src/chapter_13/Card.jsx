import React from 'react';

const Card = ({title, backgroundColor, children}) => {
  return (
    <div style={{margin:8, padding:8, borderRadius:8, boxShadow:'0 0 4px grey', backgroundColor : backgroundColor || 'white'}}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;
