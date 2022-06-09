const editForm = document.getElementById("editForm");
const editInput = document.getElementById("editInput");
const editId = document.getElementById("editId");

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("toto-items")
    .doc(editId.value)
    .update({
      name: editInput.value,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
});
