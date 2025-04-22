import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "warn", // 또는 "error"
      "arrow-body-style": "off",
      curly: "off",
      "lines-around-comment": "off",
      "max-len": "off",
      "no-confusing-arrow": "off",
      "no-mixed-operators": "off",
      "no-tabs": "off",
      "no-unexpected-multiline": "off",
      "object-curly-newline": "off",
      "operator-linebreak": "off",
      quotes: "off",
      semi: "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "template-curly-spacing": "off",
    },
  },
];

export default eslintConfig;
