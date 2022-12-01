import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import server from "../../service/server";

const ProjectPage = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const getProjects = useCallback(async () => {
    const { data } = await server.getProject();
    setData(data.projectList);
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="page2">
      <div className="titleWrap">ProjectList</div>
      <div className="contentWrap">
        <table className="table">
          <thead>
            <tr>
              <td className="id">ID</td>
              <td className="title">Title</td>
              <td className="customer">Customer</td>
              <td className="start">Start</td>
              <td className="end">End</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(
                ({
                  customer_ID,
                  end_date,
                  project_name,
                  project_no,
                  start_date,
                }) => (
                  <tr key={`${customer_ID} ${project_no}`}>
                    <td>{project_no}</td>
                    <td
                      style={{ cursor: "pointer", color: "brown" }}
                      onClick={() => navigate(`/project/${project_no}`)}
                    >
                      {project_name}
                    </td>
                    <td>{customer_ID}</td>
                    <td>{start_date}</td>
                    <td>{end_date}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectPage;
