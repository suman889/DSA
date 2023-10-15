let a = [10, 5, 9, 6]
let b = [5, 6, 8, 3, 2]

function common(a, b) {

    let newArr = []
    for (let i = 0; i < a.length; i++) {
        let sam = a[i];
        for (j = 0; j < b.length; j++) {
            let sam2 = b[j];

            if (sam == sam2) {
                newArr.push(sam)
            }
        }
    };
    return newArr;

};

console.log(common(a, b))

/**
 * Output:

[ 5, 6 ]
 */