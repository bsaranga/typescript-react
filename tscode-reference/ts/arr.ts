let val: unknown = 22;
val = "string value";
val = new Array();

if (val instanceof Array) {
    val.push(44);
}

console.log(val);