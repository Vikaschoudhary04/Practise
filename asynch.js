const requestUrl = 'https://api.github.com/users/vikaschoudhary04'
const xhr = new XMLHttpRequest()

xhr.open('GET', requestUrl)
console.log("here");
xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(data);
        console.log(data.followers);
        console.log(data.following);
        
    }
}


xhr.send()