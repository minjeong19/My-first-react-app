import React from 'react';
import img from '../images/images.jpg';
export default function ImgComponent2() {
  return (
    <>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/images.jpg" alt="퍼블릭 포뇨" />
      <h1>SRC 폴더</h1>
      <img src={img} alt="소스 포뇨" />
    </>
  );
}
