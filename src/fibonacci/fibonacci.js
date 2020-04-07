'use strict';

window.fibonacci = n => {
    let a = 0;
    let b = 1;
    for (let c = 0; c < n; c++) {
        const d = b;
        b = a + b;
        a = d;
    }

    return a;
};
