import { useEffect } from "react";


const ToTop = () => {
  const { pathname } = new Location();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ToTop;
