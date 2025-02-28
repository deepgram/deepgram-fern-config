# Deepgram's Fern Configuration

This repo contains the configuration files for Deepgram's API documentation and SDK generation, built using Fern.

## Prerequisites

- Node.js v18+
- Fern CLI

### Installing the Fern CLI

The Fern CLI is used to develop, validate, and generate the docs and SDKs.

```shell
npm install -g fern-api
```

Optionally, if you want to publish preview URLs or the hosted docs, you'll need to authenticate with Fern.

```shell
fern login
```

## Validating your API specs

To validate your API specs, run:

```shell
fern check
```

## Updating your SDKs

To update your SDKs, run:

```shell
fern generate --group java-sdk
```

## Updating your Docs

### Local Development server

To run a local development server with hot-reloading you can run the following commands

```shell
# Build the custom components
npm --prefix custom-app run build

# Run the local development server
fern docs dev
```

### Preview URLs

To generate a shareable but un-indexed staging link, you can run the following command

```shell
fern generate --docs --preview
```

### Viewing Custom Components or API Playground Changes

To view custom components or API Playground changes in a Preview URL, you can run the following commands

```shell
# Build the custom components
npm --prefix custom-app run build

# Generate the docs preview
fern generate --docs --preview
```

### Production Docs

Documentation is automatically published when you run the `fern generate` command. We only expect this to be ran via the GitHub Actions workflows. Please ***DO NOT RUN THIS COMMAND MANUALLY***.

```sh
fern generate --docs
```

## Contributing

To contribute to the Docs, you can create a new branch, make your changes, and then create a pull request. See the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.
