function longProcess() {
    let jk = 0
    let k = 1
    for (let i = 0; i < 15000; i++) {
        jk += i
        for (let j = 0; j < 15000; j++) {
            k += j
            jk /= k
        }
    }
}

console.log('Started')

setTimeout(() => {
    longProcess()
    console.log('Done')
}, 0);

console.log('Done yet?')