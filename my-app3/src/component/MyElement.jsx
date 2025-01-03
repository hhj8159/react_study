import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : 'React',
  lastName : 'Guy'
}

const comment = "인사말";

const el = <h1 title={comment}>
hello {formatName(user)}
</h1>

const MyElement = () => {
  return el;
}

export default MyElement;
