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
		post: boxPost.value
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
			boxPosteado.innerHTML += `
			<div class="z-depth-3 input-field col s10" >
        <p>${doc.data().post}</p>
      </div>
      <br>
      <button type="submit" id="buttonAdd" class="btn orange">Editar</button>
      <button style="display: none" id="buttonUpdate" class="btn btn-success">Update task</button>
      <button style="display: none" id="buttonCancel" class="btn btn-danger">Cancel</button>
      <!-- Modal Trigger -->
      <a class="waves-effect  btn modal-trigger" href="#modal1" onclick="deletePost('${doc.id}')">Eliminar</a>
      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h5>¿Estás seguro que deseas eliminar esta publicación?</h5>
          <p></p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">¡No!</a>
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Si,deseo eliminarlo.</a>
        </div>
      </div>
			`
		});
	});
}
readPost();

const deletePost = (a) => {
	db.collection("POST`s").doc().delete(a).then(function () {
		console.log("Document successfully deleted!");
	}).catch(function (error) {
		console.error("Error removing document: ", error);
	});
}

logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign("login.html");
		})
		.cath();
}
