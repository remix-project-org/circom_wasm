import { __wbg_set_wasm } from "./circom_wasm_bg.js"
import('./circom_wasm_bg.wasm')
  .then(wasm => {
    __wbg_set_wasm(wasm)
  })
  .catch(e => {
    // handle any errors here
    console.error('Error importing `circom_wasm_bg.wasm`:', e)
  })
export * from "./circom_wasm_bg.js"
