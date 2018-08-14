window.login = () => {
  //Se declaran estas variables para llamar al "id" de email y contraseña de login.html
  const emailValue = document.getElementById('emailLogin').value;
  const passwordValue = document.getElementById('passwordLogin').value;
  if (emailValue && passwordValue !== "") {
    const filtro = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!filtro.test(emailValue)) {
      alert("Por favor, digite un e-mail valido")
    } else {
      firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
          console.log("Usuario con login exitoso");
        })
        .catch((error) => {
          alert("Aun no estas registradx ¿Qué esperas comienza a registrarte y veras todos los beneficios; o quizas tu contraseña no es correcta 😨");
        })
    }
  } else if ((emailValue || passwordValue) == "") {
    alert("Ingrese e-mail y contraseña válida")
  }
  else if (emailValue == '') {
    alert("Porfavor,ingrese e-mail")
  }
  else if (passwordValue == '') {
    alert("Porfavor,ingrese contraseña")
  }
}
window.register = () => {
  const nameRegister = nameR.value;
  const emailRegister = emailR.value;
  const passwordRegister = passwordR.value;
  if (nameRegister && emailRegister && passwordRegister !== "") {
    const filtro = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!filtro.test(emailRegister)) {
      alert("Ingrese un e-mail y contraseña válidx")
    } else {
      firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister)
        .then(() => {
          alert("Bienvenidx tu registro fue exitoso comencemos 💕");
          console.log("User >"+ JSON.stringify(user));
        })
        .catch((error) => {
          console.log("error de firebase >" + error.code);
          console.log("errorfirebase,mensaje >" + error.message);
        });
    }
  } else {
    alert("Ingrese todos los campos con información válida")
  }
  // almacenar();
}
loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    'display': 'popup'
  });
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      console.log("Login con facebook");
    })
    .catch((error) => {
      console.log("error de firebase >" + error.code);
      console.log("error de firebase ,mensaje >" + error.message);
    });
}
loginGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	//autenticar con Google
	firebase.auth().signInWithPopup(provider)
	.then((result)=> {
    const token = result.credential.accessToken;
    const user= result.user;
  }).catch((error)=> {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
  });
}

