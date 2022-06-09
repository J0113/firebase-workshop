const todoList = document.getElementById("todoList");
let todoRef; // reference to the todo collection. Starting point for CRUD
let unsubscribe; // reference to the unsubscribe function
unsubscribe = todoRef
  .where("uid", "==", user.uid)
  .orderBy("createdAt")
  .onSnapshot((snapshot) => {
    const items = snapshot.docs.map((doc) => {
      return `<p>${doc.data().name}</p>`;
    });
    todoList.innerHTML = items.join("");
  });
