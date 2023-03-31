import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);
  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (resFetch.status !== 200) return '망했어요';
    const data = await resFetch.json();
    console.log(data);
    setDataArr((cur) => data);
    //중괄호가 없는 것은 return값이 붙어 있다.
    //return  한 후 data만 나옴
  }
  //   useEffect(async())
  useEffect(() => {
    fetchData();
  }, []);
  //중괄호 썻으면 return 반드시 쓰자 안그러면 아무것도 그려지지 않음
  return (
    <>
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={el.name}
          />
        );
      })}
    </>
  );
}
