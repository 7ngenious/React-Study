import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./main.css";

const Header = () => {
  const Id = localStorage.getItem("InputId");
  const onClickLogout = () => {
    alert("로그아웃 되었습니다!");
    console.log("click logout");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="inner">
        <div className="title">
          <Link to="/" className="logo">
            행복학사
          </Link>

          <ul className="sideMenu">
            <li>
              {Id ? (
                <Link to="/" onClick={onClickLogout}>
                  로그아웃
                </Link>
              ) : (
                <Link to="/SignIn">로그인</Link>
              )}
            </li>
            <li>
              {Id ? (
                <Link to="/">마이페이지</Link>
              ) : (
                <Link to="/SignUp">회원가입</Link>
              )}
            </li>
          </ul>
        </div>
        <ul className="mainMenu">
          <li>
            <a href="/Board">커뮤니티</a>
          </li>
          <li>
            <a href="/">입사/퇴사안내</a>
          </li>
          <li>
            <a href="/">생활안내</a>
          </li>
          <li>
            <a href="/">기숙사소개</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
