// // const primiseOne = new Promise(function (resolve, reject) {
// //     // Do an asynch task
// //     // db calls, crytptography, newtwork related
// //     setTimeout(function () {
// //         console.log('ashynch task is complete');
// //         resolve()
// //     }, 1000)
// // })

// // primiseOne.then(function () {
// //     console.log("promise consumed");

// // })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "vikas", email: "vikas04@gmail.com" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);

// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "vikas", password: "123"})
        }else{
            reject("Error: soemthing went wrong")
        }

    },1000)

})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    

}).catch(function (error){
    console.log(error);
    
}).finally(function(){
    console.log("The promise is resolved or rejected");
    
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "vishal", password: "4017"})
            
        }else{
            reject("Error: JS went wrong")
        }
    }, 1000)

})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
}  
consumePromiseFive()  

// async function getAlluser(){
// try {
//     const response = await fetch('https://api.github.com/users/vikaschoudhary04')
//     const data = await response.json()
//     console.log(data);
    
 
// } catch (error) {
//     console.log(error);
    
// }   
// }
// getAlluser()

fetch('https://api.github.com/users/vikaschoudhary04')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
