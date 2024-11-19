/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  endOfLine: "lf",
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^~/types/(.*)$",
    "",
    "^~/components/ui/(.*)$",
    "^~/components/(.*)$",
    "^~/config/(.*)$",
    "^~/lib/(.*)$",
    "^~/hooks/(.*)$",
    "^~/registry/(.*)$",
    "^~/styles/(.*)$",
    "^~/app/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
