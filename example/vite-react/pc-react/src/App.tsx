import { router } from "./router/createRouteConfig";
import { useNavigate, useRoutes } from "react-router-dom";
import useLocationChange from "./router/useLocationChange";
import routerListener from "./router/routerListener";
import "./style/index.css";

const App = function () {
  const elements = useRoutes(router);
  const navigate = useNavigate();
  useLocationChange((to, from) => {
    routerListener(navigate, to, from);
  });
  return elements;
};

export default App;
