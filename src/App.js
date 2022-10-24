import React, { useState } from "react";
import { messages } from "./components/translate/messsages";
import LoginPage from "./components/view/LoginPage";
import RegisterPage from "./components/view/RegisterPage";

import "./styles.css";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  console.log(isRegistered);

  const handleIsregistered = () => {
    setIsRegistered((prevState) => !prevState);
    // you can also set state like below
    //setIsRegistered(!isRegistered)
  };
  return (
    <>
      <main style={{ marginBottom: "10px" }}>
        {!isRegistered ? (
          <LoginPage messages={messages} />
        ) : (
          <RegisterPage messages={messages} />
        )}
      </main>
      {/* <button onClick={() => setIsRegistered(!isRegistered)}>Toggle Register</button> */}
      <button onClick={handleIsregistered}>Toggle Page</button>
    </>
  );
};
export default App;
