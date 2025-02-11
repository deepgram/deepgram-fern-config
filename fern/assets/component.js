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
  const clonedElement = originalElement.cloneNode(true);
  originalElement.parentNode.replaceChild(clonedElement, originalElement);
  
  const newElement = document.getElementById('fern-search-button');
  newElement.disabled = false;
  
  // Create modal container
  const modalContainer = document.createElement('div');
  modalContainer.id = 'search-modal';
  modalContainer.style.display = 'none';
  modalContainer.style.position = 'fixed';
  modalContainer.style.top = '0';
  modalContainer.style.left = '0';
  modalContainer.style.width = '100%';
  modalContainer.style.height = '100%';
  modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modalContainer.style.zIndex = '1000';

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.position = 'relative';
  modalContent.style.margin = '60px auto';
  modalContent.style.padding = '20px';
  modalContent.style.backgroundColor = 'white';
  modalContent.style.borderRadius = '8px';
  modalContent.style.width = '90%';
  modalContent.style.maxWidth = '600px';

  // Create search container
  const searchContainer = document.createElement('div');
  searchContainer.id = 'modal-search-box';
  
  // Create results container
  const resultsContainer = document.createElement('div');
  resultsContainer.id = 'modal-search-results';
  
  modalContent.appendChild(searchContainer);
  modalContent.appendChild(resultsContainer);
  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);

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
      const algoliasearch = window['algoliasearch/lite'].liteClient;
      const searchClient = algoliasearch('SKG3CU3YQM', 'e50ef768d9ac1a2b80ac6101639df429');

      const search = instantsearch({
        indexName: 'crawler_unified',
        searchClient,
      });
      
      const customSearchBox = {
        container: '#modal-search-box',
        placeholder: 'Search documentation...',
        cssClasses: {
          form: 'relative',
          input: 'w-full px-4 py-2 text-[#FBFBFF] bg-[#1A1A1F] border border-[#2C2C33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1F9D4] focus:border-transparent',
          submit: 'absolute right-0 top-0 mt-2 mr-3',
          reset: 'absolute right-8 top-0 mt-2 mr-3'
        }
      };
      
      const customHits = {
        container: '#modal-search-results',
        templates: {
          item: (hit) => `
            <div class="p-4 hover:bg-[#232329] cursor-pointer border-b border-[#2C2C33]">
              <a href="${hit.url}" class="block">
                <h4 class="text-lg font-semibold text-[#FBFBFF] mb-1">${instantsearch.highlight({ hit, attribute: 'title' })}</h4>
                <p class="text-sm text-[#E1E1E5]">${instantsearch.highlight({ hit, attribute: 'content' })}</p>
              </a>
            </div>
          `,
          empty: `
            <div class="p-4 text-center">
              <p class="text-[#949498]">No results found.</p>
            </div>
          `
        },
        cssClasses: {
          list: 'divide-y divide-[#2C2C33]',
          item: 'transition duration-150 ease-in-out'
        }
      };
      
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        .ais-SearchBox-input::placeholder {
          color: #949498;
        }
        
        .ais-SearchBox-submitIcon,
        .ais-SearchBox-resetIcon {
          width: 20px;
          height: 20px;
          fill: #949498;
        }
        
        .ais-Hits-item mark {
          background: #232329;
          color: #A1F9D4;
        }
        
        .ais-SearchBox-reset {
          display: none;
        }
        
        .ais-SearchBox-input[value] ~ .ais-SearchBox-reset {
          display: block;
        }

        #search-modal {
          background-color: rgba(11, 11, 12, 0.8);
        }

        #modal-search-results {
          max-height: 60vh;
          overflow-y: auto;
        }

        #modal-content {
          background-color: #0B0B0C;
          border: 1px solid #2C2C33;
        }
      `;
      document.head.appendChild(styleSheet);
      

      search.addWidgets([
        instantsearch.widgets.searchBox(customSearchBox),
        instantsearch.widgets.hits(customHits),
      ]);

      // Add click handler to the search button
      newElement.addEventListener('click', (e) => {
        e.preventDefault();
        modalContainer.style.display = 'block';
      });

      // Close modal when clicking outside
      modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
          modalContainer.style.display = 'none';
        }
      });

      // Update modal content background
      modalContent.style.backgroundColor = '#0B0B0C';
      modalContent.style.border = '1px solid #2C2C33';

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
