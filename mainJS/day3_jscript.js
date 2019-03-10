

// JavaScript codes for Day 2
let buttonSubmit = document.getElementById('btnSubmit');


// buttonSubmit.addEventListener('click', ($event) =>{

    buttonSubmit.onclick = ($event) =>{

    $event.preventDefault();
    const inputName = document.getElementById('firstName');

    // Validate user input
    if (inputName.value.length === 0){
        alert ('Fullname is missing!')
        inputName.focus();
    }else{
        alert('Name: ' + inputName.value);
    }
};
// });


  // access Radiobuttons DOM elements
  const Radiobuttons = document.getElementsByName('gender');
  Array.from(Radiobuttons).forEach(function(radio, index, arr){
    radio.onclick = ($event)=>{
        alert($event.target.value + ' Selected!');
    };
  });









// JavaScript codes for Day 3

// Function defination
function add(num1, num2){
    return num1 + num2;
}
function minus(num1, num2){
    return num1 - num2;
}
function product(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

// Access DOM elements  
const buttonCompute = document.getElementById("btnCompute");
const calcRadioBtns = document.getElementsByName('operation');
const calcResult = document.getElementById('calcAns');
const operartion_Btns =document.getElementById('radioBtnOper');
const num1_Error = document.getElementById('Num1Error');
const num2_Error = document.getElementById('Num2Error');
const oper_Error = document.getElementById('operError');


let textno1 = document.getElementById("txtboxnum1");
let textno2 = document.getElementById('txtboxnum2');

buttonCompute.addEventListener('click', function(){

    // Validate user input
  if (textno1.value.length === 0) {
        num1_Error.classList.remove('d-none');
        num1_Error.classList.add('d-block');
        textno1.focus();
    }
        
    else if(textno2.value.length == 0){
        num2_Error.classList.remove('d-none');
        num2_Error.classList.add('d-block');
        textno2.focus();
    } 
  
    else if (buttonCompute.textContent === 'Clear'){
      textno1.value=  '';
      textno2.value = '';
      textno1.focus();
      buttonCompute.textContent = "Compute"; 
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
                switch(radioObj.value){
                    case '+':{
                        calcResult.textContent = ' = ' + add(Number(textno1.value), Number(textno2.value));
                        num1_Error.classList.remove('d-block')
                        num1_Error.classList.add('d-none')
                        num2_Error.classList.remove('d-block')
                        num2_Error.classList.add('d-none')
                        buttonCompute.textContent = "Clear";
                        break;
                    }
                    case '-':{
                        calcResult.textContent = ' = ' + minus(Number(textno1.value), Number(textno2.value));
                        num1_Error.classList.remove('d-block')
                        num1_Error.classList.add('d-none')
                        num2_Error.classList.remove('d-block')
                        num2_Error.classList.add('d-none')
                        buttonCompute.textContent = "Clear";
                        break;
                    }
                    case '*':{
                        calcResult.textContent = ' = ' + product(Number(textno1.value), Number(textno2.value));
                        num1_Error.classList.remove('d-block')
                        num1_Error.classList.add('d-none')
                        num2_Error.classList.remove('d-block')
                        num2_Error.classList.add('d-none')
                        buttonCompute.textContent = "Clear";
                        break;
                    }
                    case '/':{
                        calcResult.textContent = ' = ' + divide(Number(textno1.value), Number(textno2.value));
                        num1_Error.classList.remove('d-block')
                        num1_Error.classList.add('d-none')
                        num2_Error.classList.remove('d-block')
                        num2_Error.classList.add('d-none')
                        buttonCompute.textContent = "Clear";
                        break;
                    }
                }
            }
            else{ // if no radio checked display error
                // oper_Error.classList.remove('d-none');
                // oper_Error.classList.add('d-block');
            }
      });
    }

 });