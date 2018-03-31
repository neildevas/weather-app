var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500)
    })
}
asyncAdd(1, 5).then((result) => {
    console.log('Result: ', result);
    return asyncAdd(result, '8');
})
.then((result) => {
    console.log('Should be 14: ', result);
})
.catch((errorMessage) => {
    console.log(errorMessage);
})
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Hey. It worked!');
//         reject('Unable to fulfill promise');
//     }, 2500);
// 