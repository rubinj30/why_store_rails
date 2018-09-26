import * as React from "react";
import "./App.css";

// TODO: 
// 1. create scripts that creates file tree
// 2. decide on css library
// 3. setup jest and make sure tests work
// 4. make sure client and server runs concurrently

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <div className="mainPage">
          {/* <SideNav />npm */}
          <div>Rest of Page</div>
        </div>
      </div>
    );
  }
}

export default App;
