import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";

export default [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
      }),
      del({ targets: ["dist/*"] }),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          exclude: ["**/*.stories.*"],
        },
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: "./dist/types/index.d.ts",
    output: [{ file: "dist/alcumus-components.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
