import { mount, configure } from "enzyme";
import TransactionList from "./TransactionList";
import React from "react";
import { Provider } from "react-redux";
import chai, { expect } from "chai";
import store from "../store";

import Adapter from "enzyme-adapter-react-16";
jest.mock("axios");
configure({ adapter: new Adapter() });

describe("transaction list", () => {
  it("includes one div with the class main", () => {
    const wrapper = mount(
      <Provider store={store}>
        <TransactionList />
      </Provider>
    );
    expect(wrapper.find(".main")).to.have.lengthOf(1);
  });
});
