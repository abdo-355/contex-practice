import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
  render() {
    return (
      <languageContext.Consumer>
        {(value) => (
          <button className="ui button primary">
            {value === "en" ? "Submit" : "Voorleggen"}
          </button>
        )}
      </languageContext.Consumer>
    );
  }
}

export default Button;
