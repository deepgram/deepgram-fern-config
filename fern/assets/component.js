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
  script.setAttribute('data-project-color', '#00f099');
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

function insertAlgolia() {
  const originalElement = document.getElementById('fern-search-button');
  if (!originalElement) {
      console.log(`Search container not found, skipping...`);
      return null;
  }
  const clonedElement = originalElement.cloneNode(true);
  originalElement.parentNode.replaceChild(clonedElement, originalElement);
  
  const algolia = document.createElement('script');
  algolia.src = 'https://cdn.jsdelivr.net/npm/algoliasearch@5.20.1/dist/lite/builds/browser.umd.js';
  algolia.integrity = 'sha256-eLIRmzc5Ba67u+3bMlK7lb/bND2QZe5c+uO41OadaO0=';
  algolia.crossOrigin = 'anonymous';
  
  const search = document.createElement('script');
  search.src = 'https://cdn.jsdelivr.net/npm/instantsearch.js@4.77.3/dist/instantsearch.production.min.js';
  search.integrity = 'sha256-lOteBl/i/zTTeWI1iC+/s/eRPgFG3pNxRamGNbR5RX0=';
  search.crossOrigin = 'anonymous';
  
  const algoliaCSS = document.createElement('link');
  algoliaCSS.rel = 'stylesheet';
  algoliaCSS.href = 'https://cdn.jsdelivr.net/npm/instantsearch.css@8.5.1/themes/reset-min.css';
  algoliaCSS.integrity = 'sha256-KvFgFCzgqSErAPu6y9gz/AhZAvzK48VJASu3DpNLCEQ=';
  algoliaCSS.crossOrigin = 'anonymous';
  
  // Add scripts to head
  document.head.appendChild(algolia);
  document.head.appendChild(search);
  document.head.appendChild(algoliaCSS);

  // Wait for scripts to load before initializing search
  algolia.onload = () => {
    search.onload = () => {
      console.log(window.origin);
      console.log(window);
      console.log(window['algoliasearch/lite']);
      
      const algoliasearch = window['algoliasearch/lite'].liteClient;
      const searchClient = algoliasearch('SKG3CU3YQM', 'e50ef768d9ac1a2b80ac6101639df429');

      const search = instantsearch({
        indexName: 'crawler_unified',
        searchClient,
      });

      search.addWidgets([
        instantsearch.widgets.searchBox({
          container: '#fern-search-button',
        })
      ]);

      search.start();
    };
  };
}


document.addEventListener('DOMContentLoaded', () => {
  insertKapaWidget();
  insertAlgolia();
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  insertKapaWidget();
  insertAlgolia();
}
