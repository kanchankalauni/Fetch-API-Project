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


async function api(num1, num2){
    try {
        let response = await fetch(`https://apicodethread.cyclic.app/sum?a=${num1}&b=${num2}`)
        let result = await response.json()
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

document.getElementById("btn").addEventListener('click', () => {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    api(num1,num2)
})