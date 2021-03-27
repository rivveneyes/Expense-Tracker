const date = document.getElementById("date");
const tbody= document.querySelector("tbody");
const selectOption=document.querySelector("select");
const spentAmount=document.getElementById("cash-value");
const itemDescription=document.querySelector(".item-description");
const addButton= document.getElementById("add-button");
const deleteButton=document.getElementById("remove-button");
//==========EVENT LISTENERS=======
addButton.addEventListener("click", ()=>{
    const dateInput=date.value;
    const typeSpent=selectOption.value;
    const numberSpent=stringToNumber(spentAmount.value);
    const spentDetails=itemDescription.value;
    let completedChecks=false;
    completedChecks=inputChecker(dateInput,typeSpent,numberSpent,spentDetails);
    if(completedChecks ===false){
        return;
    }else {
    const newRow =tableBuilder(dateInput,typeSpent,numberSpent,spentDetails);
    tbody.appendChild(newRow);
    fieldClear()
}})
tbody.addEventListener("click", (e)=>{
    seletedColorChanger(e.target);
})
deleteButton.addEventListener("click",()=>{
     const trAll=document.querySelectorAll("tr");
     trAll.forEach(removeSelectedItems)
      
     

})
//==========FUNCTIONS=============//
function removeSelectedItems(item){
    item.style.backgroundColor
    if(item.style.backgroundColor ==="red"){
    tbody.removeChild(item);
    }
}
//fixed returned date from input filed from yyyy/mm/dd to mm/dd/yyyy
function dateFixer(offDate){
   if (offDate==""){
       return ;
   }
    let year =offDate.slice(5);
    year+="-"+offDate.slice(0,4);
    return year
}
//build complete table once check have bee maid
function tableBuilder(date,type,amount,desc){

    let tableRow=document.createElement("tr");
    tableRow.innerHTML=
    `<td>${date}</td>
    <td>${type}</td>
    <td>${amount}</td>
    <td>${desc}</td>`
    return tableRow;
    
}
//convert user number input to string
function stringToNumber(numString){
    let newNum=parseFloat(numString);
    newNum=newNum.toFixed(2);
    return newNum;
}
//checks every input field for empty fields 
function inputChecker(dateInput,typeSpent,numberSpent,spentDetails){
if(dateInput===undefined){
    alert("please pick a date");
    return false;
}
else if(typeSpent===""){
    alert("please pick a type of currency");
    return false;
}
else if(numberSpent<=0 || numberSpent=="NaN"){
    alert("please enter amount over $0");
return false;
}
else if (spentDetails===""){
     alert("please enter spent desc");
     return false;
}
return true;
}
//clear all input field after data taken
function fieldClear(){
    date.value="";
    selectOption.value="";
    spentAmount.value="";
    itemDescription.value="";}
 function seletedColorChanger(option){   
    if( option.tagName==="TD"){
            const selectRow=option.parentNode;
            if(selectRow.style.backgroundColor==="red"){
                selectRow.style.backgroundColor="white";
                
            }
            else{selectRow.style.backgroundColor="red"}
            }
        }
       