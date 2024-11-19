import reactCompiler from "eslint-plugin-react-compiler";
export default {
  extends: ["next/core-web-vitals", "next/typescript"],
  plugins: [reactCompiler],
  rules: {
    "react-compiler/react-compiler": "error",
  },
};
