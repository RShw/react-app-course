const newPromise = new Promise((resolve, reject) => {

    //some operation like reading a file or fetching data online
    const longOperation = true

    if(longOperation) {
        resolve('Success')
    }
    else {
        reject("Error")
    }
})

newPromise
    .then(result => {
        console.log("Result", result)
    })
    .catch(error => {
        console.log("Error", error)
    })
    .then(() => {
        console.log("finally")
    })

newPromise
    .then(result => {
        //compute success
        console.log(result)
        return "computedResult"
    })
    .then(computedResultFromPrecedentThen => {
        //the précedent .then compute so this .then is called
        console.log(computedResultFromPrecedentThen)
        throw new Error('Error')
    })
    .then(() => {
        //the precedent .then throw an error, so this Then is ignored
        console.log("Ignored Then")
    })
    .catch(error => {
        //this catch is the first to come after the throw so this one is called
        console.log(error)
        throw new Error('Error again')
    })
    .catch((error) => {
        //the precedent catch has thrown an error, so this catch is called
        console.log(error)
        return "someData"
    })
    .catch(e => {
        //the precedent catch haven't throw an error, so this one is ingored
        console.log("catch ingored")
    })
    .then((someDataFromPrecedentThen) => {
        //This is the first .then without thrown, so this then is called
        console.log(someDataFromPrecedentThen)
    })
    .catch((error) => {
        //The précedent .then haven't thorwn any error, so this catch is ignored
        console.log("Ignored Catch")
    })
    .finally(() => {
        //call every time after a success or an error
        console.log("First final action to make")
    })
    .finally(() => {
        //It's possible to chain finally too
        console.log("Second final action to make")
    })