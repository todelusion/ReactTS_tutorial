import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = (): void => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    return window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollTop;
