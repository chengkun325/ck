import publicMethods from "./index";

let Dashboard = {
  getLoginIp() {
    return publicMethods.get("/api/user", "");
  },
};
export default Dashboard;
