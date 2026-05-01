/* ========================================
   MAIN JAVASCRIPT
   Navigation, utilities, shared functionality
   ======================================== */

// ---- Favorites Management ----
const Favorites = {
  get() {
    const data = localStorage.getItem('estateLuxe_favorites');
    return data ? JSON.parse(data) : [];
  },

  add(propertyId) {
    const favorites = this.get();
    if (!favorites.includes(propertyId)) {
      favorites.push(propertyId);
      localStorage.setItem('estateLuxe_favorites', JSON.stringify(favorites));
      this.updateBadge();
      return true;
    }
    return false;
  },

  remove(propertyId) {
    let favorites = this.get();
    favorites = favorites.filter(id => id !== propertyId);
    localStorage.setItem('estateLuxe_favorites', JSON.stringify(favorites));
    this.updateBadge();
    return true;
  },

  toggle(propertyId) {
    if (this.isFavorite(propertyId)) {
      this.remove(propertyId);
      return false;
    } else {
      this.add(propertyId);
      return true;
    }
  },

  isFavorite(propertyId) {
    return this.get().includes(propertyId);
  },

  updateBadge() {
    const badges = document.querySelectorAll('.nav-favorites-count');
    const count = this.get().length;
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  init() {
    this.updateBadge();
  }
};

// ---- Compare Management ----
const Compare = {
  get() {
    const data = localStorage.getItem('estateLuxe_compare');
    return data ? JSON.parse(data) : [];
  },

  add(propertyId) {
    const compare = this.get();
    if (compare.length >= 3) {
      showToast('You can compare up to 3 properties', 'warning');
      return false;
    }
    if (!compare.includes(propertyId)) {
      compare.push(propertyId);
      localStorage.setItem('estateLuxe_compare', JSON.stringify(compare));
      return true;
    }
    return false;
  },

  remove(propertyId) {
    let compare = this.get();
    compare = compare.filter(id => id !== propertyId);
    localStorage.setItem('estateLuxe_compare', JSON.stringify(compare));
    return true;
  },

  isInCompare(propertyId) {
    return this.get().includes(propertyId);
  },

  clear() {
    localStorage.removeItem('estateLuxe_compare');
  }
};

// ---- Toast Notifications ----
function showToast(message, type = 'success', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg = type === 'success'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>'
    : type === 'error'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e67e22" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ---- Navigation ----
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileClose = document.querySelector('.mobile-menu-close');

  function openMobileMenu() {
    mobileMenu?.classList.add('open');
    mobileOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu?.classList.remove('open');
    mobileOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openMobileMenu);
  mobileClose?.addEventListener('click', closeMobileMenu);
  mobileOverlay?.addEventListener('click', closeMobileMenu);

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-menu-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ---- Back to Top ----
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Scroll Animations ----
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ---- Counter Animation ----
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  function update() {
    current += step;
    if (current < target) {
      el.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  update();
}

function initCounterAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => {
    observer.observe(el);
  });
}

// ---- Format Currency ----
function formatPrice(price) {
  if (price >= 1000000) {
    return '$' + (price / 1000000).toFixed(2) + 'M';
  } else if (price >= 1000) {
    return '$' + (price / 1000).toFixed(0) + 'K';
  }
  return '$' + price.toLocaleString();
}

function formatPriceFull(price) {
  return '$' + price.toLocaleString();
}

// ---- Format Date ----
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// ---- Debounce ----
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ---- Get URL Params ----
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params) {
    result[key] = value;
  }
  return result;
}

