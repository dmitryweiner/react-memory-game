import React from "react";
import renderer from "react-test-renderer";
import MainView from "../../views/MainView";

test("MainView", () => {
  const component = renderer.create(<MainView />).toJSON();
  expect(component).toMatchSnapshot();
});
