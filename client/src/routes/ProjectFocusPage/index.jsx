import server from "../../service/server";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectFocusPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const getSpecificProject = async () => {
    const { data } = await server.getSpecificProject(id);
    setData(data.projectInfoList);
  };

  useEffect(() => {
    getSpecificProject();
  }, []);

  return (
    <div className="page2">
      <div className="titleWrap">{id}</div>
      <div className="contentsWrap">
        <table>
          <thead>
            <tr>
              <td>Developer</td>
              <td>Date-In</td>
              <td>Date-Out</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(({ emp_no, in_date, out_date }) => (
                <tr key={`${emp_no}`}>
                  <td
                    style={{ cursor: "pointer", color: "brown" }}
                    onClick={() => navigate(`/empinfo/${emp_no}`)}
                  >
                    {emp_no}
                  </td>
                  <td>{in_date}</td>
                  <td>{out_date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectFocusPage;
