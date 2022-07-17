import React, {Component} from "react";

class App extends Component {
  state = {
    good: 0, 
    neutral: 0,
    bad: 0
  }

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h3>Statistics</h3>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
        


      </>
    )
  }
}


export default App;