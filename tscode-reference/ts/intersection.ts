interface type1 {
    name: string
    age: number
}

interface type2 {
    job: string
    dob: number
}

let object : type1 & type2 = {
    name: "jshdfkjsdf",
    age: 23,
    job: "dshfsidukfj",
    dob: 3874
}