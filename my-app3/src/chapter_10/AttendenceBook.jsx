import React from 'react';

const students = [
  {id:1, name:'Inje'},
  {id:2, name:'Steve'},
  {id:3, name:'Bill'},
  {id:4, name:'Jeff'},
]

const AttendenceBook = (props) => {
  return (
    <div>
      {students.map(std => <li key={std.id}>{std.name}</li>)}
    </div>
  );
}

export default AttendenceBook;
