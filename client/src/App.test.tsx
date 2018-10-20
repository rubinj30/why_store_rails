import * as React from "react";
import { App } from "./App";

import { shallow } from "enzyme";

describe("App", () => {
  it("renders properly", () => {
    const result = shallow(<App />);
    expect(result).toBeDefined();
    expect(result).toMatchSnapshot();
  });
});
