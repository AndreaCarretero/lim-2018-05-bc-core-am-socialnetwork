window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si está registrado,entonces iniciará sesión
      const loggedIn = document.getElementById('loggedIn');
      window.location.assign('home.html');
      loginUser.style.display = "none";
      registerUser.style.display ="none";
    } else {
      //si no estamos logeados
      loginUser.style.display = "block";
      registerUser.style.display ="none";
      //loggedIn.style.display="none";
    }
  });
  window.createAccount = (user) => {
    loginUser.style.display = "none";
    registerUser.style.display = "block";
  }
}
window.back = () => {
  loginUser.style.display = "block";
  registerUser.style.display = "none";
}