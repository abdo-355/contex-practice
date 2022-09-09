import React from "react";
import languageContext from "../contexts/languageContext";

class Field extends React.Component {
  static contextType = languageContext;

  render() {
    const text = this.context === "en" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
