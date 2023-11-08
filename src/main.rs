
// use rs_udemy_wasm::learning_rust::{Person, Animal, Log, log_info, log_info_2, PersonId};
use rs_udemy_wasm::learning_rust::{Person, PersonId, Log};

fn main() {

    let person = Person::new();
    
    let id = PersonId::IndentityCard(231, 412314);
    println!("{:?}", id);
    println!("{}", person.name());
    
    person.display_info();
    
    println!("{}", id);
    println!("{}", person.id);
}

// cargo run
//    Compiling rs_udemy_wasm v0.1.0 (/Users/danielvieira/Sandbox/RUST/rs_udemy_wasm)
//     Finished dev [unoptimized + debuginfo] target(s) in 0.09s
//      Running `/Users/danielvieira/Sandbox/RUST/rs_udemy_wasm/target/debug/rs_udemy_wasm`
// IndentityCard(231, 412314)
// Daniel
// another_fn called!
// outsider fn!
// hi there!
// hello world!
// hi there!
// hello world!
// Daniel Vieira; 0; Passport(89234)
// this is my id: 231, 412314
// this is my passport: 89234