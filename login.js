document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    db.ref("users").once("value", snapshot => {
      let matched = false;
      snapshot.forEach(child => {
        const user = child.val();
        if (user.email === email && user.password === password) {
          matched = true;
          localStorage.setItem("loggedIn", "true");
          window.location.href = "dashboard.html";
        }
      });
      if (!matched) alert("Wrong credentials! Try again.");
    });
  });
  