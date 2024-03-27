const wc  = require("./witness_calculator.js");

export function generate_witness (wasm_build, input) {
    return new Promise(function (resolve, reject) {
        if (!wasm_build) return reject('Wasm circuit build is required');
        if (!input) return reject("Signal input is required");
        input = JSON.parse(input)
        const buffer = wasm_build;

        wc(buffer).then(async witnessCalculator => {
            const buff= await witnessCalculator.calculateWTNSBin(input,0);

            resolve(buff);
        }).catch(err => {
            reject(err);
        });
    });
}
