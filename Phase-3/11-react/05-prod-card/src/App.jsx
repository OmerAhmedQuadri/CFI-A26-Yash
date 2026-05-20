import { useEffect, useState } from "react";

function Timer() {

  useEffect(() => {

    console.log("Fan turned ON");

    const id = setInterval(() => {
      console.log("Fan is running...");
    }, 1000);

    return () => {
      console.log("Fan turned OFF");

      clearInterval(id);
    };

  }, []);

  return (
    <div>
      <h1>Timer Running...</h1>
    </div>
  );
}

function App() {

  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ padding: "20px" }}>

      <button onClick={() => setShowTimer(!showTimer)}>
        Toggle Timer
      </button>

      {showTimer && <Timer />}

    </div>
  );
}

export default App;