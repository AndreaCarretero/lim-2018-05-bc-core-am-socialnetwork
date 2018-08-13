//Inicializar nav-parte superior
/* document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	// var instances = M.Sidenav.init(elems, options);
});
 */
const idUserInLine = localStorage.getItem('ID');
const emailUserInLine = localStorage.getItem('emaill');
  console.log(idUserInLine);
  console.log(emailUserInLine);
const pintar = () => {//el value del post ya se guarda, pero no consolea
  if (boxPost.value !== "") {
    savePost();
    boxPost.value = "";
  }
  else {
    alert("Ingrese texto en espacio")
  }

}
console.log(userNow);
