const n1 = prompt();
const n2 = prompt();

if ( isNaN(n1) === false && isNaN(n2) === false ){
    if (n1 > n2) {
        console.log(n1)
    } else if ( n2 > n1 ) {
        console.log(n2)
    } else if ( n1 === n2 ) {
        console.log(n1)
    }
} else {
    console.log("Inserire due numeri validi")
}
