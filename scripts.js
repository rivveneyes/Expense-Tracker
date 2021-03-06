const spentAmount=document.getElementById("cash-value")
const date = document.getElementById("date");
const button= document.querySelector("button");
const tbody= document.querySelector("tbody");
const selectOption=document.querySelector("select");




let data1= 123;
let data2 = "this is words";


button.addEventListener("click", e=>{
     let  spentString= spentAmount;
     let dateInput=dateFixer(date.value);
     let typeSpent=selectOption.value;
     let newRow =tableBuilder(dateInput,typeSpent,data2,"this");
     tbody.appendChild(newRow);

     console.log(spentString.value)



})


//fixed returned date from input filed from yyyy/mm/dd to mm/dd/yyyy
function dateFixer(offDate){
    let year =offDate.slice(5);
    year+="-"+offDate.slice(0,4);
    return year
}


function tableBuilder(date,type,amount,desc){
    let tableRow=document.createElement("tr");
    tableRow.innerHTML=
    `<td>${date}</td>
    <td>${type}</td>
    <td>${amount}</td>
    <td>${desc}</td>`
    return tableRow;
}