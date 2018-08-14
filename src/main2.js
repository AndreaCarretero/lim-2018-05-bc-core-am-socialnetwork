const idUserInLine = localStorage.getItem('ID');
const emailUserInLine = localStorage.getItem('emaill');
  console.log(idUserInLine);
  console.log(emailUserInLine);
const pintar = () => {//el value del post ya se guarda, pero no consolea
  if (textarea2.value !== '') {
    savePost();
    textarea2.value = '';
  }
  else {
    alert('Ingrese texto en espacio')
  }
}
