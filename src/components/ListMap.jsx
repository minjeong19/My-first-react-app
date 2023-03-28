import React from "react";

export default function ListMap() {
  const items = [
    {
      item: "PS5",
      price: "685,000원",
    },
    {
      item: "에어 프라이어",
      price: "50,000원",
    },
    {
      item: "사세 치킨윙",
      price: "11,500원",
    },
  ];
  return (
    <div>
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h2>품목명 : {el.item}</h2>
            <p>가격 : {el.price}</p>
          </div>
        );
      })}
      <hr />
      <div>
        <h2>품목명 : {items[0].item} </h2>
        <p>가격 : {items[0].price}</p>
        <h2>품목명 : {items[1].item} </h2>
        <p>가격 : {items[1].price}</p>
        <h2>품목명 : {items[2].item} </h2>
        <p>가격 : {items[2].price}</p>
      </div>
    </div>
  );
}
