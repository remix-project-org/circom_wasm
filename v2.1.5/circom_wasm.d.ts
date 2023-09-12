/* tslint:disable */
/* eslint-disable */
/**
* @param {string} file_name
* @param {any} sources
* @param {any} config
* @returns {Uint8Array}
*/
export function compile(file_name: string, sources: any, config: any): Uint8Array;
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
* @returns {Uint8Array}
*/
export function generate_r1cs(file_name: string, sources: any, config: any): Uint8Array;
/**
* @param {any} wasm_build
* @param {string} input
* @returns {Uint8Array}
*/
export function generate_witness(wasm_build: any, input: string): Uint8Array;
