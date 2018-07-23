import React from "react";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";

import store from "../store";

import Adapter from "enzyme-adapter-react-16";
import AddTransactionModal from "./AddTransactionModal";

configure({ adapter: new Adapter() });
jest.mock("axios");
const render = () =>
  mount(
    <Provider store={store}>
      <AddTransactionModal />
    </Provider>
  );

it("renders the modal", () => {
  const wrapper = render();
  console.log(wrapper);
  expect(wrapper.length === 1);
});
