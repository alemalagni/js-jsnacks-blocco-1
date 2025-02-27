const p1 = prompt();
const p2 = prompt();

if ( p1.length < p2.length ) {
    console.log(p1)
    console.log(p2)
} else if ( p1.length > p2.length ) {
    console.log(p2)
    console.log(p1)
} else if ( p1.length === p2.length ) {
    console.log(p1)
    console.log(p2)
}
