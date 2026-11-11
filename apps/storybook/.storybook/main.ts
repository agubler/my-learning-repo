import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // Stories live next to their components in each workspace package.
  stories: [
    "../../../packages/*/src/**/*.mdx",
    "../../../packages/*/src/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
