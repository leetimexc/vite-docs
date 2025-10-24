import { useState, useRef, useEffect } from "react";

export const useTabUnderline = <T extends string>(activeTab: T) => {
  const tabRefs = useRef<Map<T, HTMLButtonElement | null>>(new Map());
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const updateUnderline = () => {
      const activeRef = tabRefs.current.get(activeTab);
      if (activeRef) {
        const { offsetWidth, offsetLeft } = activeRef;
        setUnderlineStyle({ width: offsetWidth, left: offsetLeft });
      }
    };
    updateUnderline();
  }, [activeTab]);

  const setTabRef = (key: T) => (el: HTMLButtonElement | null) => {
    tabRefs.current.set(key, el);
  };

  return { setTabRef, underlineStyle };
};
