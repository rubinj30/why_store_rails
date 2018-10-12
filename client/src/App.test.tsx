jest.unmock("./App.tsx");

import * as React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render properly", () => {
    const result = shallow(<App />);
    expect(result).toBeDefined();
    expect(result).toMatchSnapshot();
  });
});
