let a = Number(prompt("Wpisz pierwszą liczbę:"));
let działanie = (prompt("Wpisz rodzaj działana(+,-,*,/):"));
let b = Number(prompt("Wpisz drugą liczbę:"));
if (działanie === "+") {
    console.log(a + b);
    } else if (działanie === "-") {
    console.log(a - b);
    } else if (działanie === "*") {
    console.log(a * b);
    } else if (działanie === "/") {
   console.log(a / b);
    } else {
   console.log("błąd");
    }