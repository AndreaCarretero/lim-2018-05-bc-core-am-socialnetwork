const idUserInLine = localStorage.getItem('ID');
const emailUserInLine = localStorage.getItem('emaill');
  console.log(idUserInLine);
  console.log(emailUserInLine);
const pintar = () => {//el value del post ya se guarda, pero no consolea
  if (textarea2.value !== "") {
    savePost();
    textarea2.value = "";
  }
  else {
    alert("Ingrese texto en espacio")
  }
}

// const habilitar = () =>{
//   const editarPost = document.getElementById('elPost');
// 	editarPost.disabled = false;
// 	console.log(editarPost.value);

// 	const buttonEditar = document.getElementById('buttonAdd');
// 	buttonEditar.classList.add('hidden');

// 	const buttonGuardar = document.getElementById('buttonGuardar');
// 	 buttonGuardar.classList.remove('hidden');
// }

