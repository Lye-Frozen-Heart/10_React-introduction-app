import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [name, setName] = useState("Alex Torres Bravo");

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hello {name}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "50%",
            height: "25%",
            borderRadius: "50%",
          }}
          onClick={() => setName("Josep Rubió")}
        >
          {" "}
          Hola soy un botón
        </button>
      </div>
    </>
  );
}

export default App;
