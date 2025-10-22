import { router } from "./router/createRouteConfig";
import { useRoutes } from "react-router-dom";
import './style/index.css';

const App = function () {
  const elements = useRoutes(router);
  return elements;
};

export default App;