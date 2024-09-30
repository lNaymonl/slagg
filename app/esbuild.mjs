import { build } from "esbuild";

// Has to be imported weirdly because it is a commonjs import insde an esm module
import yamlPluginImp from "esbuild-plugin-yaml";
const { yamlPlugin } = yamlPluginImp;

const production = process.argv[2] == "--prod";

console.info("Building Server with env:", production ? "production" : "development");
await build({
    entryPoints: ["./server/src/index.ts"],
    outfile: "./dist/index.js",
    bundle: true,
    platform: "node",
    external: [
        "swagger-ui-express"
    ],
    sourcemap: !production, // Enable the source map when on dev mode
    tsconfig: "./server/tsconfig.json",
    define: {
        "process.env.NODE_ENV": production ? '"production"' : '"development"',
    },
    logLevel: "info",
    minify: production, // Minifys the output when in production mode
    plugins: [
        yamlPlugin() // Plugin to parse .yaml files
    ],
});
console.log(); // Add new line to stdout
