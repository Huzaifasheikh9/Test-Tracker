import React from "react";
import Button from "./Button";

const Header = ({ onAdd, showAddTask }) => {
  return (
    <div className="Header">
      <h2>Test Tracker</h2>
      <Button
        title={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
        onAdd={onAdd}
      />
    
    </div>
  );
};

export default Header;
