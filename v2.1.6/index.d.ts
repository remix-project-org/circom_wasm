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
* @returns {ParseResult}
*/
export function parse(file_name: string, sources: any): ParseResult;
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
/**
* @returns {Array<any>}
*/
  log(): Array<any>;
}
/**
*/
export class ParseResult {
  free(): void;
/**
* @returns {any}
*/
  report(): any;
/**
* @param {number} report_id
* @returns {any}
*/
  get_report_name(report_id: number): any;
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
/**
* @returns {Array<any>}
*/
  log(): Array<any>;
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

/**
* @param {any} wasm_build
* @param {string} input
* @returns {Uint8Array}
*/
export function generate_witness(wasm_build: any, input: string): Uint8Array;
