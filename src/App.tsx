import React, { useEffect, useState } from "react";

import { CreateMon } from "./components/CreateMon";
import { Mons } from "./components/Mons";

import "./App.css";

function App() {
  const [hasMons, setHasMons] = useState(false);

  useEffect(() => {
    // TODO: More validation on storage data
    setHasMons(window.localStorage.length !== 0);
  }, []);

  return (
    <div className="app">
      {hasMons ? <Mons /> : <CreateMon setHasMons={setHasMons} />}
    </div>
  );
}

export default App;
