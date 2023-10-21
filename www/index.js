
async function init() {

  const memory = WebAssembly.Memory({initial: 1})

  const importObject = {
    js: {
      mem: memory
    },
    console: {
      log: () => {
        console.log("just logging something!");
      },
      error: () => {
        console.log("I am just error");
      },
    },
  };

  const response = await fetch("sum3.wasm");
  const buffer = await response.arrayBuffer();
  const wasm = await WebAssembly.instantiate(buffer, importObject);

  const sumFunction = wasm.instance.exports.sum
  const wasmMemory = wasm.instance.exports.mem
  const uint8Array = new Uint8Array(wasmMemory.buffer, 0, 7)
  
  const hiText = new TextDecoder().decode(uint8Array)  
  console.log(hiText)

  const result = sumFunction(300, 5999);
  console.log(result);
}

init();
