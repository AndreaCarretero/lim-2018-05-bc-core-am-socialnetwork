const idUserInLine = localStorage.getItem('ID');
const emailUserInLine = localStorage.getItem('emaill');
console.log(idUserInLine);
console.log(emailUserInLine);
const pintar = () => { //el value del post ya se guarda, pero no consolea

  const postContent = textarea2.value;
  const trimPost = postContent.trim();

  if (postContent !== '' && trimPost !== '') {
    savePost();
    textarea2.value = '';
  } else {
    alert('Por favor ,ingrese texto.')
  }
  event.preventDefault();
}
//este evento es el del seleccionar que tipo de post se desea ver (publico o privados)
selectViewPost.addEventListener('change', () => {
  if (selectViewPost.value == 'public') {
    readPublicPost();
  }
  else if (selectViewPost.value == 'private') {
    readPrivatePost();
  }
})