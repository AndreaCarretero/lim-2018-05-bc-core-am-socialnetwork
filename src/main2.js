const idUserInLine = localStorage.getItem('ID');
const emailUserInLine = localStorage.getItem('emaill');
console.log(idUserInLine);
console.log(emailUserInLine);
const pintar = () => { //el value del post ya se guarda, pero no consolea

  const postContent = textarea2.value;
  const trimPost = postContent.trim();

  if (postContent !== '' && trimPost !== '') {
    savePost();
    textarea2.value = '';
  } else {
    alert('Por favor ,ingrese texto.')
  }
  event.preventDefault();

}

	// db.collection("POST`s").onSnapshot((querySnapshot) => {
	// 	boxPosteado.innerHTML = "";
	// 	verPost = document.getElementById('verPost');
	// 	verPost.addEventListener('change', () => {
	// 		boxPosteado.innerHTML = "";
	// 	querySnapshot.forEach((doc) => {
	// 		// boxPosteado.innerHTML = "";
	// 			if (verPost.value === "public" && (`${doc.data().privacity}` == "Todos")) {
  //         console.log(idUserInLine);
	// 				console.log(`${doc.id} => ${doc.data().post} => ${doc.data().like}`);
	// 				boxPosteado.innerHTML +=
	// 					`
	// 					<br>
  //           <br><div class="z-depth-3 input-field col s10">
  //           <p> ${doc.data().email} </p>
	// 					<textarea class="materialize-textarea textarea-custom-padding" disabled id="elPost-${doc.id}" cols="30" rows="10">${doc.data().post}</textarea>
	// 					</div>
	// 					<br>
	// 					<button class="btn blue rigth buttons" id = "like-${doc.id}" onclick = "likePost('${doc.id}','${doc.data().like}')" >${doc.data().like} Me gusta</button>
	// 					`
	// 			}
	// 			else if (verPost.value === "private" == (`${doc.data().privacity}` == "SoloYo")) {
	// 				console.log(`${doc.id} => ${doc.data().post} => ${doc.data().like}`);
	// 					boxPosteado.innerHTML +=
	// 					`
	// 					<br>
  //           <br><div class="z-depth-3 input-field col s10">
  //           <p> ${doc.data().email} </p>
	// 					<textarea class="materialize-textarea textarea-custom-padding" disabled id="elPost-${doc.id}" cols="30" rows="10">${doc.data().post}</textarea>
	// 					</div>
	// 					<br>
	// 					<button class="waves-effect btn red darken-2 buttons" onclick = "deletePost('${doc.id}')">Eliminar</button>
	// 					<button class="btn blue rigth buttons" id = "like-${doc.id}" onclick = "likePost('${doc.id}','${doc.data().like}')" >${doc.data().like} Me gusta</button>
	// 					<button class="btn orange buttons" id="buttonAdd-${doc.id}"  onclick="editPost('${doc.id}', '${doc.data().post}')" >Editar</button>
	// 					`
	// 			}
	// 		});
	// 	});
  // });
  // readPost();

