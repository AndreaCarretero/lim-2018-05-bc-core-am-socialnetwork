const db = firebase.firestore();
const speech = () => {// esta funcion es el codigo que sale en el error grandote
	let firestore = firebase.firestore();
	const settings = { timestampsInSnapshots: true };
	firestore.settings(settings);
}
const savePost = () => {//esta funcion es la que guarda el ID, EMAIL Y STRING(post) en fireStore
	speech();
	//guardar los post privados en una coleccion PostsPrivados
	if (privacity.value == "SoloYo") {
		db.collection("PostsPrivados").add({
			id: idUserInLine,
			email: emailUserInLine,
			post: textarea2.value,
			like: 0,
			privacity: privacity.value
		})
			.then((docRef) => {
				// console.log("Document written with ID: ", docRef.id);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		event.preventDefault();

	}
	//guardar los post publicosen una coleccion PostsPublicos
	else if (privacity.value == "Todos") {
		db.collection("PostsPublicos").add({
			id: idUserInLine,
			email: emailUserInLine,
			post: textarea2.value,
			like: 0,
			privacity: privacity.value
		})
			.then((docRef) => {
				// console.log("Document written with ID: ", docRef.id);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		event.preventDefault();
	}
}

//Esta función lee los posts PUBLICOS y los muestra en pantalla
const readPublicPost = () => {
	speech();
	db.collection("PostsPublicos").onSnapshot((querySnapshot) => {
		// console.log(querySnapshot._snapshot.query.path.segments[0]);	//
		boxPosteado.innerHTML = "";
		querySnapshot.forEach((doc) => {
			const collectionName = querySnapshot._snapshot.query.path.segments[0];
			if (idUserInLine != `${doc.data().id}`) {
				console.log(collectionName);
				boxPosteado.innerHTML +=
					`
					<br>
					<br><div class="z-depth-3 input-field col s10">
					<p> ${doc.data().email} </p>
					<textarea class="materialize-textarea textarea-custom-padding" disabled id="elPost-${doc.id}" cols="30" rows="10">${doc.data().post}</textarea>
					</div>
					<br>
					<button class="btn blue rigth buttons" id = "like-${doc.id}" onclick = "likePost('${doc.id}','${doc.data().like}','${collectionName}')">${doc.data().like} Me gusta</button>
					`
			}
			else if (idUserInLine == `${doc.data().id}`) {
				console.log(collectionName);
				console.log(`${doc.id} => ${doc.data().post} => ${doc.data().like}`);
				boxPosteado.innerHTML +=
					`
					<br>
					<br><div class="z-depth-3 input-field col s10">
					<p> ${doc.data().email} </p>
					<textarea class="materialize-textarea textarea-custom-padding" disabled id="elPost-${doc.id}" cols="30" rows="10">${doc.data().post}</textarea>
					</div>
					<br>
					<button class="waves-effect btn red darken-2 buttons" onclick = "deletePost('${doc.id}', '${collectionName}')">Eliminar</button>
					<button class="btn blue rigth buttons" id = "like-${doc.id}" onclick = "likePost('${doc.id}','${doc.data().like}','${collectionName}')" >${doc.data().like} Me gusta</button>
					<button class="btn orange buttons" id="buttonAdd-${doc.id}"  onclick="editPost('${doc.id}', '${doc.data().post}', '${collectionName}')" >Editar</button>
					`
			}
		});
		/* 	const buttonLikes= getElementById(${doc.data().id}) */
	});
}
readPublicPost();
//Esta función lee los posts PRIVADOS y los muestra en pantalla
const readPrivatePost = () => {
	speech();
	db.collection("PostsPrivados").onSnapshot((querySnapshot) => {
		boxPosteado.innerHTML = "";
		console.log(querySnapshot._snapshot.query.path.segments[0]);
		querySnapshot.forEach((doc) => {
			const collectionName = querySnapshot._snapshot.query.path.segments[0];
			if (idUserInLine == `${doc.data().id}`) {
				console.log(`${doc.id} => ${doc.data().post} => ${doc.data().like}`);
				boxPosteado.innerHTML +=
					`
					<br>
					<br><div class="z-depth-3 input-field col s10">
					<p> ${doc.data().email} </p>
					<textarea class="materialize-textarea textarea-custom-padding" disabled id="elPost-${doc.id}" cols="30" rows="10">${doc.data().post}</textarea>
					</div>
					<br>
					<button class="waves-effect btn red darken-2 buttons" onclick = "deletePost('${doc.id}', '${collectionName}')">Eliminar</button>
					<button class="btn blue rigth buttons" id = "like-${doc.id}" onclick = "likePost('${doc.id}','${doc.data().like}','${collectionName}')" >${doc.data().like} Me gusta</button>
					<button class="btn orange buttons" id="buttonAdd-${doc.id}"  onclick="editPost('${doc.id}', '${doc.data().post}', '${collectionName}')" >Editar</button>
					`
			}
		});
		/* 	const buttonLikes= getElementById(${doc.data().id}) */
	});
}
//esta funcion es para eliminar los pos Publicos
const deletePost = (id, collectionName) => {
	const result = confirm("¿Estas segurx que deseas eliminar el post?");
	if (result == true) {
		db.collection(collectionName).doc(id).delete().then(() => {
			console.log("Document successfully deleted!");
		}).catch((error) => {
			console.error("Error removing document: ", error);
		});
	}
}

//editar post publicos
const editPost = (id, post, collectionName) => {
	const cuadroPost = document.getElementById(`elPost-${id}`);
	cuadroPost.disabled = false;
	document.getElementById(`elPost-${id}`).value = post;
	const button = document.getElementById(`buttonAdd-${id}`);
	button.innerHTML = 'Guardar';
	button.onclick = () => {
		const washingtonRef = db.collection(collectionName).doc(id);
		const post = document.getElementById(`elPost-${id}`).value;
		return washingtonRef.update({
			post
		})
			.then(() => {
				// console.log("Document successfully updated!");
				button.innerHTML = 'Editar';
				button.onclick = editPost;
			})
			.catch((error) => {
				// The document probably doesn't exist.
				console.error("Error updating document: ", error);
			});
	}
}

//like a los post publicos
const likePost = (id, cantActual, collectionName) => {
	cantActual++;
	const washingtonRef = db.collection(collectionName).doc(id);
	document.getElementById(`like-${id}`).value = cantActual;
	return washingtonRef.update({
		like: cantActual
	})
		.then(() => {
			console.log("Document successfully updated!");
		})
		.catch((error) => {
			// The document probably doesn't exist.
			console.error("Error updating document: ", error);
		});
	event.preventDefault();
}

const logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign("login.html");
		})
		.cath();
}

