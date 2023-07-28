import * as wasm from "./circom_wasm_bg.wasm";
import { __wbg_set_wasm } from "./circom_wasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./circom_wasm_bg.js";
