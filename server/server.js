const PORT = 3100;

const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "Practice",
});

connection.connect();

app.get("/", (req, res) => {
  res.send("안녕?");
});

app.get("/callbody", (req, res) => {
  const employeeList = { emp_ID_LIST: [] };

  connection.query(
    "SELECT emp_ID, emp_pwd FROM employee", //로그인 아이디 비번 조회
    function (err, rows, fields) {
      for (var i = 0; i < 80; i++) {
        employeeList.emp_ID_LIST.push({
          id: rows[i]["emp_ID"],
          password: rows[i]["emp_pwd"],
        });
      }
      if (err) {
        console.log("fail to get data");
        return;
      } else {
        console.log("success to get data");
        res.status(200).json(employeeList);
        // res.send(rows.nicname);
      }
    }
  );
});

app.get("/empinfo/:id", (req, res) => {
  //개인 조회
  const id = req.params.id;
  connection.query(
    `SELECT * FROM employee WHERE employee.emp_no='${id}'`,
    function (err, data, fields) {
      if (err) {
        console.log("fail to get data", err);
      }
      res.status(200).json({ ...data });
    }
  );
});

app.get("/project", (req, res) => {
  //전체 프로젝트 조회
  const projectList = { projectList: [] };

  connection.query(
    "SELECT project_no, customer_ID, project_name, start_date, end_date FROM project",
    function (err, rows, fields) {
      for (const item of rows) {
        projectList.projectList.push({
          ...item,
        });
      }
      if (err) {
        console.log("fail to get data");
        return;
      }
      res.status(200).json(projectList);
    }
  );
});

app.get("/project/:id", (req, res) => {
  //개별 프로젝트 조회
  const id = req.params.id;
  const projectInfoList = { projectInfoList: [] };

  connection.query(
    `SELECT emp_no,in_date,out_date 
  FROM projectparticipation
   WHERE projectparticipation.project_no='${id}'`,
    function (err, rows, fields) {
      for (const item of rows) {
        projectInfoList.projectInfoList.push({
          ...item,
        });
      }

      if (err) {
        console.log("fail to get data: ", err);
        return;
      }

      res.status(200).json(projectInfoList);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Connect at http://localhost:${PORT}`);
});
