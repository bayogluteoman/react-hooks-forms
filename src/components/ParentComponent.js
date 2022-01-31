// src/components/ParentComponent
import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    console.log(firstName);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    console.log(lastName);
  }

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />    
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default ParentComponent;