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

  interface BaseParameter {
    name: string;
    in: string;
    required?: boolean;
    description?: string;
  }

  export interface BodyParameter extends BaseParameter {
    schema?: Schema;
  }

  export interface QueryParameter extends BaseParameter, BaseSchema {
    type: string;
    allowEmptyValue?: boolean;
  }

  export interface PathParameter extends BaseParameter {

  }

  export interface HeaderParameter extends BaseParameter {

  }
  
  export interface FormDataParameter extends BaseParameter, BaseParameter {
    collectionFormat?: string;
  }

  export interface Path {
    $ref?: string;
    get?: Operation;
    put?: Operation;
    post?: Operation;
    delete?: Operation;
    options?: Operation;
    head?: Operation;
    patch?: Operation;
    parameters?: [BodyParameter|FormDataParameter|QueryParameter|PathParameter|HeaderParameter];
  }

  export interface Operation {
    responses: { [responseName: string]: Response };
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocs;
    operationId?: string;
    produces?: [string];
    consumes?: [string];
    parameters?: [BodyParameter|FormDataParameter|QueryParameter|PathParameter|HeaderParameter];
    schemes?: [string];
    deprecated?: boolean;
    security?: [Secuirty]
  }

  interface BaseSchema {
    format?: string;
    title?: string;
    description?: string;
    default?: string|boolean|number|Object;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    enum?: [string|boolean|number|Object];
    type?: string;
    items?: Schema|[Schema];
  }

  export interface Schema extends BaseSchema {
    $ref?: string;
    allOf?: [Schema];
    additionalProperties?: boolean;
    properties?: {[propertyName: string]: Schema};
    discriminator?: string;
    readOnly?: boolean;
    // xml: XML; // TODO
    externalDocs?: ExternalDocs;
    example?: {};
    required?: [string];
}

  export interface Response {
    description: string;
    schema?: Schema;
    headers?: { [headerName: string]: Header };
    examples?: { [exampleName: string]: Example };
  }

  export interface Example {

  }

  export interface Header extends BaseSchema {
    type: string;
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
    definitions?: {[definitionsName: string]: Schema }
    parameters?: {[parameterName: string]: BodyParameter|QueryParameter}
    responses?: {[responseName: string]: Response }
    security?: [Secuirty]
    securityDefinitions?: { [securityDefinitionName: string]: SecurityDefinition}
    tags?: [Tag]
  }
}