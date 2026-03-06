function logIn(name, pas){
    if (name === "admin" && pas === "1234" ){
        console.log("Hello Admin")
        }else if(name === "admin" && pas != "1234" ){
            console.log("admin-ის პაროლი არასწორია")
        }else{
            console.log(" Hello guest")
        }
};

let name = prompt("შეიყვანე სახელი:");
let pas = prompt("შეიყვანე პაროლი");

logIn(name, pas);