import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./main.css";

const SignIn = () => {
  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const [id, setId] = useState();
  const onChangeId = e => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const [pw, setPw] = useState();
  const onChangePw = e => {
    console.log(e.target.value);
    setPw(e.target.value);
  };
  const isLogin = localStorage.getItem("IsLogin");

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");

    if (
      localStorage.getItem("InputId") === id &&
      localStorage.getItem("InputPw") === pw
    ) {
      console.log(id, pw);
      alert("로그인 성공!");
      localStorage.setItem("IsLogin", true);
      console.log("isLogin? :", isLogin);
      navigate("/");
      window.location.reload();
    } else {
      alert("로그인 실패! 아이디 또는 비밀번호가 일치하지 않습니다.");
      console.log("isLogin? :", isLogin);
    }
  };
  return (
    <div className="Wrap">
      <div className="loginWrap">
        <div className="loginForm">
          <div className="title">SignIn</div>
          <div className="loginText">
            <input
              className="loginInput"
              value={id}
              type="text"
              name="inputId"
              placeholder="아이디"
              onChange={onChangeId} //태그 안에서 바로 onChange 구현하기
            />
          </div>
          <div className="loginText">
            <input
              className="loginInput"
              value={pw}
              type="password"
              name="inputPw"
              placeholder="비밀번호"
              onChange={onChangePw}
            />
          </div>
          <button className="loginBtn" onClick={onClickLogin}>
            Login
          </button>
          <div className="link">
            회원이 아니시라면? /<Link to="/SignUp"> 회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
