signInBtn.onclick = () => {
  auth.signInWithPopup(provider);
};




signOutBtn.onclick = () => {
    auth.signOut();
};
