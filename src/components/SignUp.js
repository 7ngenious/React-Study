import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

const SignUp = () => {
  const navigate = useNavigate();

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

  const [name, setName] = useState();
  const onChangeName = e => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onClickSignUp = () => {
    console.log("click login");

    if (localStorage.getItem("InputId")) {
      alert("웹 스토리지에 데이터가 존재합니다. 회원가입 불가");
    } else {
      if (isPassword(pw)) {
        localStorage.setItem("InputId", id);
        localStorage.setItem("InputPw", pw);
        localStorage.setItem("Name", name);
        localStorage.setItem("IsLogin", false);
        alert("회원가입 성공!");
        navigate("/SignIn");
      } else {
        alert("비밀번호를 확인하세요. (8~16자 영문, 숫자포함.)");
      }
    }
  };

  const isPassword = e => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

    return regExp.test(e);
  };
  return (
    <div className="Wrap">
      <div className="loginWrap">
        <div className="loginForm">
          <div className="title">SignUp</div>
          <div className="loginText">
            <input
              className="loginInput"
              value={id}
              input
              type="text"
              name="inputId"
              placeholder="아이디"
              onChange={onChangeId}
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
          <div className="loginText">
            <input
              className="loginInput"
              value={name}
              type="text"
              name="inputName"
              placeholder="이름"
              onChange={onChangeName}
            />
          </div>
          <button className="loginBtn" onClick={onClickSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
