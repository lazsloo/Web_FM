var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users[1].age)
console.log(users[0])

var info = 0
for(var personInfo in users) {
    console.log(users[personInfo].name + " - " + users[personInfo].age)
}
console.log(users.length)