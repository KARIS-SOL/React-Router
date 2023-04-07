import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      {/* 로그인 파트 */}
      <h1>로그인 파트입니다 </h1>
      아이디 <input type="text" />
      <br />
      <br />
      비밀번호 : <input type="password" />
      <br />
      <br />
      <button>로그인</button>
      <br />
      <br />
      <Link to="">카카오로그인 </Link>;{/* 회원가입파트 */}
      <h1>회원가입파트입니다 </h1>
      아이디 <input type="text" />
      <br />
      <br />
      비밀번호 : <input type="password" />
      <br />
      <br />
      <button>회원가입</button>
      <br />
      <br />
    </>
  );
}
