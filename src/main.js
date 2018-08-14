window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('ID', user.uid );
        localStorage.setItem('emaill', user.email);
 
      //Si está registrado,entonces iniciará sesión
      loginUser.style.display = "none";
      registerUser.style.display ="none";
      console.log("User >"+ JSON.stringify(user));
      location.assign('home.html');
    }
    else {
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