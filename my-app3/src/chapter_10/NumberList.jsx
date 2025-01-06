import React from 'react';

const NumberList = (props) => {
  const {numbers} = props;
  const listItem = numbers.map(number => <li>{number}</li>)

  return (
    <ul>
      {listItem}
    </ul>
  );
}

export default NumberList;
