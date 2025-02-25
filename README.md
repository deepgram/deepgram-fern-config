# Deepgram's Fern Configuration

This repo contains the configuration files for Terra's API documentation and SDK generation, built using Fern.

## Validating your OpenAPI spec

To validate your API, run:
```sh
npm install -g fern-api # only required once
fern check
```

## Updating your SDKs

To update your SDKs, simply run the `Release Java SDK` GitHub Action with the desired version for the release. Under the hood, this leverages the Fern CLI:

```sh
npm install -g fern-api # only required once
fern generate --group java-sdk
```

## Updating your Docs

### Local Development server

To run a local development server with hot-reloading you can run the following command

```sh
fern docs dev
```

### Preview URLs

To generate a shareable but un-indexed staging link, you can run the following command

```sh
npm install -g fern-api # only required once

fern generate --docs --preview
```

### Viewing Custom Components

To view custom components in a Preview URL, you can run the following commands from `/deepgram-fern-config/custom-app/src`

```sh
npm i

npm run build

fern generate --docs --preview
```

## View API Playground Changes

To view changes to the API Playground, you can run the following command

```sh
fern generate --docs --preview
```

### Hosted URL

Documentation is automatically updated when you push to main via the `fern generate` command.

```sh
npm install -g fern-api # only required once
fern login # only required once
# then reach out to the Fern team to be added as an authenticated user
fern generate --docs
```

## Contributing

To contribute to the Docs, you can create a new branch, make your changes, and then create a pull request. See the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.


