import { build } from "esbuild";

import * as fs from "fs";
import path from "path";

// Has to be imported weirdly because it is a commonjs import insde an esm module
import yamlPluginImp from "esbuild-plugin-yaml";
const { yamlPlugin } = yamlPluginImp;
import copy from "esbuild-plugin-copy";

const production = process.argv[2] == "--prod";

const BUILD_FOLDER = "./dist";

// Custom plugin to remove the `drizzle/` directory from the build folder
let removeDrizzlePlugin = {
    name: "Remove Drizzle Folder in the build Folder",
    setup(build) {
        build.onStart(() => {
            fs.rmSync(path.join(BUILD_FOLDER, "/drizzle"), { recursive: true, force: true })
        });
    },
};

console.info("Building Server with env:", production ? "production" : "development");
await build({
    entryPoints: ["./server/src/index.ts"],
    outfile: path.join(BUILD_FOLDER, "/index.js"),
    bundle: true,
    platform: "node",
    external: [
        "swagger-ui-express",
        "drizzle-orm"
    ],
    sourcemap: !production, // Enable the source map when on dev mode
    tsconfig: "./server/tsconfig.json",
    define: {
        "process.env.NODE_ENV": production ? '"production"' : '"development"',
        "process.env.DB_FILE_NAME": '"file:./dist/slagg.db"' // Sets the environment variable to where the sqlite database is located
    },
    logLevel: "info",
    minify: production, // Minifys the output when in production mode
    plugins: [
        removeDrizzlePlugin,
        yamlPlugin(), // Plugin to parse .yaml files
        copy({ // Copies every nessecary file to the build folder
            assets: [
                {
                    from: "./database/drizzle/**/*",
                    to: "./drizzle"
                }
            ]
        })
    ]
});
console.log(); // Add new line to stdout
