import React from "react";
import ListChild from "./ListChild";
import Modal from "./Modal";

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      todo: "State 사용법 익히기",
    },
    {
      title: "코테 문제 풀기",
      todo: "Lv 0 정복 화이팅!",
    },
    {
      title: "한강 가기",
      todo: "경품 타기",
    },
  ];
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <Modal />
      {dataArr.map((el, index) => (
        <ListChild title={el.title} todo={el.todo} key={index} />
      ))}

      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <hr />
            <h2>{el.title}</h2>
            <p>{el.todo}</p>
          </div>
        );
      })}
      {/* <ListChild title={dataArr[0].title} todo={dataArr[0].todo} />
      <ListChild title={dataArr[1].title} todo={dataArr[1].todo} /> */}
      {/* <ListChild title="리액트 공부하기" todo="state 사용법 익히기" />
      <ListChild title="코테 문제 풀기" todo="Lv 0 정복 화이팅!" /> */}
      {/* <hr /> */}
      {/* <ListChild big="리액트 공부하기" small="state 사용법 익히기" /> */}
      {/* <hr /> */}
      {/* <ListChild big="코테 문제 풀기" small="Lv 0 정복 화이팅!" /> */}
      <hr />
      <Modal />
    </div>
  );
}
