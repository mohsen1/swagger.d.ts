declare module Swagger {
  export interface Info {
    title: string;
    description: string;
    version: string;
  }
	

  export interface Spec {
    info: Info;
		host: string;
		basePath: string;
		swagger: string;
  }
}