import React from "react";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Ankit Tomar").pauseFor(2500).stop().start();
      }}
    />
  );

  //   return (
  //     <div className="App">
  //       <Typewriter
  //         onInit={(typewriter) => {
  //           typewriter
  //             .typeString("Ankit Tomar")
  //             .pauseFor(1000)
  //             // .deleteAll()
  //             .start();
  //         }}
  //       />
  //     </div>
  //   );
}

export default App;
