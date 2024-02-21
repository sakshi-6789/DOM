const dcbtn = document.getElementById("dcbtn")
const icbtn = document.getElementById("icbtn")
const resetbtn = document.getElementById("resetbtn")
const display = document.getElementById("display")

//for Decrement Button
dcbtn.addEventListener("click", () => {
    const value = Number(display.innerText)
    if(value > 0){
        display.innerText = value -1
    }else{
        alert("Negative values are not allowed")
    }
})

//for Increment button
icbtn.addEventListener("click", () => {
    const value = Number(display.innerText)
    if(value < 10){
        display.innerText = value + 1
    }else{
        alert("Value above 10 is not applicable")
    }
})

//reset button
resetbtn.addEventListener("click", () => {
    display.innerText = 0
})