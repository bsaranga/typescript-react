// Set
const userIds = [1, 3, 4, 1, 2];
const uniqueUserIds = new Set(userIds);
uniqueUserIds.add(10);
console.log(uniqueUserIds);
console.log(uniqueUserIds.has(3));
// Map
const mappedEmp = new Map();
mappedEmp.set('saranga', { fullName: 'Saranga Buwaneka', id: 1 });
mappedEmp.set('jon', { fullName: 'John Skeet', id: 4 });
mappedEmp.set('elii', { fullName: 'Eli Star', id: 2 });
mappedEmp.set('nic', { fullName: 'Nicole A', id: 5 });
console.log(mappedEmp.get('nic'));
console.log(mappedEmp.size);
mappedEmp.forEach(t => console.log(t));
