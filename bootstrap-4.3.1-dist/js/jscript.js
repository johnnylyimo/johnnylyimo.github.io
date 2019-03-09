// Access DOM elements
const button = document.getElementById("btn");
const calcRadioBtns = document.getElementsByName('operation');
const calcResult = document.getElementById('calcAns');
const radioAdd = document.getElementById('radioAdd');
let textno1 = document.getElementById("txtboxnum1");
const operartion_Btns =document.getElementById('radioBtnOper');




 button.addEventListener('click', function(){
  let textno1 = document.getElementById("txtboxnum1");
  let textno2 = document.getElementById('txtboxnum2');
  const oper_Error = document.getElementById('operError');


    // Validate user input
  if (textno1.value.length === 0) {
        alert("Either First Number is missing! \nor Invalid input(Letters/symbols not allowed!)");
        textno1.focus();
    }
        
    else if(textno2.value.length == 0){
        alert("Either Second Number is missing! \nor Invalid input(Letters/symbols not allowed!)");
        textno2.focus();
    } 
  
    else if (button.textContent === 'Clear'){
      textno1.value=  '';
      textno2.value = '';
      textno1.focus();
      button.textContent = "Compute"; 
      calcResult.textContent =' Result...';
      oper_Error.classList.remove('d-block');
      oper_Error.classList.add('d-none');
      
      // reset radio button
      for(let i=0; i<calcRadioBtns.length; i++ ) {
            if(calcRadioBtns[i].checked) {
              calcRadioBtns[i].checked = false;
            }
      }
    
    }

    else {
      Array.from(calcRadioBtns).forEach(function(radioObj, index, arr){

          if (radioObj.checked){ // is there any radio button checked?
 
            console.log('computation begin');
            if (calcRadioBtns[index].value === '-'){
              calcResult.textContent = ' = ' + (Number(textno1.value - textno2.value));
              oper_Error.classList.remove('d-block')
              oper_Error.classList.add('d-none')
              button.textContent = "Clear";
            }
            else if(calcRadioBtns[index].value === '+'){
              calcResult.textContent = ' = ' + (Number(textno1.value) + Number(textno2.value));
              oper_Error.classList.remove('d-block')
              oper_Error.classList.add('d-none')
              button.textContent = "Clear";
              
            } 
            else if(calcRadioBtns[index].value === '*'){
              calcResult.textContent = ' = ' + (Number(textno1.value) * Number(textno2.value));
              oper_Error.classList.remove('d-block')
              oper_Error.classList.add('d-none')
              button.textContent = "Clear";
            }
            else if(calcRadioBtns[index].value === '/'){
              calcResult.textContent = ' = ' + (Number(textno1.value) / Number(textno2.value));
              oper_Error.classList.remove('d-block')
              oper_Error.classList.add('d-none')
              button.textContent = "Clear";
            }          
        }

        else { // No radio button checked, display error
            oper_Error.classList.remove('d-none');
            oper_Error.classList.add('d-block');
        }
      });
    }

 });