#!/bin/env node

// @ts-check
import {build, analyzeMetafile} from "esbuild";
import {performance} from "perf_hooks";

const start = performance.now();
build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false,
  sourcemap: true,
  outdir: "dist",
  platform: "node",
  target: "node12",
  external: ["react", "react-dom", "styled-components"],
  metafile: true,
  watch: process.argv[2] === "-watch",
})
  .then(({metafile}) => analyzeMetafile(metafile))
  .then(console.log)
  .catch(() => process.exit(1))
  .finally(() =>
    console.log(`⚡  Built in ${Math.round(performance.now() - start)}ms.`)
  );
