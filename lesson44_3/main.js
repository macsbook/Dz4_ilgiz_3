const som = document.querySelector("#som")
const usd = document.querySelector("#usd")

const submit = (elem, target) => {
    elem.addEventListener("input", () =>{
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader('content-type', 'application/json')
        request.send()
        request.addEventListener('load', () => {
            const respons = JSON.parse(request.response)
            if (elem === som){
                target.value = (elem.value / respons.som).toFixed(2)
            }else if (elem === usd){
                target.value = (elem.value * respons.som).toFixed(2)
            }
            elem.value === "" ? (target.value = '') : null
        })
    })
}
submit(som, usd)
submit(usd, som)

