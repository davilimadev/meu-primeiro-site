alert("JavaScript está funcionando 😎")
const button = document.getElementById("toggle-mode");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if(body.classList.contains("dark-mode")){
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// carregar preferência ao abrir o site
if(localStorage.getItem("theme") === "dark"){
  body.classList.add("dark-mode");
}