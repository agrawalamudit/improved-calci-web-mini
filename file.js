const allList = document.querySelector("select")
const input1 = document.querySelector("input:first-of-type")
const input2 = document.querySelector("input:last-of-type")

allList.onchange = 

allList.addEventListener("change", function () {
        //switch case
        switch(allList.value){
            case "+":
                document.querySelector("p").innerHTML = (Number(input1.value) + Number(input2.value));
                break;
            case "-":
                document.querySelector("p").innerHTML = (Number(input1.value) - Number(input2.value));
                break;
            case "/":
                document.querySelector("p").innerHTML = (Number(input1.value) / Number(input2.value))
                break;
            case "*":
                document.querySelector("p").innerHTML = (Number(input1.value) * Number(input2.value));
                break;
            case "%":
                document.querySelector("p").innerHTML = (Number(input1.value) % Number(input2.value));
                break;
        
            }

})