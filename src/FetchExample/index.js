//url
const url = 'https://api.kanye.rest/'

const fetchKanye = (url) => {
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log("Kanye", json);
    })
    .catch(error => {
        console.error(error);
    });
}

fetchKanye(url);

// const fetchKanye = async (url) => {

//     try {
//         const response = await fetch(url)
//         const json = await response.json()
//         console.log("Kanye", json)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchKanye(url)