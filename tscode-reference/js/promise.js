const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Succeeded')
        reject('Failed')
    }, 1000);
})

myPromise
    .then(done => console.log(done))
    .catch(err => console.log(err))