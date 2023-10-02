export const fetchDataConst = new Promise((resolve, reject) => {
    //fetching process
    console.log("no Url can be past here")
})

fetchDataConst("this url will not be used")
    .then(() => {
        console.log("then")
    })
    .catch(() => {
        console.log("catch")
    })

    

export function fetch(urlToFetch) {
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

fetch("url")
    .then(() => {
        console.log("then")
    })
    .catch(() => {
        console.log("catch")
    })