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
		post: textarea2.value
	})
		.then(function (docRef) {
			// console.log("Document written with ID: ", docRef.id);

		})
		.catch(function (error) {
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
			<br><div class="z-depth-3 input-field col s10">
        <p>${doc.data().post}</p>
      </div>
      <br>
      <button type="submit" id="buttonAdd" class="btn orange" onclick = "editPost('${doc.id}','${doc.data().post}')">Editar</button>
      <!-- Modal Trigger -->
      <button class="waves-effect btn yellow darken-2" onclick = "deletePost('${doc.id}')">Eliminar</button>
			`
		});
	});
}
readPost();

const deletePost = (id) => {
	const result = confirm("¿Estas segurx que deseas eliminar el post?");
	if (result == true) {
		db.collection("POST`s").doc(id).delete().then(function () {
			console.log("Document successfully deleted!");
		}).catch(function (error) {
			console.error("Error removing document: ", error);
		});
	}
}

const editPost = (id, post) => {

	document.getElementById('textarea2').value = post;

	const button = document.getElementById('publicarPost');
	button.innerHTML = 'Editar';

	button.onclick = () => {
		var washingtonRef = db.collection("POST`s").doc(id);

		return washingtonRef.update({
			post: post,
		})
			.then(function () {
				console.log("Document successfully updated!");
				button.innerHTML = 'Guardar';
			})
			.catch(function (error) {
				// The document probably doesn't exist.
				console.error("Error updating document: ", error);
			});
	}
}

logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign("login.html");
		})
		.cath();
}
