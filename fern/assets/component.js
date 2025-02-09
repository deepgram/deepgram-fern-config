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

function insertKapaWidget() {
  const gradientBorder = document.createElement("div");
  gradientBorder.style.position = "fixed";
  gradientBorder.style.bottom = "18px";
  gradientBorder.style.right = "18px";
  gradientBorder.style.height = "89px";
  gradientBorder.style.width = "89px";
  gradientBorder.style.background = "linear-gradient(90deg, #201CFF -91.5%, #13EF95 80.05%)";
  gradientBorder.style.borderRadius = "100rem";
  gradientBorder.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  
  const script = document.createElement('script');
  
  script.async = true;
  script.src = "https://widget.kapa.ai/kapa-widget.bundle.js";
  
  script.setAttribute('data-user-analytics-fingerprint-enabled', 'true');
  script.setAttribute('data-website-id', 'f5c1c9d4-b072-4c91-8da2-231cc5ea31d2');
  script.setAttribute('data-project-name', 'Deepgram');
  script.setAttribute('data-modal-title', 'Get AI Powered Help Using Deepgram');
  script.setAttribute('data-button-text', '✦ Ask AI');
  script.setAttribute('data-project-color', '#EB038F');
  script.setAttribute('data-button-bg-color', '#1A1A1F');
  script.setAttribute('data-button-image-height', '0');
  script.setAttribute('data-button-image-width', '0');
  script.setAttribute('data-button-height', '85px');
  script.setAttribute('data-button-width', '85px');
  script.setAttribute('data-button-border-radius', '100rem');
  script.setAttribute('data-button-border', '0px solid #fff');
  script.setAttribute('data-project-logo', 'https://media.licdn.com/dms/image/D560BAQEaRN1vSzE2Ng/company-logo_200_200/0/1680904416780/deepgram_logo?e=2147483647&v=beta&t=YFDv1MdWVSsq1yknvJ0cD3Acvvi02d6pV1IDiUzA5MA');
  script.setAttribute('data-modal-disclaimer', 'This is a custom LLM for answering questions about Deepgram. Answers are based on the contents of Deepgram\'s: Documentation, API reference, Code Samples, Help Center and SDKs.');
    
  document.body.appendChild(gradientBorder);
  document.head.appendChild(script);
}


document.addEventListener('DOMContentLoaded', () => {
  insertKapaWidget();
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  insertKapaWidget();
}