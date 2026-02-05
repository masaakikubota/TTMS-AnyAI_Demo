// Main App — Routing, page switching, filter control
(function() {
  'use strict';

  const PAGES = {
    overview:        { title: 'OVERVIEW',          renderer: window.OverviewPage },
    sellercenter:    { title: 'SELLER CENTER',     renderer: window.SellerCenterPage },
    ttms:            { title: 'TIKTOK MARKETSCOPE', renderer: window.TTMSPage },
    contentanalysis: { title: 'CONTENT ANALYSIS',  renderer: window.ContentAnalysisPage }
  };

  const DEFAULT_CATEGORY = 'bc';
  const DEFAULT_PAGE = 'overview';

  let currentCategory = DEFAULT_CATEGORY;
  let currentPage = DEFAULT_PAGE;

  // Parse hash: #/bc/overview -> { category: 'bc', page: 'overview' }
  function parseHash() {
    const hash = window.location.hash.replace('#/', '');
    const parts = hash.split('/');
    return {
      category: (parts[0] === 'bc' || parts[0] === 'fc') ? parts[0] : DEFAULT_CATEGORY,
      page: PAGES[parts[1]] ? parts[1] : DEFAULT_PAGE
    };
  }

  // Update URL hash without triggering hashchange
  function setHash(category, page) {
    const newHash = `#/${category}/${page}`;
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
  }

  // Render the current page
  function renderPage() {
    const container = document.getElementById('contentArea');
    const pageTitle = document.getElementById('pageTitle');
    const pageConfig = PAGES[currentPage];

    if (!pageConfig || !pageConfig.renderer) {
      container.innerHTML = '<p style="padding:40px;color:#999">Page not found</p>';
      return;
    }

    // Update title
    pageTitle.textContent = pageConfig.title;

    // Update top tabs
    document.querySelectorAll('.page-tab').forEach(tab => {
      const tabPage = tab.dataset.page;
      tab.classList.toggle('active', tabPage === currentPage);
      tab.href = `#/${currentCategory}/${tabPage}`;
    });

    // Update sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
      const itemPage = item.dataset.page;
      item.classList.toggle('active', itemPage === currentPage);
      item.href = `#/${currentCategory}/${itemPage}`;
    });

    // Update category dropdown
    document.getElementById('filterCategory').value = currentCategory;

    // Clear and render
    container.innerHTML = '';
    pageConfig.renderer.render(currentCategory, container);
  }

  // Navigate
  function navigate(category, page) {
    currentCategory = category;
    currentPage = page;
    setHash(category, page);
    renderPage();
    // Scroll content to top
    document.querySelector('.main-card').scrollTop = 0;
  }

  // --- Event Listeners ---

  // Hash change (back/forward)
  window.addEventListener('hashchange', function() {
    const { category, page } = parseHash();
    currentCategory = category;
    currentPage = page;
    renderPage();
  });

  // Top tabs
  document.querySelectorAll('.page-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      navigate(currentCategory, this.dataset.page);
    });
  });

  // Sidebar items
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      navigate(currentCategory, this.dataset.page);
    });
  });

  // Category filter
  document.getElementById('filterCategory').addEventListener('change', function() {
    navigate(this.value, currentPage);
  });

  // Period / Benchmark filters (visual only for mock)
  document.getElementById('filterPeriod').addEventListener('change', function() {
    renderPage();
  });
  document.getElementById('filterBenchmark').addEventListener('change', function() {
    renderPage();
  });

  // --- Initialize ---
  function init() {
    const { category, page } = parseHash();
    currentCategory = category;
    currentPage = page;

    if (!window.location.hash) {
      setHash(DEFAULT_CATEGORY, DEFAULT_PAGE);
    }

    renderPage();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
