import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyElement from './component/MyElement';
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import Welcome from './chapter_05/Welcome';
import Comment from './chapter_05/Comment';
import CommentList from './chapter_05_1/CommentList';
import AirBnB from './chapter_05_1/AirBnB';
import NotificationList from './chapter_06/NotificationList';
import Counter from './chapter_07/Counter';
import MyArray from './chapter_07/MyArray';
import MyArray2 from './chapter_07/MyArray2';

const root = ReactDOM.createRoot(document.getElementById('root'));


// setInterval(() => {
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <MyElement /> */}
      {/* <Library /> */}
      {/* <Clock /> */}
      {/* <Welcome name="javaman"/> */}
      {/* <Comment author={{name:'reacttest', avatarUrl:'https://placehold.co/60x40'}} text="샘플 텍스트" date={new Date()} /> */}
      {/* <CommentList /> */}
      {/* <AirBnB /> */}
      {/* <NotificationList /> */}
      {/* <Counter /> */}
      {/* <MyArray /> */}
      <MyArray2 />
    </React.StrictMode>
  );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
