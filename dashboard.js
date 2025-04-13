if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
  
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("products");
      data.forEach(product => {
        const card = document.createElement("div");
        card.innerHTML = `<h3>${product.title}</h3><img src="${product.image}" width="100"><p>$${product.price}</p>`;
        container.appendChild(card);
      });
    });