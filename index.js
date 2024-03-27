// Without using Await
// async function api(){
//     let response = fetch("https://apicodethread.cyclic.app")
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
// }
// api()


// With using Await

let num1 = 5 
let num2 = 6 
async function api(){
    try {
        let response = await fetch(`https://apicodethread.cyclic.app/sum?a=${num1}&b=${num2}`)
        let result = await response.json()
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
api()