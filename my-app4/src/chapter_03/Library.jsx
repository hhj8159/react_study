import React from 'react';
import Book from './Book';
import Mybook from './Mybook';

const result = [
  {
    name : "처음 만난 파이썬",
    numOfPage : 300
  },
  {
    name : "처음 만난 AWS",
    numOfPage : 400
  },
  {
    name : "처음 만난 리액트",
    numOfPage : 500
  }
];

// result의 타입 array
// array.map()

const Library = () => {
  return (
    <>
      {result.filter(el => el.numOfPage != 400).map(el => <Book name={el.name} numOfPage={el.numOfPage} />)}
      <Mybook name="스프링부트" numOfPage="700" />
    </>
  );
}

export default Library;
