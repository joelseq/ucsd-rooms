# UCSD Rooms Server

This folder is for the server(less)-side of UCSD Rooms.
It uses [serverless](https://serverless.com/) to deploy functions to AWS Lambda.

## Installation & Development

For local offline development, you first need to install `serverless` by running:

```sh
npm i -g serverless
```

After successfully installing serverless, you then need to install the project dependencies:

```sh
npm install
```

and finally:

```sh
sls offline start --skipCacheInvalidation
```
