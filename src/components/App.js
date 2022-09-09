import { useState } from "react";
import UserCreate from "./UserCreate";
import languageContext from "../contexts/languageContext";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => setLanguage("en")} />
        <i className="flag nl" onClick={() => setLanguage("nl")} />
        <languageContext.Provider value={language}>
          <UserCreate />
        </languageContext.Provider>
      </div>
    </div>
  );
};

export default App;
