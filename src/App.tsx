import React, { useEffect, useState } from "react";

import { CreateMon } from "./components/CreateMon";
import { Mons } from "./components/Mons";
import { checkForExistingDataInStorage } from "./util/Storage";

import "./App.css";

function App() {
  const [hasMons, setHasMons] = useState(false);

  useEffect(() => {
    setHasMons(checkForExistingDataInStorage());
  }, []);

  return (
    <div className="app">
      {hasMons ? <Mons /> : <CreateMon setHasMons={setHasMons} />}
    </div>
  );
}

export default App;
