import { useState } from "react";
import CheerButton from "./CheerButton";
/*
When we have values that need to be refreshed when the user interacts with the page,
we need to store them in a specific place. 

That "place" is the state of our component. The state of our component is where we keep 
any piece of data that will change during the execution of our app. When the state changes,
the component refreshes and shows the updated value on the screen. 
*/


function App() {
  //React hook - "hooks" into the state storage and retrieves or changes a value there
  const [shout, setShout] = useState("string");

  const wordToDisplay = ["M", "A", "K", "E", "R", "S"]; 

  return (
    <div className="app">
      <h1>Cheerleadr</h1>
      {wordToDisplay.map((letter) => {
        return <CheerButton setShout={setShout} letter={letter} />
      })}

      {/* <CheerButton setShout={setShout} letter="M" />
      <CheerButton setShout={setShout} letter="A"/>
      <CheerButton setShout={setShout} letter="K"/>
      <CheerButton setShout={setShout} letter="E"/>
      <CheerButton setShout={setShout} letter="R"/>
      <CheerButton setShout={setShout} letter="S" /> */}
      
      <h1>{shout}</h1>
    </div>
  )
}

export default App;