// ---- Property Card HTML Generator ----
function createPropertyCard(property, options = {}) {
  const { showCompare = false, view = 'grid' } = options;
  const isFav = Favorites.isFavorite(property.id);
  const isCompare = Compare.isInCompare(property.id);
  const agent = agents.find(a => a.id === property.agentId);

  return `
    <div class="property-card ${view === 'list' ? 'list-view' : ''}" data-id="${property.id}">
      <div class="property-card-image">
        <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
        <span class="property-card-badge ${property.status === 'For Sale' ? 'sale' : 'rent'}">${property.status}</span>
        ${property.featured ? '<span class="property-card-badge featured">Featured</span>' : ''}
        <button class="property-card-favorite ${isFav ? 'active' : ''}" onclick="event.preventDefault(); toggleFavorite(${property.id}, this)" aria-label="Add to favorites">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
      </div>
      <div class="property-card-content">
        <div class="property-card-price">${formatPriceFull(property.price)}</div>
        <a href="property-detail.html?id=${property.id}" class="property-card-title">${property.title}</a>
        <div class="property-card-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${property.city}, ${property.state}
        </div>
        <div class="property-card-specs">
          <span class="property-card-spec">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M5 20v-5a2 2 0 012-2h10a2 2 0 012 2v5M9 13V9a3 3 0 016 0v4"/></svg>
            ${property.beds} Beds
          </span>
          <span class="property-card-spec">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M9 12V8a2 2 0 012-2h2a2 2 0 012 2v4"/></svg>
            ${property.baths} Baths
          </span>
          <span class="property-card-spec">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            ${property.sqft.toLocaleString()} sqft
          </span>
        </div>
        ${showCompare ? `
        <div class="mt-3">
          <label class="filter-checkbox">
            <input type="checkbox" ${isCompare ? 'checked' : ''} onchange="toggleCompare(${property.id}, this)" data-id="${property.id}">
            <span>Compare</span>
          </label>
        </div>
        ` : ''}
      </div>
    </div>
  `;
}

// ---- Toggle Favorite ----
function toggleFavorite(propertyId, btn) {
  const isNowFav = Favorites.toggle(propertyId);
  if (btn) {
    btn.classList.toggle('active', isNowFav);
  }
  showToast(
    isNowFav ? 'Added to favorites' : 'Removed from favorites',
    isNowFav ? 'success' : 'success'
  );
}

// ---- Toggle Compare ----
function toggleCompare(propertyId, checkbox) {
  if (checkbox.checked) {
    const added = Compare.add(propertyId);
    if (!added) checkbox.checked = false;
  } else {
    Compare.remove(propertyId);
  }
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
  Favorites.init();
  initNavigation();
  initBackToTop();
  initScrollAnimations();
  initCounterAnimations();
});


/* ========================================
   CHAT WIDGET
   ======================================== */

