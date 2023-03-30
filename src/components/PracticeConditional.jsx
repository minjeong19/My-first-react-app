import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function PracticeConditional() {
  const [condition, setCondition] = useState(true);

  const onChange = () => {
    setCondition(!condition);
  };
  return (
    <>
      {condition ? <PracticeOne /> : <PracticeTwo />}
      <button onClick={onChange}>컴포넌트 변경</button>
    </>
  );
}
