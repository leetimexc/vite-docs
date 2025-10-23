import React, { useEffect, useState } from "react";

/**
 * 守卫逻辑
 * @returns
 */
const guardAction = () => {
  // 1s后再显示组件
  return new Promise((resolve, rejected) => {
    resolve("");
    console.log("after resolve");
    /* setTimeout(() => {
      resolve("");
    }, 1000); */
  });
};

interface IGuardCom {
  children: JSX.Element;
}

/**
 * 针对路由配置中needGuard字段为true或者undefined的组件封装守卫逻辑
 * 可自行调整
 * @param props
 * @returns
 */
const GuardCom = (props: IGuardCom) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    guardAction()
      .then(() => {
        console.log("resolve");
      })
      .finally(() => {
        setVisible(true);
      });
  }, []);

  return visible ? props.children : <></>;
};

export default GuardCom;
