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
  modalContainer.classList.add('ais-InstantSearch');
  modalContainer.style.display = 'none';
  modalContainer.style.position = 'fixed';
  modalContainer.style.top = '0';
  modalContainer.style.left = '0';
  modalContainer.style.width = '100%';
  modalContainer.style.height = '100%';
  modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
  modalContainer.style.zIndex = '9999';
  modalContainer.style.backdropFilter = 'blur(4px)';

  // Create modal dialog container
  const modalDialog = document.createElement('div');
  modalDialog.style.position = 'relative';
  modalDialog.style.width = '90%';
  modalDialog.style.maxWidth = '800px';
  modalDialog.style.margin = '40px auto 40px auto';
  modalDialog.style.maxHeight = 'calc(100vh - 80px)';
  modalDialog.style.display = 'flex';
  modalDialog.style.flexDirection = 'column';
  modalDialog.style.background = '#0B0B0C';
  modalDialog.style.borderRadius = '12px';
  modalDialog.style.border = '1px solid #2C2C33';
  modalDialog.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)';

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '12px';
  closeButton.style.right = '16px';
  closeButton.style.fontSize = '24px';
  closeButton.style.color = '#949498';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.cursor = 'pointer';
  closeButton.style.padding = '4px';
  closeButton.style.lineHeight = '1';
  closeButton.style.transition = 'color 0.2s ease';
  closeButton.addEventListener('mouseover', () => closeButton.style.color = '#E1E1E5');
  closeButton.addEventListener('mouseout', () => closeButton.style.color = '#949498');
  closeButton.onclick = () => modalContainer.style.display = 'none';

  // Create modal content container
  const modalContent = document.createElement('div');
  modalContent.style.padding = '24px';
  modalContent.style.display = 'flex';
  modalContent.style.flexDirection = 'column';
  modalContent.style.height = '100%';
  modalContent.style.overflow = 'hidden';

  // Create search container
  const searchContainer = document.createElement('div');
  searchContainer.setAttribute('id', 'searchbox');  // Match customSearchBox container
  
  // Create results container
  const resultsContainer = document.createElement('div');
  resultsContainer.setAttribute('id', 'hits');  // Match customHits container
  
  // Create pagination container
  const paginationContainer = document.createElement('div');
  paginationContainer.setAttribute('id', 'pagination');  // Match pagination widget container
  
  // Create search container with title
  const searchWrapper = document.createElement('div');
  searchWrapper.style.marginBottom = '24px';
  
  const searchTitle = document.createElement('h2');
  searchTitle.textContent = 'Search Documentation';
  searchTitle.style.color = '#E1E1E5';
  searchTitle.style.fontSize = '1.5rem';
  searchTitle.style.fontWeight = '600';
  searchTitle.style.marginBottom = '16px';

  // Assemble the components
  searchWrapper.appendChild(searchTitle);
  searchWrapper.appendChild(searchContainer);
  modalContent.appendChild(searchWrapper);
  modalContent.appendChild(resultsContainer);
  modalContent.appendChild(paginationContainer);

  // Style containers
  resultsContainer.style.maxHeight = 'calc(100vh - 280px)';
  resultsContainer.style.overflowY = 'auto';
  resultsContainer.style.marginTop = '16px';
  resultsContainer.style.padding = '4px';
  resultsContainer.style.flex = '1';

  // Add scrollbar styling
  const scrollbarStyles = `
    #hits::-webkit-scrollbar {
      width: 8px;
    }
    #hits::-webkit-scrollbar-track {
      background: #1A1A1F;
      border-radius: 4px;
    }
    #hits::-webkit-scrollbar-thumb {
      background: #2C2C33;
      border-radius: 4px;
    }
    #hits::-webkit-scrollbar-thumb:hover {
      background: #3C3C43;
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = scrollbarStyles;
  document.head.appendChild(style);

  // Update pagination container styles
  paginationContainer.style.marginTop = 'auto';
  paginationContainer.style.paddingTop = '24px';
  paginationContainer.style.borderTop = '1px solid #2C2C33';


  // Assemble modal
  modalContent.appendChild(searchWrapper);
  modalContent.appendChild(resultsContainer);
  modalContent.appendChild(paginationContainer);
  modalDialog.appendChild(closeButton);
  modalDialog.appendChild(modalContent);
  modalContainer.appendChild(modalDialog);
  document.body.appendChild(modalContainer);

  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    .ais-SearchBox-form {
      position: relative;
    }

    .ais-SearchBox-input {
      width: 100%;
      padding: 12px 16px 12px 40px;
      background: #1A1A1F;
      border: 1px solid #2C2C33;
      border-radius: 8px;
      color: #E1E1E5;
      font-size: 1rem;
      transition: all 0.2s ease;
    }

    .ais-SearchBox-input:focus {
      border-color: #A1F9D4;
      box-shadow: 0 0 0 2px rgba(161, 249, 212, 0.2);
      outline: none;
    }

    .ais-SearchBox-submit {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
    }

    .ais-SearchBox-submitIcon {
      width: 16px;
      height: 16px;
      fill: #949498;
    }

    .ais-SearchBox-resetIcon {
      width: 14px;
      height: 14px;
      fill: #949498;
    }

    .ais-Hits-list {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .ais-Hits-item {
      padding: 16px;
      border-color: #2C2C33;
      transition: background-color 0.2s ease;
    }

    .ais-Hits-item:hover {
      background-color: #1A1A1F;
    }

    .ais-Hits-item:last-child {
      border-bottom: none;
    }

    .ais-Hits-item mark {
      background: none;
      color: #A1F9D4;
      font-weight: 600;
    }

    .ais-Pagination-list {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .ais-Pagination-item {
      margin: 0;
    }
      
    .ais-Pagination {
      margin-top: 0;
    }

    .ais-Pagination-link {
      display: block;
      padding: 8px 12px;
      border-radius: 6px;
      background: #1A1A1F;
      border: 1px solid #2C2C33;
      color: #E1E1E5;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .ais-Pagination-item--selected .ais-Pagination-link {
      background: #232329;
      border-color: #A1F9D4;
      color: #A1F9D4;
    }

    .ais-Pagination-link:hover:not(.ais-Pagination-item--selected .ais-Pagination-link) {
      background: #232329;
      border-color: #3C3C43;
    }
      
    .ais-InstantSearch h2 {
      margin-top: 16px !important;
    }
  `;
  document.head.appendChild(styleSheet);

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
        container: '#searchbox',
        placeholder: 'Search documentation...',
        cssClasses: {
          form: 'relative flex flex-row justify-center',
          input: 'w-full px-4 py-2 text-[#FBFBFF] bg-[#1A1A1F] border border-[#2C2C33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1F9D4] focus:border-transparent',
          reset: 'hidden'
        }
      };
      
      const customHits = {
        container: '#hits',
        transformItems(items, { results }) {
          if (results.query === '') return [];
      
          return items;
        },
        templates: {
          item: (hit) => {
            if (!hit.hierarchy || !hit.url) return '';
            
            // Extract the section and title from hierarchy
            const section = hit.hierarchy.lvl0;
            const fullTitle = hit.hierarchy.lvl1;
            
            // Clean up the title by removing suffixes
            const title = fullTitle
              ?.replace(' | Deepgram', '')
              ?.replace(' - Deepgram API Reference', '')
              ?.trim();

            // Format and truncate content if it exists
            const content = hit.content
              ? hit.content
                  .replace(/(\d+ min read)/i, '<span class="text-[#949498]">$1</span>')
                  .replace(/(Last updated on [^0-9]*\d{4})/i, '<span class="text-[#949498]">$1</span>')
                  .substring(0, 200)  // Truncate to 200 characters
                  .trim() + (hit.content.length > 200 ? '...' : '')
              : '';

            return `
              <div class="p-4 hover:bg-[#232329] cursor-pointer transition-all duration-200 border-[#2C2C33]">
                <a href="${hit.url}" class="block group">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-medium px-2 py-1 rounded-full bg-[#1A1A1F] text-[#949498] border border-[#2C2C33]">
                      ${section}
                    </span>
                    ${hit.url.includes('developers.deepgram.com') ?  '' : `<span class="text-xs text-[#949498]">·</span>
                    <span class="text-xs text-[#949498]">${new URL(hit.url).hostname.replace('www.', '')}</span>`}
                  </div>
                  
                  <h4 class="text-lg font-semibold text-[#E1E1E5] group-hover:text-[#A1F9D4] transition-colors duration-200 mb-2">
                    ${title || 'Untitled'}
                  </h4>
                  
                  ${content ? `
                    <p class="text-sm text-[#E1E1E5] mb-3">
                      ${content}
                    </p>
                  ` : ''}

                  <div class="flex items-center text-[#949498] text-sm">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span class="group-hover:text-[#A1F9D4] transition-colors duration-200">
                      ${hit.type === 'content' ? 'Read More' : 'View Documentation'}
                    </span>
                  </div>
                </a>
              </div>
            `;
          },
          empty: (results) => {
            // Show different message if no search has been performed
            if (!results.query) {
              return `
                <div class="p-6 text-center bg-[#1A1A1F] rounded-lg border border-[#2C2C33]">
                  <svg class="w-12 h-12 mx-auto mb-3 text-[#949498]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p class="text-[#949498] text-lg mb-1">Start typing to search</p>
                  <p class="text-[#949498] text-sm">Search across documentation, guides, and more</p>
                </div>
              `;
            }
            
            return `
              <div class="p-6 text-center bg-[#1A1A1F] rounded-lg border border-[#2C2C33]">
                <svg class="w-12 h-12 mx-auto mb-3 text-[#949498]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-[#949498] text-lg mb-1">No results found for "${results.query}"</p>
                <p class="text-[#949498] text-sm">Try adjusting your search terms</p>
              </div>
            `;
          }
        },
        cssClasses: {
          list: 'divide-y',
          item: 'transition duration-150 ease-in-out'
        }
      };
      
      search.addWidgets([
        instantsearch.widgets.searchBox(customSearchBox),
        instantsearch.widgets.hits(customHits),
        instantsearch.widgets.configure({
          hitsPerPage: 5,
        }),
        instantsearch.widgets.pagination({
          container: '#pagination',
          padding: 2,
        })
      ]);

      // Add click handler to the search button
      newElement.addEventListener('click', (e) => {
        e.preventDefault();
        modalContainer.style.display = 'block';
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          document.getElementById('fern-search-button').click();
        }
      });

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
