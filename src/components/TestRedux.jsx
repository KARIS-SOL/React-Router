import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TestRedux() {
  // 값 변경은 불가하지만 useSelector 로 값을 콜백의 인자로 받아서 가져다줌 -> action
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>당신의 몸무게는 {weight} 입니다</h1>
      <button onClick={() => dispatch({ type: '증가' })}>증가</button>
      <button onClick={() => dispatch({ type: '감소' })}>감소</button>
      <Link to="/test">리덕스로 이동</Link>
    </>
  );
}
