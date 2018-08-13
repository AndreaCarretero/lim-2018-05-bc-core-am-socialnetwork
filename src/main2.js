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
const pintar = () => {//el value del post ya se guarda en el userNow, pero no consolea
  if (boxPost.value !== "") {
    // let userNow = {
    //   id: idUserInLine,
    //   email: emailUserInLine,
    //   post: boxPost.value
    // }
    saveComments();
  }
  else {
    alert("Ingrese texto en espacio")
  }

}
<<<<<<< HEAD
console.log(userNow);
=======


// localStorage.setItem('post',)

>>>>>>> 86914b0f3b73ddfd2feffaa7f6190c4e01347251
