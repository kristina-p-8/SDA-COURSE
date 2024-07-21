

function calculate() {
     const number1=parseFloat ( document.getEementById('number1').value);
     const number2=parseFloat ( document.getEementById('number2').value);
     const operation=document.getElementById('operation').value;
     let result;

     if(operation==='add') {
        result=number1+number2;
     }else if (operation==='subtract') {
        result=number-number2;
     }

     document.getElementById('result').textContent = Result;' +result;
   }
     