const ChatWidget = {
  isOpen: false,
  messages: [],
  quickReplies: [
    "Buying a home",
    "Selling a home", 
    "Property prices",
    "Schedule a tour",
    "Mortgage info",
    "Contact an agent"
  ],

  responses: {
    greeting: [
      "Hello! Welcome to EstateLuxe. I'm your virtual assistant. How can I help you today?",
      "Hi there! Thanks for visiting EstateLuxe. What can I assist you with?",
      "Welcome! I'm here to help with your real estate questions. What would you like to know?"
    ],
    buy: [
      "Buying a home is exciting! I'd recommend starting with our property search. You can filter by location, price, beds, and baths. Would you like me to guide you to our listings?",
      "Great choice! Our Buy a Home service covers everything from property search to closing. Our expert agents specialize in finding the perfect match for your lifestyle and budget. Check out our Services page for more details!",
      "We make buying a home seamless. Start by browsing properties on our listings page, or I can connect you with one of our specialist agents who knows your target neighborhood inside and out."
    ],
    sell: [
      "Selling your property? Our agents use strategic marketing and deep market analysis to maximize your sale price. We handle staging, photography, showings, and negotiation. Visit our Services page to learn more!",
      "We'd love to help you sell! Our team provides complimentary property valuations and creates custom marketing plans. On average, our listings sell 20% faster than the market average.",
      "Ready to sell? The first step is a free property valuation. Our agents will analyze comparable sales and market trends to price your home competitively. Would you like to schedule a consultation?"
    ],
    rent: [
      "Looking for a rental? While we specialize in sales, we do have premium rental listings in select markets. Browse our properties and filter by 'For Rent' status to see available options.",
      "Our rental portfolio includes luxury apartments and homes in prime locations. Check out our properties page and use the status filter to see rentals. Need something specific? Let me know!"
    ],
    price: [
      "Our current listings range from $750K to $5.2M. We have properties across multiple price points in New York, Miami, Los Angeles, Chicago, Austin, and Seattle. What price range are you considering?",
      "Property prices vary by location and type. Manhattan penthouses start around $2M, while charming bungalows in Austin can be found under $1M. Use our price filter on the Properties page to find homes in your budget!",
      "I can help you understand pricing in your target area. Our listings include luxury homes from $750K to over $5M. Would you like to browse properties in a specific price range?"
    ],
    mortgage: [
      "Great question! Our mortgage calculator on each property page helps estimate monthly payments. For a $1M home with 20% down at 6.5% over 30 years, you'd pay roughly $5,057/month. Interest rates and terms vary—would you like to speak with our financing partners?",
      "Financing is a crucial step. We work with trusted mortgage brokers who can get you pre-approved quickly. Typical down payments range from 10-20%. Use our on-page mortgage calculator to estimate payments for any listing!",
      "Mortgage rates change frequently. Currently, most of our buyers are securing rates between 6-7%. A larger down payment can reduce your monthly costs significantly. Check our calculator on any property page, or I can connect you with a lender."
    ],
    tour: [
      "I'd be happy to help you schedule a tour! Each property page has a 'Schedule a Tour' form where you can pick a date and time. Our agents typically respond within 2 hours to confirm. Which property interests you?",
      "Scheduling a tour is easy! Visit any property detail page and fill out the tour form with your preferred date. We offer private showings seven days a week, including evenings. Virtual tours are also available for most listings.",
      "Tours can be scheduled directly from any property page. Just enter your name, email, phone, and preferred date. You can also request a virtual tour if you're browsing from out of town!"
    ],
    contact: [
      "You can reach us at (212) 555-0199 or info@estateluxe.com. Our office is at 350 Fifth Avenue, Suite 4500, New York, NY. Office hours are Mon-Fri 9am-6pm and Sat 10am-4pm. Visit our Contact page for more details!",
      "Our team is available Monday through Friday 9am-6pm, and Saturdays 10am-4pm. Call us at (212) 555-0199, email info@estateluxe.com, or fill out the contact form on our Contact page. We'd love to hear from you!",
      "The fastest way to reach an agent is to call (212) 555-0199 or use the contact form on our Contact page. For property-specific questions, you can also contact the listing agent directly from any property page."
    ],
    location: [
      "We have properties in New York, Miami, Los Angeles, Chicago, Austin, and Seattle. Each market has unique characteristics—Manhattan for urban luxury, Miami for waterfront living, LA for modern estates. Which city interests you?",
      "Our listings span America's most desirable markets. New York offers historic brownstones and penthouses. Miami features stunning waterfront villas. LA has architectural masterpieces in the hills. Browse by location on our Properties page!",
      "We specialize in prime neighborhoods: Upper East Side and Brooklyn in NYC, South Beach and Brickell in Miami, Beverly Hills and Hollywood Hills in LA, Gold Coast in Chicago, and Capitol Hill in Seattle. What area are you exploring?"
    ],
    agent: [
      "We have 6 specialist agents covering different markets and property types. Alexandra Sterling handles Manhattan luxury, Marcus Rivera specializes in Miami waterfront, and Olivia Chen covers LA architectural homes. Visit our Agents page to meet the full team!",
      "Our agents are true market experts with 10-20 years of experience each. They specialize in specific neighborhoods and property types, ensuring you get insider knowledge. Check out their profiles on the Agents page!",
      "Every client is paired with an agent who specializes in their target market. Whether you're looking for a NYC penthouse or an Austin farmhouse, we have an expert for you. Browse all agents on our Agents page."
    ],
    property: [
      "We currently have 15 premium listings ranging from modern condos to historic estates. All properties are verified and include detailed specs, photos, and virtual tours. Browse them all on our Properties page!",
      "Our portfolio includes luxury penthouses, waterfront villas, historic brownstones, modern farmhouses, and more. Each listing has professional photography, floor plans, and neighborhood info. Start browsing on our Properties page!",
      "Looking for something specific? You can filter by property type (House, Condo, Apartment, Villa, Penthouse), price range, bedrooms, bathrooms, and location. Try our search on the Properties page!"
    ],
    default: [
      "That's a great question! I'd recommend speaking with one of our specialist agents for detailed information. Would you like me to help you contact an agent, or is there something else I can assist with?",
      "I want to make sure you get the best answer. For more detailed assistance, you can call us at (212) 555-0199 or email info@estateluxe.com. In the meantime, is there anything else I can help you with?",
      "Thanks for your question! For the most accurate and up-to-date information, I'd suggest browsing our Properties page or speaking directly with an agent. Can I help you with anything else today?"
    ]
  },

  init() {
    this.injectHTML();
    this.bindEvents();
    this.loadHistory();
    
    // Show greeting after delay if no history
    if (this.messages.length === 0) {
      setTimeout(() => {
        this.addMessage('agent', this.getRandomResponse('greeting'));
        this.saveHistory();
      }, 2000);
    }
  },

  injectHTML() {
    const html = `
      <div class="chat-widget" id="chat-widget">
        <div class="chat-bubble" id="chat-bubble">Hi! Can I help you find your dream home?</div>
        <button class="chat-toggle" id="chat-toggle" aria-label="Open chat">
          <svg class="chat-open-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
          <svg class="chat-close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="chat-panel" id="chat-panel">
        <div class="chat-header">
          <div class="chat-header-avatar">E</div>
          <div class="chat-header-info">
            <h4>EstateLuxe Assistant</h4>
            <div class="chat-status">
              <span class="chat-status-dot"></span>
              <p>Online now</p>
            </div>
          </div>
        </div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="chat-quick-replies" id="chat-quick-replies"></div>
        <div class="chat-input-area">
          <input type="text" class="chat-input" id="chat-input" placeholder="Type your message..." maxlength="500">
          <button class="chat-send" id="chat-send" aria-label="Send message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
  },

  bindEvents() {
    const toggle = document.getElementById('chat-toggle');
    const panel = document.getElementById('chat-panel');
    const bubble = document.getElementById('chat-bubble');
    const input = document.getElementById('chat-input');
    const send = document.getElementById('chat-send');

    toggle.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      panel.classList.toggle('open', this.isOpen);
      toggle.classList.toggle('open', this.isOpen);
      if (this.isOpen) {
        bubble.style.display = 'none';
        input.focus();
        this.scrollToBottom();
      }
    });

    bubble.addEventListener('click', () => toggle.click());

    send.addEventListener('click', () => this.handleSend());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleSend();
    });
  },

  handleSend() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    this.addMessage('user', text);
    input.value = '';
    this.saveHistory();

    // Show typing indicator
    this.showTyping();

    // Generate response after delay
    setTimeout(() => {
      this.hideTyping();
      const response = this.generateResponse(text);
      this.addMessage('agent', response);
      this.saveHistory();
    }, 1200 + Math.random() * 800);
  },

  generateResponse(text) {
    const lower = text.toLowerCase();
    
    if (/\b(hi|hello|hey|good morning|good afternoon|good evening|howdy)\b/.test(lower)) {
      return this.getRandomResponse('greeting');
    }
    if (/\b(buy|purchase|buying|purchasing|looking for a home)\b/.test(lower)) {
      return this.getRandomResponse('buy');
    }
    if (/\b(sell|selling|list my|listing|put on market)\b/.test(lower)) {
      return this.getRandomResponse('sell');
    }
    if (/\b(rent|renting|lease|leasing|rental)\b/.test(lower)) {
      return this.getRandomResponse('rent');
    }
    if (/\b(price|cost|how much|pricing|expensive|cheap|budget|afford)\b/.test(lower)) {
      return this.getRandomResponse('price');
    }
    if (/\b(mortgage|loan|finance|financing|interest rate|down payment|pre-approved|lender)\b/.test(lower)) {
      return this.getRandomResponse('mortgage');
    }
    if (/\b(tour|schedule|visit|see|showing|open house|appointment)\b/.test(lower)) {
      return this.getRandomResponse('tour');
    }
    if (/\b(contact|call|email|reach|phone|speak to|talk to|get in touch)\b/.test(lower)) {
      return this.getRandomResponse('contact');
    }
    if (/\b(location|city|neighborhood|area|community|district|where)\b/.test(lower)) {
      return this.getRandomResponse('location');
    }
    if (/\b(agent|realtor|broker|specialist|representative|consultant)\b/.test(lower)) {
      return this.getRandomResponse('agent');
    }
    if (/\b(property|house|home|condo|apartment|villa|penthouse|listing)\b/.test(lower)) {
      return this.getRandomResponse('property');
    }
    if (/\b(thank|thanks|appreciate|grateful)\b/.test(lower)) {
      return "You're very welcome! It's my pleasure to help. If you have any other questions or need assistance browsing properties, feel free to ask. Have a wonderful day!";
    }
    if (/\b(bye|goodbye|see you|later|have a good)\b/.test(lower)) {
      return "Goodbye! Thank you for visiting EstateLuxe. We hope to help you find your perfect home soon. Feel free to come back anytime!";
    }
    
    return this.getRandomResponse('default');
  },

  getRandomResponse(category) {
    const responses = this.responses[category] || this.responses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  },

  addMessage(sender, text) {
    const container = document.getElementById('chat-messages');
    const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    const initials = sender === 'agent' ? 'E' : 'You';
    
    const msgHTML = `
      <div class="chat-message ${sender}">
        <div class="chat-message-avatar">${initials}</div>
        <div>
          <div class="chat-message-bubble">${this.escapeHtml(text)}</div>
          <div class="chat-message-time">${time}</div>
        </div>
      </div>
    `;
    
    container.insertAdjacentHTML('beforeend', msgHTML);
    this.messages.push({ sender, text, time });
    this.scrollToBottom();
    this.renderQuickReplies();
  },

  showTyping() {
    const container = document.getElementById('chat-messages');
    const typingHTML = `
      <div class="chat-message agent" id="chat-typing-indicator">
        <div class="chat-message-avatar">E</div>
        <div class="chat-message-bubble">
          <div class="chat-typing">
            <div class="chat-typing-dot"></div>
            <div class="chat-typing-dot"></div>
            <div class="chat-typing-dot"></div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', typingHTML);
    this.scrollToBottom();
  },

  hideTyping() {
    const indicator = document.getElementById('chat-typing-indicator');
    if (indicator) indicator.remove();
  },

  renderQuickReplies() {
    const container = document.getElementById('chat-quick-replies');
    container.innerHTML = this.quickReplies.map(reply => `
      <button class="chat-quick-reply" onclick="ChatWidget.sendQuickReply('${reply}')">${reply}</button>
    `).join('');
  },

  sendQuickReply(text) {
    const input = document.getElementById('chat-input');
    input.value = text;
    this.handleSend();
  },

  scrollToBottom() {
    const container = document.getElementById('chat-messages');
    setTimeout(() => {
      container.scrollTop = container.scrollHeight;
    }, 50);
  },

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  saveHistory() {
    localStorage.setItem('estateLuxe_chat', JSON.stringify(this.messages));
  },

  loadHistory() {
    const data = localStorage.getItem('estateLuxe_chat');
    if (data) {
      this.messages = JSON.parse(data);
      const container = document.getElementById('chat-messages');
      container.innerHTML = this.messages.map(m => {
        const initials = m.sender === 'agent' ? 'E' : 'You';
        return `
          <div class="chat-message ${m.sender}">
            <div class="chat-message-avatar">${initials}</div>
            <div>
              <div class="chat-message-bubble">${this.escapeHtml(m.text)}</div>
              <div class="chat-message-time">${m.time}</div>
            </div>
          </div>
        `;
      }).join('');
      this.scrollToBottom();
    }
    this.renderQuickReplies();
  }
};

// Initialize chat on page load
document.addEventListener('DOMContentLoaded', () => {
  ChatWidget.init();
});
