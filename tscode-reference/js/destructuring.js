function getEmp() {
    return {
        name: 'sf798',
        age: 22,
        addres: 'skdjhfoi7982 09qu79r8oq3iuhj',
        country: 'Local Disk'
    };
}
const { name: fullName, age } = getEmp();
console.log(fullName, age);
