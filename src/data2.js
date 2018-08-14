


const db = firebase.firestore();
const speech = () => {// esta funcion es el codigo que sale en el error grandote
	firestore = firebase.firestore();
	const settings = { timestampsInSnapshots: true };
	firestore.settings(settings);
}
const savePost = () => {//esta funcion es la que guarda el ID, EMAIL Y STRING(post) en fireStore
	speech();
	db.collection("POST`s").add({
		id: idUserInLine,
		email: emailUserInLine,
		post: textarea2.value,
    likes: 0
	})
		.then((docRef) => {
			// console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
	event.preventDefault();
}

//leer documentos
const readPost = () => {
	speech();
	db.collection("POST`s").onSnapshot((querySnapshot) => {
		boxPosteado.innerHTML = "";
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data().post}`);
			boxPosteado.innerHTML +=
				`
			<br>
			<p> ${doc.data().email} </p>
			<br><div class="z-depth-3 input-field col s10">
			<textarea disabled id="elPost" cols="30" rows="10">${doc.data().post}</textarea>
      </div>
      <br>
			<button class="waves-effect btn red " onclick = "deletePost('${doc.id}')">Eliminar</button>
			<button class="btn orange" id="buttonAdd"  onclick="editPost('${doc.id}', '${doc.data().post}')" >Editar</button>
			<p > ${doc.data().likes} </p> 
			<button id=${doc.data().id}>Me gusta </button>
			`
		});
	/* 	const buttonLikes= getElementById(${doc.data().id}) */
	});	
}
readPost();
const deletePost = (id) => {
	const result = confirm("¿Estas segurx que deseas eliminar el post?");
	if (result == true) {
		db.collection("POST`s").doc(id).delete().then(() => {
			console.log("Document successfully deleted!");
		}).catch((error) => {
			console.error("Error removing document: ", error);
		});
	}
}
const editPost = (id, post) => {
	const cuadroPost = document.getElementById('elPost');
	cuadroPost.disabled = false;
	document.getElementById('elPost').value = post;
	const button = document.getElementById('buttonAdd');

	button.innerHTML = 'Guardar';
	button.onclick = () => {
		var washingtonRef = db.collection('POST`s').doc(id);
		const post = document.getElementById('elPost').value;
		return washingtonRef.update({
			post
		})
			.then(() => {
				console.log('Document successfully updated!');
				button.innerHTML = 'Editar';
				button.onclick = editPost;
			})
			.catch((error) => {
				// The document probably doesn't exist.
				console.error('Error updating document: ', error);
			});
	}
}
logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign('login.html');
		})
		.cath();
}