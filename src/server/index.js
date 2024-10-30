import { resolveRequest } from "../utils";
import { BASEURL } from "../constans";

export const Server = {
 
  login: async (body) => {
    return resolveRequest({
      url:`${BASEURL}/users?username=${body.user}&password=${body.password}`,
      method: "GET",
      body:body
    });
  },
  usersDataList: async () => {
    return resolveRequest({
      url:`${BASEURL}/items`,
      method: "GET",
    });
  },
  request: async (body, baseurl, namefile) => {
    return resolveRequest({
      url: `${baseurl}/app-prod-v2/${namefile}`,
      method: "GET",
      body: body,
    });
  },
};
