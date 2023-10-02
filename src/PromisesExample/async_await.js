function fetch (url){
    return new Promise((resolve, reject) => {

        //some operation like reading a file or fetching data online
        const longOperation = true

        if(longOperation) {
            resolve('Success')
        }
        else {
            reject("Error")
        }
    })
}

async function promiseFunction(url){
    try {
        return await fetch(url)
    } catch (error) {
        console.log("Handle error")
    }
}

promiseFunction("someURL")
    .then((result) => {
        console.log("result")
    })
    .catch((error) => {
        console.log("error")
    })