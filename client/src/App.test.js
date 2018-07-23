import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("axios");

it("renders without crashing", () => {
  const div = document.createElement("div");
  shallow(<App />, div);
});
