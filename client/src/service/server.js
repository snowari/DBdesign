import Axios from "../axios";
export default {
  callbody() {
    return Axios({
      url: "/callbody",
      method: "get",
    });
  },
  getPersonalInfo(id) {
    return Axios({
      url: `/empinfo/${id}`,
      method: "get",
    });
  },
  getProject() {
    return Axios({
      url: `/project`,
      method: "get",
    });
  },
  getSpecificProject(id) {
    return Axios({
      url: `/project/${id}`,
      method: "get",
    });
  },
};
