/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/shared/ui/atoms/chip/chip.stories.tsx": require("../src/shared/ui/atoms/chip/chip.stories.tsx"),
    "./src/shared/ui/atoms/input/input.stories.tsx": require("../src/shared/ui/atoms/input/input.stories.tsx"),
    "./src/shared/ui/atoms/loader/loader.stories.tsx": require("../src/shared/ui/atoms/loader/loader.stories.tsx"),
    "./src/shared/ui/atoms/typography/typography.stories.tsx": require("../src/shared/ui/atoms/typography/typography.stories.tsx"),
    "./src/shared/ui/icons/icons.stories.tsx": require("../src/shared/ui/icons/icons.stories.tsx"),
    "./src/shared/ui/molecules/navigation-back-button/navigation-back-button.stories.tsx": require("../src/shared/ui/molecules/navigation-back-button/navigation-back-button.stories.tsx"),
    "./src/shared/ui/molecules/navigation-close-button/navigation-close-button.stories.tsx": require("../src/shared/ui/molecules/navigation-close-button/navigation-close-button.stories.tsx"),
    "./src/shared/ui/molecules/phone-input/phone-input.stories.tsx": require("../src/shared/ui/molecules/phone-input/phone-input.stories.tsx"),
    "./src/shared/ui/molecules/primary-button/primary-button.stories.tsx": require("../src/shared/ui/molecules/primary-button/primary-button.stories.tsx"),
    "./src/shared/ui/molecules/search-bar/search-bar.stories.tsx": require("../src/shared/ui/molecules/search-bar/search-bar.stories.tsx"),
  };
};

configure(getStories, module, false);
