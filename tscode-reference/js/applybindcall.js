var callerObj = {
    name: 'saranga'
};
function checkThis(age) {
    console.log(this);
    console.log(this.name);
    this.age = age;
    console.log(this.age);
}
checkThis.call(callerObj, 27);
console.log(callerObj);
