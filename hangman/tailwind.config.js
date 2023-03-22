// This module exports an object with configuration options for a front-end build tool, such as Tailwind CSS or Webpack.
module.exports = {
  mode: "jit", // Configures the build tool to use Just-In-Time (JIT) compilation mode, which speeds up the build process.
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Instructs the build tool to remove any unused CSS styles from the output, based on the files specified here.
  darkMode: false, // Configures whether or not to enable a dark mode theme, which can be set to 'media' or 'class' in addition to 'false'.
  theme: {
    extend: {}, // Allows for customization of various styling options, such as font sizes, colors, spacing, etc.
  },
  variants: {
    extend: {}, // Allows for customization of different variants of styling options, such as hover, focus, active, etc.
  },
  plugins: [], // Allows for integration of additional plugins to extend the functionality of the build tool, such as PostCSS or Autoprefixer.
};
