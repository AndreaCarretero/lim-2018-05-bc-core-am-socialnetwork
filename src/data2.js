const db = firebase.firestore();
const almacenar = () => {//esta funcion es la que guarda el ID, EMAIL Y STRING(post) en fireStore
	const firestore = firebase.firestore();
	const settings = { timestampsInSnapshots: true };
	firestore.settings(settings);
	db.collection("users").add({
		id: idUserInLine,
		email: emailUserInLine,
		post: boxPost.value
	})
		.then(function (docRef) {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(function (error) {
			console.error("Error adding document: ", error);
		});
	event.preventDefault();
}

logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign("login.html");
		})
		.cath();
}
