import { useDispatch, useSelector } from "react-redux";
import type { Dispatch } from "../../model/store";
import type { RootModel } from "../../model/models";
import { useEffect } from "react";
import { getUserInfo } from "../../service";

const Home = () => {
  const dispatch = useDispatch<Dispatch>();
  const useInfo = useSelector((state: RootModel) => state.home.useInfo);

  useEffect(() => {
    // getUserInfo().then((res) => {
    //   dispatch.home.setUseInfo(res);
    // });
    dispatch.home.getUserInfo2();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>useInfo: {JSON.stringify(useInfo?.name)}</p>
      <p>useInfo: {JSON.stringify(useInfo?.age)}</p>
    </div>
  );
};

export default Home;
