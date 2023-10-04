/* tslint:disable */
/* eslint-disable */
/**
* @param {string} file_name
* @param {any} sources
* @param {any} config
* @returns {CompilationResult}
*/
export function compile(file_name: string, sources: any, config: any): CompilationResult;
/**
* @param {string} file_name
* @param {any} sources
* @returns {string}
*/
export function parse(file_name: string, sources: any): string;
/**
* @param {string} file_name
* @param {any} sources
* @param {any} config
* @returns {R1csResult}
*/
export function generate_r1cs(file_name: string, sources: any, config: any): R1csResult;
/**
*/
export class CompilationResult {
  free(): void;
/**
* @returns {Uint8Array}
*/
  program(): Uint8Array;
/**
* @param {string} name
* @returns {Array<any>}
*/
  input_signals(name: string): Array<any>;
/**
* @returns {any}
*/
  report(): any;
}
/**
*/
export class R1csResult {
  free(): void;
/**
* @returns {Uint8Array}
*/
  program(): Uint8Array;
/**
* @returns {any}
*/
  report(): any;
}

/**
 * Compiler lists info
 */
export const compiler_list: {
  latest: string;
  versions: string[];
  license: string;
  wasm_builds: {
      [key: string]: {
          name: string;
          version: string;
          repo: string;
          build_source: string;
      };
  };
}
