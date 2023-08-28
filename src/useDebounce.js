import { useEffect, useState } from "react";

const useDebounce = (inputstate, delayTime) => {
  const [debounceState, setDebounceState] = useState();

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebounceState(inputstate), delayTime);
    return () => clearTimeout(timeoutId);
  }, [inputstate]);

  return debounceState;
};

export default useDebounce;
