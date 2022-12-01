import { useParams } from "react-router-dom";
import server from "../../service/server";
import { useEffect, useState } from "react";

const EmpPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const getPersonalInfo = async () => {
    const { data } = await server.getPersonalInfo(id);
    setData(data[0]);
  };

  useEffect(() => {
    getPersonalInfo();
  }, []);

  return (
    <div className="page2">
      <div className="titleWrap">{id}</div>
      <div className="contentsWrap">
        <table>
          <thead>
            <tr>
              <td>Code</td>
              <td>Name</td>
              <td>주민등록번호</td>
              <td>최종 학력</td>
              <td>ID</td>
            </tr>
          </thead>
          <tbody>
            {data && (
              <tr key={`${data.emp_no}`}>
                <td>{data.emp_no}</td>
                <td>{data.emp_name}</td>
                <td>{data.identification_no}</td>
                <td>{data.education}</td>
                <td>{data.emp_ID}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpPage;
