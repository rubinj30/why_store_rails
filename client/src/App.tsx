import { Header } from "./components/molecules/header/header";
import { SideNav } from "./components/molecules/side-nav/side-nav";
import * as React from "react";

// TODO:
// 2. decide on css library
// 3. setup jest and make sure tests work
interface IStateInterface {
  isLoggedIn: boolean;
}

// TODO: seems like it needs both Props and State interface, b
export class App extends React.Component<{}, IStateInterface> {

  state = {
    isLoggedIn: false
  };

  testJest = () => ('test');

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <div className="mainPage">
          <SideNav />
        </div>
      </div>
    );
  }
}