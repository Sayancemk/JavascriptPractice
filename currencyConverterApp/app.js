const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let amountClass=document.querySelector(".amount")
let amountValue=amountClass.ariaValueMax;
let dropDownSelect=document.querySelectorAll(".dropdown select")


for(let select of dropDownSelect){
    for (let codes in countryList){
        let newElement=document.createElement("option");
        newElement.innerText = codes;
        newElement.value = codes;
        if(select.name==="from" && codes==="USD"){
            newElement.selected="selected"
        }else if(select.name==="To" && codes==="INR"){
            newElement.selected="selected"
        }
        select.append(newElement)
    }
 select.addEventListener("change",(event)=>{
    updateFlag(event.target)
 })
}

let updateFlag=(element)=>{
    const currecyCode=element.value;
    let countryValue=countryList[currecyCode];
    let newImageSrc=`https://flagsapi.com/${countryValue}/flat/64.png`
    let imgageId=element.parentElement.querySelector("img")
    imgageId.src=newImageSrc;
    
}
