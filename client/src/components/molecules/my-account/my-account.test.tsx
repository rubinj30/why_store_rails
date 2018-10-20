import * as React from "react";
import { MyAccount } from "./my-account";

import { shallow } from "enzyme";

describe("My Account", () => {
  it(" renders properly when logged in", () => {
    const result = shallow(<MyAccount isLoggedIn={true} />);
    expect(result).toBeDefined();
    expect(result).toMatchSnapshot();
  });
  it("renders properly when logged not logged in", () => {
    const result = shallow(<MyAccount isLoggedIn={false} />);
    expect(result).toBeDefined();
    expect(result).toMatchSnapshot();
  });
});
