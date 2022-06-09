auth.onAuthStateChanged((user) => {
    if (user) {
        whenSignedIn.style.display = "block";
        whenSignedOut.style.display = "none";
        userDetails.innerHTML = `
        <p>
          <strong>Name:</strong> ${user.displayName}
        </p>
        <p>
          <strong>Email:</strong> ${user.email}
        </p>
      `;
    } else {
        whenSignedIn.style.display = "none";
        whenSignedOut.style.display = "block";
    }
});
