import React, { useState } from 'react';
import PracticeOne2 from './PracticeOne2';
import PracticeTwo2 from './PracticeTwo2';

export default function PracticeConditional2() {
  const [condition, setCondition] = useState('1번');

  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };
  return (
    <>
      {condition === '1번' ? (
        <PracticeOne2 text={condition} />
      ) : (
        <PracticeTwo2 text={condition} />
      )}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
