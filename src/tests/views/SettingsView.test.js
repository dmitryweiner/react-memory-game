import React from "react";
import renderer from "react-test-renderer";
import SettingsView from "../../views/SettingsView";

test("MainView", () => {
  const props = {
    settings: {
      numbersCount: 3,
      numbersMagnitude: 1,
      delay: 10
    }
  };
  const component = renderer.create(<SettingsView {...props} />).toJSON();
  expect(component).toMatchSnapshot();
});
