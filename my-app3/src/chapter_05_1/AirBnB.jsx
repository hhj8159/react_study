import React from 'react';
import './AirBnB.css'
import BnBItem from './BnBItem';

const AirBnB = () => {
  const items = [
    {
      src : 'https://placehold.co/200x200',
      color : '#DE3138',
      title : '서울',
      distance : 2
    },
    {
      src : 'https://placehold.co/200x200',
      color : '#B43A51',
      title : '인천',
      distance : 29
    },
    {
      src : 'https://placehold.co/200x200',
      color : '#CC2F4A',
      title : '대구',
      distance : 237
    },
    {
      src : 'https://placehold.co/200x200',
      color : '#BC1A6E',
      title : '대전',
      distance : 140
    }
  ]
  const url = {src : 'https://placehold.co/200x200'}
  const copiedUrl = {src:url.src}
  const src = url.src;
  const copiedUrl2 = {...url}
  const copiedUrl3 = {src}

  return (
    <div className='wrapper'>
      <div>        
        <h3>설레는 다음 여행을 위한 아이디어</h3> 
        <ul className='gallery-list'>
            {/* {itmes.map(item => <BnBItem src={item.src} color={item.color} title={item.title} distance={item.distance} />)} */}
            {items.map((item, idx) => <BnBItem key={idx} {...item} {...url} />)}
            {/* ...url > url =  */}
        </ul>      

      </div>
    </div>  
  );
}

export default AirBnB;
