import Axios from "axios";

export const GetName = cb => {
  Axios.get("/api/").then(res => cb(res));
};
