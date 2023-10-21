use wasm_bindgen::prelude::*;

// Use `wee_alloc` as the global allocator.
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn greet(name: &str) {
    // println!("Hi there {}", name);
    alert(name);
}

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

// wasm-pack build --target web