let arr = [];

for ( let i = 0; i < 6; i++ ) {
    let num = prompt();
    if ( num % 2 != 0 ) {
        let a = arr.length;
        arr[a] = num;
    }
}