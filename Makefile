all: b

i:
	cargo init

r:
	cargo run
	
	
b:
	wasm-pack build --target web