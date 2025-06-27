// Load items from localStorage
function loadPortfolio() {
  return JSON.parse(localStorage.getItem('portfolioItems') || '[]');
}

// Save items to localStorage
function savePortfolio(items) {
  localStorage.setItem('portfolioItems', JSON.stringify(items));
}

// Render
function renderPortfolio() {
  const list = document.getElementById('portfolio-list');
  const items = loadPortfolio();
  list.innerHTML = '';
  items.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = 'portfolio-item';
    li.innerHTML = `
      <div class="item-info">
        <div class="item-title">${item.title}</div>
        <div class="item-desc">${item.description}</div>
      </div>
      <button class="remove-btn" data-idx="${idx}">Remove</button>
    `;
    list.appendChild(li);
  });
}

// Add item
document.getElementById('portfolio-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  if (!title || !description) return;
  const items = loadPortfolio();
  items.push({ title, description });
  savePortfolio(items);
  renderPortfolio();
  this.reset();
});

// Remove item
document.getElementById('portfolio-list').addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-btn')) {
    const idx = parseInt(e.target.getAttribute('data-idx'));
    const items = loadPortfolio();
    items.splice(idx, 1);
    savePortfolio(items);
    renderPortfolio();
  }
});

// Initial render
renderPortfolio();