function letMeKnow (size, callback) {
    var reducer = 0
    for (let i = 1; i < size; i++) {
        reducer = Math.sin(reducer * i)
        
    }
    callback()
}

letMeKnow(1000000000, () => console.log('It completed'))