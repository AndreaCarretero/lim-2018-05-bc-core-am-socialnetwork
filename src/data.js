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
          console.log("Usuario con login exitoso")
				})
				// VALIDACIÓN!!!!!!!!!!!!! !!!!!!!!!!!!!!!
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
const almacenar = () => {
  //este codigo hace que el usuario se guarde en la base de datos con la fecha y hora de firebase y no con la hora de la maquina
  const firestore = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true
  };
  firestore.settings(settings);
  //con esta funcion hace que se cree una coleccion en firestore
  const db = firebase.firestore();
  db.collection("users").add({
      Nombre: nameR.value,
      Email: emailR.value,
      Contraseña: passwordR.value,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
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
        })
        .catch((error) => {
          console.log("error de firebase >" + error.code);
          console.log("errorfirebase,mensaje >" + error.message);
          //alert("Usuarix ya esta registrado")
        });
    }
  } else {
    alert("Ingrese todos los campos con información válida")
  }
  almacenar();
}
loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  //provider.addScope("user_birthday");tiene que pedirle permiso a Facebook
  provider.setCustomParameters({
    'display': 'popup'
  });
  firebase.auth().signInWithPopup(provider)
    .then(() => {
			console.log("login con facebook");
    })
    .catch((error) => {
      console.log("error de firebase >" + error.code);
      console.log("error de firebase ,mensaje >" + error.message);
    });
  almacenar();
}
loginGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	//autenticar con Google
	firebase.auth().signInWithPopup(provider)
	.then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
  almacenar();
}

