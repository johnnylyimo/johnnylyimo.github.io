

// Function defination
const oper_Error = document.getElementById('operError');
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


let textno1 = document.getElementById("txtboxnum1");
let textno2 = document.getElementById('txtboxnum2');




textno1.addEventListener('focusout'){
  if (textno1.value.length === 0) {
        num1_Error.classList.remove('d-none');
        num1_Error.classList.add('d-block');
        textno1.focus();
}








//
// buttonCompute.addEventListener('click', function(){
//
//     // Validate user input
//   if (textno1.value.length === 0) {
//         num1_Error.classList.remove('d-none');
//         num1_Error.classList.add('d-block');
//         textno1.focus();
//     }
//
//     else if(textno2.value.length == 0){
//         num2_Error.classList.remove('d-none');
//         num2_Error.classList.add('d-block');
//         textno2.focus();
//     }
//
//     else if (buttonCompute.textContent === 'Clear'){
//       textno1.value=  '';
//       textno2.value = '';
//       textno1.focus();
//       buttonCompute.textContent = "Compute";
//       calcResult.textContent =' Result...';
//       oper_Error.classList.remove('d-block');
//       oper_Error.classList.add('d-none');
//
//       // reset radio button
//       for(let i=0; i<calcRadioBtns.length; i++ ) {
//             if(calcRadioBtns[i].checked) {
//               calcRadioBtns[i].checked = false;
//             }
//       }
//
//     }
//
//     else {
//
//         Array.from(calcRadioBtns).forEach(function(radioObj, index, arr){


          //
          // if (!radioObj.checked){
          //   oper_Error.classList.remove('d-none');
          //   oper_Error.classList.add('d-block');
          //   buttonCompute.disabled= true;
          //
          // }
          // else {
          //   radioObj.addEventListener('change', ($event)=>{
          //     // buttonCompute.disabled= false;
          //
          //     switch ($event.target.value) {
          //       case '+':{
          //         console.log("ADDITION TAKE PLACE");
          //         calcResult.textContent = ' = ' + add(Number(textno1.value), Number(textno2.value));
          //                    num1_Error.classList.remove('d-block')
          //                    num1_Error.classList.add('d-none')
          //                    num2_Error.classList.remove('d-block')
          //                    num2_Error.classList.add('d-none')
          //                    buttonCompute.textContent = "Clear";
          //         break;
          //       }
          //       case '-':{
          //         calcResult.textContent = ' = ' + minus(Number(textno1.value), Number(textno2.value));
          //          num1_Error.classList.remove('d-block')
          //          num1_Error.classList.add('d-none')
          //          num2_Error.classList.remove('d-block')
          //          num2_Error.classList.add('d-none')
          //          buttonCompute.textContent = "Clear";
          //         break;
          //       }
          //
          //
          //
          //       default:{
          //         console.log("No selection");
          //         break;
          //       }
          //     } // end case
          //   }) //end addEventListener
          // } // end else
          //





// OTHER WAY


          //   if (radioObj.checked){ // is there any radio button checked?
          //       switch(radioObj.value){
          //           case '+':{
          //               calcResult.textContent = ' = ' + add(Number(textno1.value), Number(textno2.value));
          //               num1_Error.classList.remove('d-block')
          //               num1_Error.classList.add('d-none')
          //               num2_Error.classList.remove('d-block')
          //               num2_Error.classList.add('d-none')
          //               buttonCompute.textContent = "Clear";
          //               break;
          //           }
          //           case '-':{
          //               calcResult.textContent = ' = ' + minus(Number(textno1.value), Number(textno2.value));
          //               num1_Error.classList.remove('d-block')
          //               num1_Error.classList.add('d-none')
          //               num2_Error.classList.remove('d-block')
          //               num2_Error.classList.add('d-none')
          //               buttonCompute.textContent = "Clear";
          //               break;
          //           }
          //           case '*':{
          //               calcResult.textContent = ' = ' + product(Number(textno1.value), Number(textno2.value));
          //               num1_Error.classList.remove('d-block')
          //               num1_Error.classList.add('d-none')
          //               num2_Error.classList.remove('d-block')
          //               num2_Error.classList.add('d-none')
          //               buttonCompute.textContent = "Clear";
          //               break;
          //           }
          //           case '/':{
          //             if (Number(textno2.value) === 0){
          //               num2_Error.classList.remove('d-none');
          //               num2_Error.textContent = "Error! Attempted to devide by zero"
          //               num2_Error.classList.add('d-block');
          //               textno2.focus();
          //             }
          //             else {
          //               calcResult.textContent = ' = ' + divide(Number(textno1.value), Number(textno2.value));
          //               num1_Error.classList.remove('d-block')
          //               num1_Error.classList.add('d-none')
          //               num2_Error.classList.remove('d-block')
          //               num2_Error.classList.add('d-none')
          //               buttonCompute.textContent = "Clear";
          //               break;
          //           }
          //       } // end div case
          //   } // end switch
          // }
          //   else{// if no radio checked display error
          //     oper_Error.classList.remove('d-none');
          //     oper_Error.classList.add('d-block');
          //   }
      });
    }

 });
