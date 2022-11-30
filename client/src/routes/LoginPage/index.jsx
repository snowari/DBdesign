import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import server from "../../service/server";

const LoginPage = ({ onLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const users = await server.callbody();
    setUsers(users.data.emp_ID_LIST);
  };

  const handleID = (e) => {
    setId(e.target.value);
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = users.find((user) => user.id);
    if (user.password !== password) {
      console.log("아이디 또는 비밀번호가 틀립니다.");
      toast("아이디 또는 비밀번호가 틀립니다.");
      return;
    }
    toast("로그인 성공");
    onLogin();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="page">
      <form onSubmit={handleSubmit}>
        <div className="titleWrap">
          사번과 비밀번호를
          <br />
          입력해주세요
        </div>
        <div className="contentWrap" style={{ marginBottom: "20px" }}>
          <div className="inputTitle">사번</div>
          <div className="inputWrap">
            <input
              className="input"
              placeholder="mjuX0000"
              type="text"
              value={id}
              onChange={handleID}
            />
          </div>
          <div style={{ marginTop: "10px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자 포함 8자 이상"
              value={password}
              onChange={handlePw}
            />
          </div>
        </div>
        <button className="bottomButton" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
