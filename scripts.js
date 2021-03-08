const spentAmount=document.getElementById("cash-value");
const date = document.getElementById("date");
const button= document.querySelector("button");
const tbody= document.querySelector("tbody");
const selectOption=document.querySelector("select");
const itemDescription=document.querySelector(".description");



// // /test one
// let phrase="the Quick 1b2r3o4w5n6 quick fox jumped over the cow";
// let reg = /[a-t*]/gi;

// let results =reg.test(phrase)
// let reSults = phrase.match(reg);
// console.log(results);
// console.log(reSults);


// let secondReg= /[2-4]/g;
// let resUlts = phrase.match(secondReg);
// console.log(resUlts);
// // test two


const data2= "DUMMY NUMBER"
button.addEventListener("click", e=>{
     let  spentString= spentAmount.value;
     let dateInput=dateFixer(date.value);
     let typeSpent=selectOption.value;
     let spentDetails= itemDescription.value;
     let newRow =tableBuilder(dateInput,typeSpent,data2,spentDetails);

     tbody.appendChild(newRow);
     console.log(spentString)

     //+++=======+++

    
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
