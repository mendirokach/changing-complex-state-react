import React from "react";
sfd;
function App() {
  const [name, setName] = React.useState(null);
  const [lName, setLname] = React.useState(null);
  const [headingText, setHeadingText] = React.useState(null);
  function handleOnChangeName(e) {
    setName(e.target.value);
  }
  function handleOnChangeLname(e) {
    setLname(e.target.value);
  }
  function handleClick() {
    setHeadingText(name + " " + lName);
  }
  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleOnChangeName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleOnChangeLname}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
