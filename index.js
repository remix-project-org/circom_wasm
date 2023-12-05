import listJson from './list.json'

export const compiler_list = Object.assign({}, listJson)

// make 2.1.6 the default
export * from "./v2.1.6/index.js"