import React from 'react';

const Avatar = (props) => {
  return (
    <div>
      <img className="avatar" 
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
    </div>
  );
}

export default Avatar;
