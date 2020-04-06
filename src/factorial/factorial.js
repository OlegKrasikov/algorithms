'use strict';

let n;

window.factorial = n => {
    if (n < 0) {
        return `WTF??`;
    } 
    let factorial = 1 
    for (let a = 1; a <= n; a++) {
        factorial *= a;
    }
        return factorial;
};
