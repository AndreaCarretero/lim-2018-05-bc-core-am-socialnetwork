// Initialize Cloud Firestore through Firebase

const almacenar =() =>{
	const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);
const db = firebase.firestore();
db.collection("users").add({
	first: "Ada",
	last: "Lovelace",
	born: 1815
})
.then(function(docRef) {
	console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
	console.error("Error adding document: ", error);
});
}



logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign("login.html");
		})
		.cath();
}
