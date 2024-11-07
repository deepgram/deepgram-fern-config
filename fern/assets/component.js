function addComponent() {
  const button = document.createElement("div");
  button.innerText = "Ask AI";
  
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.padding = "15px 20px";
  button.style.backgroundColor = "#eb038f";
  button.style.color = "white";
  button.style.borderRadius = ".25rem";
  button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.style.textAlign = "center";
  
  button.addEventListener("click", () => {
    alert("Opening AI chat...");
  });
  
  document.body.appendChild(button);
}

document.addEventListener('DOMContentLoaded', () => {
  addComponent();
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  addComponent();
}