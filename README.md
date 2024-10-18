# Slagg
An internal Slack clone.

## Install
To install all dependencies just execute
```bash
$ npm install
# or
$ npm i
```
in the `<rootDir>/app/` directory.

## Change the database schema
To change the database schema you have to edit, or add, the `*.ts` files at `<rootDir>/app/database/src/schema/`. \
When you finished implementing the changes, open a terminal under `<rootDir>/app/database/` and run:
```bash
$ npm run generate
```
This will create every needed file to alter the database scheme. \
To apply the migration just start the `Server`.
> **WARNING: Please try to avoid using the manual option! It could break the database and lead to unexpected behaviour**

You can also run the migration process manually by running:
```bash
$ npx drizzle-kit migrate
```

## Run the app in dev mode
Open two terminals and navigate to the `<rootDir>/app/` directory:
```bash
$ cd ./app
```

To start the `Server` execute the following in the first terminal:
```bash
$ npm run dev:server
```
A new directory is created under `<rootDir>/app/dist/`.

---

To start the `Client` execute the following in the second terminal:
```bash
$ npm run dev:client
```

## Build the app for production:
Open a terminal, then execute:
```bash
$ cd <rootDir>/app
$ npm run build
```

This first removes the directory under `<rootDir>/app/dist/` if it exists. Then it creates it again and builds the `Server` into it. After the `Server` has finished building, the `Client` is built and copied to `<rootDir>/app/dist/client/`.

---

The `build` command in the `app` directory consists of three individual commands:

```bash
$ rimraf ./dist
```
The UNIX command `rm -rf` for node in a cross-platform implementation.

```bashs
$ node ./esbuild.mjs --prod
```
Builds the Server using a custom esbuild script in production mode.

```bash
$ npm run -w client build -s
```
Runs the build command in the Client-Workspace under `<rootDir>/app/client`

`-w client`: Selects the workspace, in this case `client` \
`build`: The actual command to run in the workspace \
`-s`: Run the command in silent mode, which means that any output, but errors, are suppressed.
