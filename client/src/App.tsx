import { Header } from "./components/molecules/header/header";
import { SideNav } from "./components/molecules/side-nav/side-nav";
import * as React from "react";

// TODO:
// 2. decide on css library
// 3. setup jest and make sure tests work
// 4. make sure client and server runs concurrently
//   "ordered-imports": false, "grouped-imports": false
interface IStateInterface {
  isLoggedIn: boolean;
}

// TODO: seems like it needs both Props and State interface, b
class App extends React.Component<{}, IStateInterface> {

  // TODO: error said the state had to be protected, private, or public. WHY?
  public state = {
    isLoggedIn: false
  };

  // TODO: why is it public?
  // TODO: look up member
  public render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <div className="mainPage">
          <SideNav />
          <div>Rest of Page</div>
        </div>
      </div>
    );
  }
}

export default App;
