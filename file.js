const allList = document.querySelector("select")
const input1 = document.querySelector("input:first-of-type")
const input2 = document.querySelector("input:last-of-type")

allList.onchange = 

allList.addEventListener("change", function () {
    // console.log(input1.value)
    // console.log(input2.value)

    // inputs are always strings for Javascript
    // we need to chage the data type of inputs

    if (allList.value == "+") {
        console.log()
        document.querySelector("p").innerHTML = (Number(input1.value) + Number(input2.value))
    }
    else if (allList.value == "-") {
        document.querySelector("p").innerHTML = (Number(input1.value) - Number(input2.value))
    }
    else if (allList.value == "/") {
        document.querySelector("p").innerHTML = (Number(input1.value) / Number(input2.value))
    }
    else if (allList.value == "*") {
        document.querySelector("p").innerHTML = (Number(input1.value) * Number(input2.value))
    }
    else {
        document.querySelector("p").innerHTML = (Number(input1.value) % Number(input2.value))
    }

})