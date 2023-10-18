mod another_lib;
use another_lib::another_mod;

fn outsider() {
    another_mod::another_fn();
    println!("outsider fn!");
}

pub mod learning_rust {

    mod top_level {
        pub fn hi_there() {
            println!("hi there!");
        }
        
        pub mod low_level {
            pub fn hello_world() {
                println!("hello world!");
            }
        }
    }

    pub trait Log {
        fn display_info(&self);
        fn alert_something(&self) {
            println!("Default implementation of alert");
        }
    }

    #[derive(Debug)]
    pub enum PersonId {
        Passport(u32),
        IndentityCard(u32, u32),
    }

    impl std::fmt::Display for PersonId {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            match self {
                PersonId::Passport(x) => {
                    write!(f, "this is my passport: {}", x)
                },
                PersonId::IndentityCard(a, b) => {
                    write!(f, "this is my id: {}, {}", a, b)
                }
            } 
        }
    }
    
    pub struct Person {
        name: String,
        last_name: String,
        age: u32,
        pub id: PersonId
    }

    pub struct Animal(pub String);

    impl Log for Animal {
        fn display_info(&self) {
            println!("{}", self.0);
        }
        
        fn alert_something(&self) {
            println!("woooof");
        }
    }

    impl Log for Person {
        fn display_info(&self) {

            // crate::outsider();
            
            // super -> going outside of current module, .../
            super::outsider();

            // absolute path
            crate::learning_rust::top_level::hi_there();
            crate::learning_rust::top_level::low_level::hello_world();

            // relative path
            top_level::hi_there();
            top_level::low_level::hello_world();

            println!("{} {}; {}; {:?}", self.name, self.last_name, self.age, self.id);
        }
    }

    impl Person {
        pub fn new() -> Person {
            Person {
                name: "Daniel".to_string(),
                last_name: "Vieira".to_string(),
                age: 0,
                id: PersonId::Passport(89234)
            }
        }
        
        pub fn _from(name: String, last_name: String, age: u32, id: PersonId) -> Person {
            Person {
                name,
                last_name,
                age,
                id
            }
        }

        pub fn name(&self) -> &String {
            &self.name
        }
    }

    // impl makes the compiler determine type at the compile time
    pub fn log_info(val: &impl Log) {
        val.alert_something();
    }

    // dyun says that the fucntion should perform dynamic dispatch
    // decission of exactly which function to call at the runtime
    pub fn log_info_2(val: &dyn Log) {
        val.alert_something();
    }
}