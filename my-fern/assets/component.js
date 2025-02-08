function addComponent() {
  const gradientBorder = document.createElement("div");
  gradientBorder.style.position = "fixed";
  gradientBorder.style.bottom = "18px";
  gradientBorder.style.right = "18px";
  gradientBorder.style.height = "89px";
  gradientBorder.style.width = "89px";
  gradientBorder.style.background = "linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%)";
  gradientBorder.style.borderRadius = "100rem";
  gradientBorder.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  
  const button = document.createElement("div");
  button.innerText = "✦ Ask AI";
  
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.height = "85px";
  button.style.width = "85px";
  button.style.backgroundColor = "#1A1A1F";
  button.style.color = "white";
  button.style.borderRadius = "100rem";
  button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.style.textAlign = "center";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  
  button.addEventListener("click", () => {
    alert("Opening AI chat...");
  });
  
  document.body.appendChild(gradientBorder);
  document.body.appendChild(button);
}

document.addEventListener('DOMContentLoaded', () => {
  addComponent();
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  addComponent();
}