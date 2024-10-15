
// object literals
const mySym = Symbol("key1")

const user = {
    name: "vikas",
    age: 21,
    [mySym]: "mykey1",
    location: "chandigarh",
    email: "vikas407@gmail.com",
}

// console.log(user.age);
// console.log(user["email"])
// console.log(user);

// user.greeting = function(){
//     console.log("hello java script user");
    
// }
// console.log(user.greeting());

// user.greetingTwp = function(){
//     console.log(`hello javascript user, ${this.email}`);
    
// }
// console.log(user.greetingTwp())

// object constructor

const tinderuser = {}

tinderuser.id = "125abcc"
tinderuser.name = "jack"
tinderuser.isLoggedin = false

// console.log(tinderuser);

const regularUser = {
    email: "vikas40172.com",
    fullname: {
        userfullname: {
            firstname: "vikas",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(users);

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "java script",
    price: "789",
    courseInstructor: "codergang",
}

const {courseInstructor: instructor} = course
// console.log(instructor);

{
        "name": "vikas",
        "coursename": "java script",
        "price": "free"
    }
    