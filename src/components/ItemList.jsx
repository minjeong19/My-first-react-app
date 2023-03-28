import React from "react";
import Item from "./Item";

export default function ItemList() {
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

      {/* props 전달 */}
      {items.map((el, index) => (
        <Item item={el.item} price={el.price} key={index} />
      ))}
    </div>
  );
}
