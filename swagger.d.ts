declare module Swagger {

  export interface Info {
    title: string;
    version: string;
    description?: string;
    contact?: Contact;
    license?: License;
  }

  export interface Contact {
    name?: string;
    email?: string;
    url?: string;
  }

  export interface License {
    name: string;
    url?: string;
  }

  export interface ExternalDocs {
    url: string;
    description?: string;
  }

  export interface BodyParameter {
    name: string;
    in: string;
    required?: boolean;
    description?: string;
  }

  export interface QueryParameter {

  }

  export interface PathParameter {

  }

  export interface HeaderParameter {

  }

  export interface Path {

  }

  export interface Operation {
    responses: { [responseName: string]: Response };
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocs;
    operationId?: string;
    produces?: [string];
    consumes?: [string];
    parameters?: [PathParameter|QueryParameter|BodyParameter];
    schemes?: [string];
    deprecated?: boolean;
    security?: [Secuirty]
  }

  export interface Definition {

  }

  export interface Response {
    description: string;
    // schema?: Schema;
    headers?: { [headerName: string]: Header };
    examples?: { [exampleName: string]: Example };
  }

  export interface Example {

  }

  export interface Header {
    type: string;
    // format?: string;
    // items?: {} // todo
    // format?: string;
    // items?: // TODO
    // collectionFormat?:
    // default?:
    // maximum?:
    // exclusiveMaximum?:
    // minimum?:
    // exclusiveMinimum?:
    // maxLength?:
    // minLength?:
    // pattern?:
    // maxItems?:
    // minItems?:
    // uniqueItems?:
    // enum?: [];
    // multipleOf?:
    // description?:
  }

  export interface Secuirty {

  }

  export interface SecurityDefinition {

  }

  export interface BasicAuthenticationSecurity {}
  export interface ApiKeySecurity {}
  export interface Oauth2ImplicitSecurity {}
  export interface Oauth2PasswordSecurity {}
  export interface Oauth2ApplicationSecurity {}
  export interface Oauth2AccessCodeSecurity {}

  export interface Tag {
    name: string;
    description?: string;
    externalDocs?: ExternalDocs;
  }


  export interface Spec {
    swagger: string;
    info: Info;
    host?: string;
    basePath?: string;
    schemes?: [string];
    consumes?: [string];
    produces?: [string];
    paths: {[pathName: string]: Path}
    definitions?: {[definitionsName: string]: Definition }
    parameters?: {[parameterName: string]: BodyParameter|QueryParameter}
    responses?: {[responseName: string]: Response }
    security?: [Secuirty]
    securityDefinitions?: { [securityDefinitionName: string]: SecurityDefinition}
    tags?: [Tag]
  }
}