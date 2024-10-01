import { useEffect, useRef } from "react";
import { Button } from "./components";

const App = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (buttonRef.current != null) {
        buttonRef.current.click();
      }
    }, 5000);
  }, []);
  return (
    <>
      <Button ref={buttonRef} onClick={() => alert("Clicked!")}>
        Click me!
      </Button>
    </>
  );
};

export default App;
