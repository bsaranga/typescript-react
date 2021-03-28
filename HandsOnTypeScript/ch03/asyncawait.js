async function fetchFromServer() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Got data')
        }, 1500);
    })
}

(async function execAsync() {
    const result = await fetchFromServer()
    console.log(result)
})()

fetchFromServer().then(d => console.log(d))