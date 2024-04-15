import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - bPROFILE`;
  }, [title]);
};

export default useTitle;
