import React from "react";
import { configure, shallow } from "enzyme";
import { Provider } from "react-redux";
import axios from "axios";
import store from "../store";
import Dashboard from "./Dashboard";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
jest.mock("axios");
const render = () =>
  shallow(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

it("renders the dashboard", () => {
  const wrapper = render();
  expect(wrapper.length === 1);
});
