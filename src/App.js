import { useEffect, useState } from "react";
import "./styles.css";
import useDebounce from "./useDebounce";

export default function App() {
  const [inputState, setInputState] = useState(null);

  const debouncedValue = useDebounce(inputState, 3000);

  const handleInputChange = (e) => {
    setInputState(e.target.value);
  };

  useEffect(() => {
    let log = (debouncedValue) => console.log(debouncedValue);
    log(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="App">
      <input type="text" value={inputState} onChange={handleInputChange} />
    </div>
  );
}
