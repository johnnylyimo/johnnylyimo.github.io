

let buttonSubmit = document.getElementById('btnSubmit');


buttonSubmit.addEventListener('click', ($event) =>{

    $event.preventDefault();
    const inputName = document.getElementById('firstName');

    // Validate user input
    if (inputName.value.length === 0){
        alert ('Fullname is missing!')
        inputName.focus();
    }else{
        alert('Name: ' + inputName.value);
    }
});


  // access Radiobuttons DOM elements
  const Radiobuttons = document.getElementsByName('gender');
  Array.from(Radiobuttons).forEach(function(radio, index, arr){
    radio.onclick = ($event)=>{
        alert($event.target.value + ' Selected!');
    };
  });




