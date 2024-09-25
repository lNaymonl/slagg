import { build } from "esbuild";

const production = process.argv[2] == "prod";

console.info("Building Server with env:", production ? "production" : "development");
await build({
    entryPoints: ["./server/src/index.ts"],
    outfile: "./dist/index.js",
    bundle: true,
    platform: "node",
    // external: ["express"],
    sourcemap: !production,
    tsconfig: "./server/tsconfig.json",
    define: {
        "process.env.NODE_ENV": production ? '"production"' : '"development"'
    },
    logLevel: "info",
    minify: production
});
console.log();

// console.info("Building Server with env:", production ? "production" : "development");
// await build({
//     entryPoints: ["./common/src/**/*.ts"],
//     outdir: "./dist",
//     sourcemap: true,
//     tsconfig: "./common/tsconfig.json",
//     logLevel: "info",
//     minify: true
// });

// Promise.all([
//     serverBuild,
//     commonBuild
// ]);
