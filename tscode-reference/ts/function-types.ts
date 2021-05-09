type Run = (miles: number) => boolean // function type

let runner : Run = function(miles: number) : boolean{
    if (miles > 10){
        return true
    }else{
        return false
    }
}

console.log(runner(5))
console.log(runner(15))