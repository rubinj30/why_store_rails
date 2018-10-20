import * as React from "react";
import { MyAccountContainer } from "../header/styled";
import { NotLoggedIn } from "./styled";

interface IMyAccountInterface {
  isLoggedIn: boolean;
}

export class MyAccount extends React.Component<IMyAccountInterface, {}> {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <MyAccountContainer>
        {isLoggedIn ? (
          <div className="">my account</div>
        ) : (
          <NotLoggedIn horizontal={true}>
            <div>log in</div>
            <div>register</div>
          </NotLoggedIn>
        )}
      </MyAccountContainer>
    );
  }
}
