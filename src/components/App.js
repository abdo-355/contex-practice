import { useState } from "react";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => setLanguage("en")} />
        <i className="flag nl" onClick={() => setLanguage("nl")} />
        <UserCreate />
      </div>
    </div>
  );
};

export default App;
