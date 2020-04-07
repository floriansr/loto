const form = document.getElementById('form');
const array = []


const inputFirst_name = document.getElementById('inputFirst_name');
const inputLast_name = document.getElementById('inputLast_name');
const inputEmail = document.getElementById('inputEmail');

const thanks = document.getElementById('thanks');


// FORMULAIRE LOTO

form.onsubmit = submit

function submit(event) {
  // form.setAttribute('hidden', ''); 
  thanks.removeAttribute('hidden');

  // For this example, don't actually submit the form
  event.preventDefault();
};



document.getElementById("submit_formulaire").addEventListener("click", function(event){
  let select = document.getElementById('formControlSelect');
   
    for (let i = 0, l = select.options.length, o; i < l; i++ ){
      o = select.options[i];
      if (o.selected){
        array.push(o.text);
      }
    }
    
    if (array.length != 6){
      error_select.removeAttribute('hidden');
    }

    if (array.length == 6){
          inputFirst_name.oninvalid();
          inputLast_name.oninvalid();
          inputEmail.oninvalid();
          checkLoto();
          form.onsubmit();
    }

  event.preventDefault();
});




// TIRAGE DU LOTO


function checkLoto(arg1) {
  let rand1 = getRandomIntInclusive(1, 45);
  let rand2 = getRandomIntInclusive(1, 45);
  let rand3 = getRandomIntInclusive(1, 45);
  let rand4 = getRandomIntInclusive(1, 45);
  let rand5 = getRandomIntInclusive(1, 45);
  let rand6 = getRandomIntInclusive(1, 45);
  let random =[rand1, rand2, rand3, rand4, rand5, rand6].sort();

  console.log(random);

  for (let z = 0; z < random.length; z++) {
    console.log(random[z]);
    console.log(array[z]);

    if (random[z] !== array[z]){ 
       perdu.removeAttribute('hidden');
       return false;
    } 
  }
      gagne.removeAttribute('hidden');
}



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}









// EMAIL

// const customEmailTest = (email) => {
//   let messages = [];
//   let extension = email.split('.').pop();
//   if (email.length < 8){
//     message = "Le mail fait moins de 8 caractère";
//     messages.push(message);
//   }
//   if (email.length>30){
//     message = "Le mail fait plus de 30 caractère";
//     messages.push(message);
//   }
//   if (!email.includes("@") || !email.includes(".")  ){
//     message = "Le mail ne contient pas de @ ou de. "
//     messages.push(message);
//   }
//   if (extension.length !== 2 && extension.length !== 3 ){
//     message = "L'extension ne fait pas 2 ou 3 caractere";
//     messages.push(message);
//   }
//   return messages;
// }










// const error_first_name = document.getElementById('error_first_name');
// const error_last_name = document.getElementById('error_last_name');
// const error_email = document.getElementById('error_email');




// function invalid_first_name(event) {
//   console.log(inputFirst_name.length);
//   if (inputFirst_name.length < 1) {
//   error_first_name.removeAttribute('hidden');
//   }
// }

// function invalid_last_name(event) {
//   error_last_name.removeAttribute('hidden');
// }

// function invalid_email(event) {

//   error_email.removeAttribute('hidden');
// }














// document.getElementById("submit_formulaire").addEventListener("click", function(event){
//   let array = []
//   let select = document.getElementById('formControlSelect');
//     for (let i = 0, l = select.options.length, o; i < l; i++ ){
//       o = select.options[i];
//       // console.log(o);
//       // console.log(o.text);
//       if (o.selected){
//         array.push(o.text);
//         console.log('Mon élement est selectionné donc je le rajoute au tableau');
//       } else {
//         console.log('Element non sélectionné, je ne le rajoute pas');
//       }
//       console.log(array);
//       console.log(`La taille de mon tableau est ${array.length}`);
//       console.log('Si je verifiais ici array.length != 6, il y aurait une errur');
//     }
//       if (array.length != 6){
//       error_select.removeAttribute('hidden');
//       }
//   event.preventDefault();
// });