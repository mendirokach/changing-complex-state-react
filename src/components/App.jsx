import React from "react";

//angela's solution .... uses only one state, and controlled component

function App() {
  const [fullName, setFullName] = React.useState({
    //default values ""
    fName: "",
    lName: "",
  });

  function handleOnChangeFullName(e) {
    const name = e.target.name; //input html names , "fName"/"lName"
    const newValue = e.target.value;

    /* optional union for the the two above lines 
    const {name, value:newValue} = e.traget; */

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (name === "lName")
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleOnSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleOnChangeFullName}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleOnChangeFullName}
          value={fullName.ldasName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
