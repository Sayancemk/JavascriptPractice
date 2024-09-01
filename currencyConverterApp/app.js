const BASE_URL =
    "https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurr}";

    let Uri="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}"
    let dropDownSelect = document.querySelectorAll(".dropdown select")
let button = document.querySelector("form button");
let fromCurr=document.querySelector(".from select")
let toCurr=document.querySelector(".to select")
const msg = document.querySelector(".msg");

for (let select of dropDownSelect) {
    for (let codes in countryList) {
        let newElement = document.createElement("option");
        newElement.innerText = codes;
        newElement.value = codes;
        if (select.name === "from" && codes === "USD") {
            newElement.selected = "selected"
        } else if (select.name === "To" && codes === "INR") {
            newElement.selected = "selected"
        }
        select.append(newElement)
    }
    select.addEventListener("change", (event) => {
        updateFlag(event.target)
    })
}

let updateFlag = (element) => {
    const currecyCode = element.value;
    let countryValue = countryList[currecyCode];
    let newImageSrc = `https://flagsapi.com/${countryValue}/flat/64.png`
    let imgageId = element.parentElement.querySelector("img")
    imgageId.src = newImageSrc;

}
let updateExchange=async()=>{
    let amountInput = document.querySelector(".amount input");
    let amountValue = amountInput.value;
    if (amountValue === '' || amountValue < 0) {
        amountValue = 1;
        amountInput.value = "1";
    }
    // console.log(fromCurr.value,toCurr.value);
    try{
    const response = await fetch(BASE_URL);
    console.log(response)
    const data = await response.json();
    // let rate=json[fromCurr][toCurr]
    }catch(err){
        console.log(err)
    }
    // let finalAmount = amtVal * rate;
    // msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    updateExchange();
})

window.addEventListener("load", () => {
    updateExchange();
  });

