# `swagger.d.ts`

[![Build Status](https://travis-ci.org/mohsen1/swagger.d.ts.svg?branch=master)](https://travis-ci.org/mohsen1/swagger.d.ts)

### Note: This type interface is not covering 100% of Swagger spec yet.

> Swagger Type Interface For TypeScript

### Usage

###### Installation

Install with npm

```shell
npm install --save swagger.d.ts
```

Include the `reference` comment then use `Swagger.Spec` type. Other sub-types are also available.

```typescript
/// <reference path="path/to/swagger.d.ts"/>

var mySwaggerSpec: Swagger.Spec = { /*... */ };
```

### Development

###### Running tests

Install Node.js and run:
```
npm test
```

### License
MIT