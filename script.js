// Productos Data
const PRODUCTS = [
  // Zapatos
  {
    id: '1',
    name: 'Air Max Velocity',
    category: 'Zapatos de Running',
    price: 8995,
    originalPrice: 11995,
    image: 'productos/velocity-1.webp',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
    description: 'Experimenta la máxima comodidad y estilo con nuestros zapatos premium para correr. Cuenta con tecnología de amortiguación avanzada y parte superior de malla transpirable para comodidad todo el día.',
  },
  {
    id: '2',
    name: 'Pro Court Elite',
    category: 'Zapatos de Baloncesto',
    price: 12995,
    image: 'productos/producto-2.webp',
    colors: ['#000000', '#FFFFFF', '#C0C0C0'],
    description: 'Domina la cancha con soporte superior para el tobillo y amortiguación receptiva. Diseñado para máximo rendimiento y durabilidad en la duela.',
  },
  {
    id: '3',
    name: 'Swift Runner Pro',
    category: 'Zapatos de Entrenamiento',
    price: 7495,
    originalPrice: 9995,
    image: 'productos/producto-3.webp',
    colors: ['#2ECC71', '#3498DB', '#E74C3C'],
    description: 'Zapatos de entrenamiento versátiles construidos para cualquier ejercicio. Del gimnasio a la pista, estos zapatos ofrecen rendimiento y comodidad.',
  },
  {
    id: '4',
    name: 'Classic Court',
    category: 'Zapatos Estilo de Vida',
    price: 6495,
    image: 'productos/producto-4.webp',
    colors: ['#FFFFFF', '#000000', '#FF69B4'],
    description: 'Estilo atemporal se encuentra con comodidad moderna. Perfecto para el uso diario con construcción de cuero premium.',
  },
  {
    id: '5',
    name: 'Trail Blazer X',
    category: 'Running de Montaña',
    price: 10495,
    image: 'productos/producto-5.webp',
    colors: ['#8B4513', '#228B22', '#FF8C00'],
    description: 'Conquista cualquier terreno con tracción agresiva y durabilidad robusta. Construido para los senderos.',
  },
  {
    id: '6',
    name: 'Speed Racer',
    category: 'Zapatos de Carreras',
    price: 14995,
    image: 'productos/producto-6.webp',
    colors: ['#FF0000', '#FFA500', '#FFFF00'],
    description: 'Zapatos de carreras ultra livianos diseñados para la velocidad. Placa de fibra de carbono para máximo retorno de energía.',
  },
  {
    id: '16',
    name: 'Phantom Strike Pro',
    category: 'Zapatos de Fútbol',
    price: 11995,
    image: 'productos/producto-7.webp',
    colors: ['#000000', '#00FF00', '#FFFFFF'],
    description: 'Tacos de fútbol profesionales con control de balón superior. Perfectos para jugadores de élite que buscan precisión y agilidad.',
  },
  {
    id: '17',
    name: 'Court Vision Elite',
    category: 'Zapatos de Tenis',
    price: 8995,
    image: 'productos/producto-8.webp',
    colors: ['#FFFFFF', '#000080', '#FFD700'],
    description: 'Zapatos de tenis con estabilidad excepcional. Diseñados para movimientos laterales rápidos y durabilidad en la cancha.',
  },
  {
    id: '18',
    name: 'SB Skate Pro',
    category: 'Zapatos de Skateboarding',
    price: 7995,
    originalPrice: 9995,
    image: 'productos/producto-9.webp',
    colors: ['#000000', '#DC143C', '#1E90FF'],
    description: 'Zapatos de skate con suela de goma duradera y amortiguación mejorada. Grip superior para trucos técnicos.',
  },
  {
    id: '19',
    name: 'Metcon Power Trainer',
    category: 'Zapatos de Gimnasio',
    price: 9495,
    image: 'productos/producto-10.webp',
    colors: ['#696969', '#FF6347', '#00CED1'],
    description: 'Zapatos de entrenamiento cruzado con base estable para levantamiento de pesas. Versátiles para cualquier workout.',
  },
  {
    id: '20',
    name: 'Mountain Explorer',
    category: 'Botas de Senderismo',
    price: 12495,
    image: 'productos/producto-11.webp',
    colors: ['#8B4513', '#2F4F4F', '#556B2F'],
    description: 'Botas de senderismo impermeables con soporte de tobillo. Perfectas para aventuras en terrenos difíciles.',
  },
  {
    id: '21',
    name: 'Sprint Track Elite',
    category: 'Zapatos de Atletismo',
    price: 13995,
    image: 'productos/producto-12.webp',
    colors: ['#FF4500', '#FFD700', '#00FF00'],
    description: 'Zapatillas de atletismo con clavos para pista. Diseñadas para velocistas que buscan máximo rendimiento.',
  },
  {
    id: '22',
    name: 'Urban Street Walker',
    category: 'Zapatos Casuales',
    price: 5995,
    originalPrice: 7995,
    image: 'productos/producto-13.webp',
    colors: ['#DCDCDC', '#000000', '#4169E1'],
    description: 'Zapatillas urbanas con estilo moderno y comodidad todo el día. Perfectas para el uso diario en la ciudad.',
  },
  {
    id: '23',
    name: 'Flex Run Plus',
    category: 'Zapatos de Running',
    price: 8495,
    image: 'productos/producto-14.png',
    colors: ['#20B2AA', '#FF1493', '#FFD700'],
    description: 'Zapatos de running flexibles con excelente retorno de energía. Ideales para corredores de largas distancias.',
  },
  {
    id: '24',
    name: 'CrossFit Dominator',
    category: 'Zapatos de Entrenamiento',
    price: 10995,
    image: 'productos/producto-15.webp',
    colors: ['#000000', '#FF6B6B', '#4ECDC4'],
    description: 'Zapatos especializados para CrossFit con soporte multidireccional. Perfectos para entrenamientos de alta intensidad.',
  },
];

// Estado de la aplicación
let currentCategory = 'all';
let cartItems = [];
let favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];
let selectedProduct = null;
let showHero = true;
let currentHeroSlide = 0;
let heroInterval = null;
let sortOrder = 'default'; // 'default', 'price-low', 'price-high', 'name-asc', 'name-desc'

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const productsCount = document.getElementById('productsCount');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const closeCart = document.getElementById('closeCart');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const categoryTitle = document.getElementById('categoryTitle');
const heroSection = document.getElementById('heroSection');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');
const heroDots = document.getElementById('heroDots');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHero();
  initFilters();
  initCart();
  initSort();
  initFavorites();
  renderProducts();
  updateCartBadge();
  updateFavoritesBadge();
});

// Navegación
function initNavigation() {
  // Botones de categoría
  document.querySelectorAll('.nav-btn, .logo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.category || 'all';
      handleCategoryChange(category);
    });
  });

  // Botones del hero
  document.querySelectorAll('.hero-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleShopNow();
    });
  });

  // Botón del carrito
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      openCart();
    });
  }
}

function handleCategoryChange(category) {
  currentCategory = category;
  showHero = category === 'all';
  
  // Actualizar botones activos
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Mostrar/ocultar hero
  if (heroSection) {
    heroSection.style.display = showHero ? 'block' : 'none';
  }

  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Renderizar productos
  renderProducts();
}

function handleShopNow() {
  currentCategory = 'all';
  showHero = false;
  if (heroSection) {
    heroSection.style.display = 'none';
  }
  setTimeout(() => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  }, 100);
  renderProducts();
}

// Hero Slider
function initHero() {
  if (!heroSection) return;

  // Crear dots
  const slides = heroSection.querySelectorAll('.hero-slide');
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `hero-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    if (heroDots) heroDots.appendChild(dot);
  });

  // Navegación
  if (heroPrev) {
    heroPrev.addEventListener('click', () => {
      prevSlide();
    });
  }

  if (heroNext) {
    heroNext.addEventListener('click', () => {
      nextSlide();
    });
  }

  // Auto-play
  startHeroAutoPlay();
}

function goToSlide(index) {
  const slides = heroSection.querySelectorAll('.hero-slide');
  const dots = heroSection.querySelectorAll('.hero-dot');
  
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  currentHeroSlide = index;
}

function nextSlide() {
  const slides = heroSection.querySelectorAll('.hero-slide');
  const next = (currentHeroSlide + 1) % slides.length;
  goToSlide(next);
}

function prevSlide() {
  const slides = heroSection.querySelectorAll('.hero-slide');
  const prev = (currentHeroSlide - 1 + slides.length) % slides.length;
  goToSlide(prev);
}

function startHeroAutoPlay() {
  if (heroInterval) clearInterval(heroInterval);
  heroInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

// Filtros
function initFilters() {
  // Filtros colapsables
  document.querySelectorAll('.filter-header').forEach(header => {
    header.addEventListener('click', () => {
      const options = header.nextElementSibling;
      if (options) {
        const isHidden = options.style.display === 'none';
        options.style.display = isHidden ? 'flex' : 'none';
        // Rotar icono
        const icon = header.querySelector('svg');
        if (icon) {
          icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      }
    });
  });

  // Filtros de género y precio - usar delegación de eventos para que funcione incluso si los elementos se recrean
  document.addEventListener('change', (e) => {
    if (e.target.matches('.filter-option input[type="checkbox"]')) {
      renderProducts();
    }
  });
}

function getFilteredProducts() {
  let filtered = PRODUCTS;

  // Filtro por categoría
  if (currentCategory === 'shoes') {
    filtered = filtered.filter(p => 
      p.category.toLowerCase().includes('zapato') || 
      p.category.toLowerCase().includes('running') || 
      p.category.toLowerCase().includes('entrenamiento') || 
      p.category.toLowerCase().includes('baloncesto') || 
      p.category.toLowerCase().includes('carrera') || 
      p.category.toLowerCase().includes('estilo') || 
      p.category.toLowerCase().includes('montaña') || 
      p.category.toLowerCase().includes('fútbol') || 
      p.category.toLowerCase().includes('tenis') || 
      p.category.toLowerCase().includes('skate') || 
      p.category.toLowerCase().includes('gimnasio') || 
      p.category.toLowerCase().includes('bota') || 
      p.category.toLowerCase().includes('atletismo') || 
      p.category.toLowerCase().includes('casual')
    );
  } else if (currentCategory === 'pants') {
    filtered = filtered.filter(p => p.category === 'Pantalones');
  } else if (currentCategory === 'shirts') {
    filtered = filtered.filter(p => p.category === 'Camisas');
  } else if (currentCategory === 'sale') {
    filtered = filtered.filter(p => p.originalPrice && p.originalPrice > p.price);
  }

  // Filtros de precio
  const selectedPrices = Array.from(document.querySelectorAll('.filter-option input[type="checkbox"]'))
    .filter(cb => cb.checked && cb.value && cb.value.includes('$'))
    .map(cb => cb.value);

  if (selectedPrices.length > 0) {
    filtered = filtered.filter(p => {
      return selectedPrices.some(range => {
        if (range === 'Menos de $ 2,500') return p.price < 2500;
        if (range === '$ 2,501 - $ 7,500') return p.price >= 2501 && p.price <= 7500;
        if (range === 'Más de $ 7,500') return p.price > 7500;
        return false;
      });
    });
  }

  // Ordenamiento
  filtered = sortProducts(filtered, sortOrder);

  // Nota: Los filtros de género no se aplican porque los productos no tienen campo de género
  // Si se selecciona algún género, simplemente se muestran todos los productos (no filtra)

  return filtered;
}

function sortProducts(products, order) {
  const sorted = [...products];
  
  switch (order) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sorted;
  }
}

function getCategoryTitle() {
  switch (currentCategory) {
    case 'shoes':
      return 'Zapatos';
    case 'pants':
      return 'Pantalones';
    case 'shirts':
      return 'Camisas';
    case 'sale':
      return 'Ofertas';
    default:
      return 'Nuevo y Destacado';
  }
}

// Renderizar productos
function renderProducts() {
  const products = getFilteredProducts();
  
  if (categoryTitle) {
    categoryTitle.textContent = getCategoryTitle();
  }

  if (productsCount) {
    productsCount.textContent = `${products.length} Resultados`;
  }

  if (!productsGrid) return;

  productsGrid.innerHTML = '';

  products.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const isFavorite = favoriteItems.includes(product.id);

  card.innerHTML = `
    <div class="product-image-wrapper">
      <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400?text=Imagen+No+Disponible'">
      <button class="product-favorite ${isFavorite ? 'active' : ''}" data-product-id="${product.id}" onclick="event.stopPropagation(); toggleFavorite('${product.id}')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
      ${isOnSale ? '<div class="product-badge">Oferta</div>' : ''}
    </div>
    <div class="product-info">
      <p class="product-new">Recién Llegado</p>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-category">${product.category}</p>
      ${product.colors ? `<p class="product-colors">${product.colors.length} Colores</p>` : ''}
      <div class="product-price">
        <span class="product-price-current">$ ${product.price.toLocaleString()}</span>
        ${isOnSale && product.originalPrice ? `<span class="product-price-original">$ ${product.originalPrice.toLocaleString()}</span>` : ''}
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    openProductModal(product);
  });

  return card;
}

// Modal de producto
function openProductModal(product) {
  selectedProduct = product;
  if (!productModal || !modalBody) return;

  const sizes = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'];
  const isOnSale = product.originalPrice && product.originalPrice > product.price;

  modalBody.innerHTML = `
    <div class="modal-product">
      <div class="modal-product-images">
        <div class="modal-main-image">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400?text=Imagen+No+Disponible'">
        </div>
      </div>
      <div class="modal-product-info">
        <h1 class="modal-product-title">${product.name}</h1>
        <p class="modal-product-category">${product.category}</p>
        <p class="modal-product-description">${product.description}</p>
        <div class="modal-product-prices">
          <span class="modal-product-price">$ ${product.price.toLocaleString()}</span>
          ${isOnSale && product.originalPrice ? `<span class="modal-product-price-original">$ ${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        ${product.colors ? `
          <div class="modal-colors">
            <h3>Seleccionar Colores</h3>
            <div class="modal-colors-list">
              ${product.colors.map((color, idx) => `
                <button class="modal-color-btn" style="background-color: ${color}" title="${color}"></button>
              `).join('')}
            </div>
          </div>
        ` : ''}
        <div class="modal-sizes">
          <div class="modal-sizes-header">
            <h3>Seleccionar Talla</h3>
            <button class="modal-size-guide">Guía de Tallas</button>
          </div>
          <div class="modal-sizes-grid">
            ${sizes.map(size => `
              <button class="modal-size-btn" data-size="${size}">${size}</button>
            `).join('')}
          </div>
        </div>
        <div class="modal-quantity">
          <h3>Cantidad</h3>
          <div class="modal-quantity-controls">
            <button class="modal-quantity-btn" data-action="decrease">-</button>
            <span class="modal-quantity-value" id="modalQuantity">1</span>
            <button class="modal-quantity-btn" data-action="increase">+</button>
          </div>
        </div>
        <div class="modal-actions">
          <button class="modal-add-cart" id="addToCartBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Agregar al Carrito
          </button>
          <button class="modal-favorite ${favoriteItems.includes(product.id) ? 'active' : ''}" id="modalFavoriteBtn" data-product-id="${product.id}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${favoriteItems.includes(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            ${favoriteItems.includes(product.id) ? 'En Favoritos' : 'Agregar a Favoritos'}
          </button>
        </div>
        <div class="modal-features">
          <div class="modal-feature">
            <svg class="modal-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <div class="modal-feature-text">
              <p>Envío Gratis</p>
              <p>Ingresa tu código postal para ver las opciones de entrega</p>
            </div>
          </div>
          <div class="modal-feature">
            <svg class="modal-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <div class="modal-feature-text">
              <p>Devoluciones Gratis</p>
              <p>Devoluciones gratuitas dentro de 30 días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Event listeners del modal
  let selectedSize = '';
  let quantity = 1;

  document.querySelectorAll('.modal-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
    });
  });

  document.querySelectorAll('.modal-quantity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.action === 'increase') {
        quantity++;
      } else {
        quantity = Math.max(1, quantity - 1);
      }
      document.getElementById('modalQuantity').textContent = quantity;
    });
  });

  document.getElementById('addToCartBtn').addEventListener('click', () => {
    if (!selectedSize) {
      Swal.fire({
        icon: 'warning',
        title: 'Talla requerida',
        text: 'Por favor selecciona una talla',
        confirmButtonText: 'OK',
        confirmButtonColor: '#000'
      });
      return;
    }
    addToCart(product, selectedSize, quantity);
    closeProductModal();
    Swal.fire({
      icon: 'success',
      title: '¡Agregado al carrito!',
      text: `${product.name} se ha agregado a tu bolsa`,
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    });
  });

  // Botón de favoritos en el modal
  const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
  if (modalFavoriteBtn) {
    // Remover listeners anteriores si existen
    const newBtn = modalFavoriteBtn.cloneNode(true);
    modalFavoriteBtn.parentNode.replaceChild(newBtn, modalFavoriteBtn);
    newBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(product.id);
    });
  }

  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  if (productModal) {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
  }
  selectedProduct = null;
}

if (closeModal) {
  closeModal.addEventListener('click', closeProductModal);
}

if (productModal) {
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });
}

// Carrito
function initCart() {
  if (closeCart) {
    closeCart.addEventListener('click', closeCartSidebar);
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartSidebar);
  }

  // Botón Finalizar Compra - usar delegación de eventos para que funcione siempre
  document.addEventListener('click', (e) => {
    if (e.target.closest('.checkout-btn')) {
      handleCheckout();
    }
  });
}

function handleCheckout() {
  if (cartItems.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Carrito vacío',
      text: 'No hay productos en tu bolsa',
      confirmButtonText: 'OK',
      confirmButtonColor: '#000'
    });
    return;
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  Swal.fire({
    title: '¿Finalizar compra?',
    html: `
      <p>Total a pagar: <strong>$${total.toLocaleString()}</strong></p>
      <p>Artículos: ${cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
    `,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Confirmar compra',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#000',
    cancelButtonColor: '#6b7280'
  }).then((result) => {
    if (result.isConfirmed) {
      // Simular proceso de compra
      Swal.fire({
        title: 'Procesando compra...',
        html: 'Por favor espera',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Simular delay de procesamiento
      setTimeout(() => {
        // Limpiar carrito
        cartItems = [];
        updateCartBadge();
        renderCart();
        closeCartSidebar();

        // Mostrar mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Compra realizada con éxito!',
          html: `
            <p>Tu pedido ha sido procesado correctamente.</p>
            <p>Recibirás un correo de confirmación pronto.</p>
            <p><strong>Total pagado: $${total.toLocaleString()}</strong></p>
          `,
          confirmButtonText: 'Continuar comprando',
          confirmButtonColor: '#000'
        });
      }, 2000);
    }
  });
}

function openCart() {
  if (cartSidebar) {
    cartSidebar.classList.add('active');
  }
  if (cartOverlay) {
    cartOverlay.classList.add('active');
  }
  document.body.style.overflow = 'hidden';
  renderCart();
}

function closeCartSidebar() {
  if (cartSidebar) {
    cartSidebar.classList.remove('active');
  }
  if (cartOverlay) {
    cartOverlay.classList.remove('active');
  }
  document.body.style.overflow = '';
}

function addToCart(product, size, quantity) {
  const existingItemIndex = cartItems.findIndex(
    item => item.id === product.id && item.size === size
  );

  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity += quantity;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      size,
      quantity,
    });
  }

  updateCartBadge();
  renderCart();
}

function updateQuantity(id, size, quantity) {
  const item = cartItems.find(item => item.id === id && item.size === size);
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      removeItem(id, size);
    } else {
      updateCartBadge();
      renderCart();
    }
  }
}

function removeItem(id, size) {
  const item = cartItems.find(item => item.id === id && item.size === size);
  cartItems = cartItems.filter(item => !(item.id === id && item.size === size));
  updateCartBadge();
  renderCart();
  
  if (item) {
    Swal.fire({
      icon: 'success',
      title: 'Producto eliminado',
      text: `${item.name} se ha eliminado de tu bolsa`,
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    });
  }
}

function renderCart() {
  if (!cartItemsContainer) return;

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <p>Tu bolsa está vacía</p>
        <p>Comienza a comprar para agregar artículos a tu bolsa</p>
      </div>
    `;
    if (cartFooter) {
      cartFooter.classList.remove('active');
    }
    return;
  }

  if (cartFooter) {
    cartFooter.classList.add('active');
  }

  cartItemsContainer.innerHTML = cartItems.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/200?text=Imagen+No+Disponible'">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-header">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">$ ${item.price.toLocaleString()}</span>
        </div>
        <p class="cart-item-category">${item.category}</p>
        <p class="cart-item-size">Talla: ${item.size}</p>
        <div class="cart-item-controls">
          <div class="cart-item-quantity">
            <button class="cart-item-quantity-btn" onclick="updateQuantity('${item.id}', '${item.size}', ${item.quantity - 1})">-</button>
            <span class="cart-item-quantity-value">${item.quantity}</span>
            <button class="cart-item-quantity-btn" onclick="updateQuantity('${item.id}', '${item.size}', ${item.quantity + 1})">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeItem('${item.id}', '${item.size}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal;

  if (cartSubtotal) {
    cartSubtotal.textContent = `$ ${subtotal.toLocaleString()}`;
  }
  if (cartTotal) {
    cartTotal.textContent = `$ ${total.toLocaleString()}`;
  }

  // El event listener se maneja con delegación de eventos en initCart
}

function updateCartBadge() {
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = count;
    if (count > 0) {
      cartBadge.classList.remove('hidden');
    } else {
      cartBadge.classList.add('hidden');
    }
  }
}

// Ordenamiento
function initSort() {
  const sortBtn = document.querySelector('.sort-btn');
  if (!sortBtn) return;

  // Crear dropdown de ordenamiento
  const sortDropdown = document.createElement('div');
  sortDropdown.className = 'sort-dropdown';
  sortDropdown.innerHTML = `
    <div class="sort-option ${sortOrder === 'default' ? 'active' : ''}" data-sort="default">
      <span>Predeterminado</span>
      ${sortOrder === 'default' ? '<span class="sort-check">✓</span>' : ''}
    </div>
    <div class="sort-option ${sortOrder === 'price-low' ? 'active' : ''}" data-sort="price-low">
      <span>Precio: Menor a Mayor</span>
      ${sortOrder === 'price-low' ? '<span class="sort-check">✓</span>' : ''}
    </div>
    <div class="sort-option ${sortOrder === 'price-high' ? 'active' : ''}" data-sort="price-high">
      <span>Precio: Mayor a Menor</span>
      ${sortOrder === 'price-high' ? '<span class="sort-check">✓</span>' : ''}
    </div>
    <div class="sort-option ${sortOrder === 'name-asc' ? 'active' : ''}" data-sort="name-asc">
      <span>Nombre: A-Z</span>
      ${sortOrder === 'name-asc' ? '<span class="sort-check">✓</span>' : ''}
    </div>
    <div class="sort-option ${sortOrder === 'name-desc' ? 'active' : ''}" data-sort="name-desc">
      <span>Nombre: Z-A</span>
      ${sortOrder === 'name-desc' ? '<span class="sort-check">✓</span>' : ''}
    </div>
  `;

  // Posicionar el dropdown
  sortBtn.style.position = 'relative';
  sortBtn.appendChild(sortDropdown);
  sortDropdown.style.display = 'none';

  // Toggle dropdown
  sortBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = sortDropdown.style.display === 'block';
    sortDropdown.style.display = isVisible ? 'none' : 'block';
    
    // Cerrar otros dropdowns
    document.querySelectorAll('.sort-dropdown').forEach(dd => {
      if (dd !== sortDropdown) dd.style.display = 'none';
    });
  });

  // Seleccionar opción de ordenamiento
  sortDropdown.querySelectorAll('.sort-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const newSort = option.dataset.sort;
      sortOrder = newSort;
      sortDropdown.style.display = 'none';
      renderProducts();
      updateSortDropdown();
    });
  });

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!sortBtn.contains(e.target)) {
      sortDropdown.style.display = 'none';
    }
  });
}

function updateSortDropdown() {
  const sortDropdown = document.querySelector('.sort-dropdown');
  if (!sortDropdown) return;

  sortDropdown.querySelectorAll('.sort-option').forEach(option => {
    const sort = option.dataset.sort;
    option.classList.toggle('active', sort === sortOrder);
    const check = option.querySelector('.sort-check');
    if (check) {
      check.style.display = sort === sortOrder ? 'inline' : 'none';
    }
  });
}

// Favoritos
function initFavorites() {
  // El botón de favoritos en el header ya existe, solo necesitamos agregar el badge
  const actionBtns = document.querySelectorAll('.header-actions .action-btn');
  // El botón de favoritos es el que tiene el SVG con el path del corazón (segundo botón)
  let favoriteBtn = null;
  actionBtns.forEach(btn => {
    const svg = btn.querySelector('svg path[d*="M20.84"]');
    if (svg && !btn.classList.contains('cart-btn') && !btn.classList.contains('mobile-menu-btn')) {
      favoriteBtn = btn;
    }
  });
  
  if (favoriteBtn && !favoriteBtn.querySelector('.favorite-badge')) {
    const badge = document.createElement('span');
    badge.className = 'favorite-badge';
    badge.id = 'favoriteBadge';
    favoriteBtn.appendChild(badge);
    favoriteBtn.classList.add('favorite-btn');
    
    // Agregar evento para mostrar favoritos
    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showFavorites();
    });
  }
  updateFavoritesBadge();
}

function toggleFavorite(productId) {
  const index = favoriteItems.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  const wasFavorite = index !== -1;
  
  if (index === -1) {
    // Agregar a favoritos
    favoriteItems.push(productId);
    Swal.fire({
      icon: 'success',
      title: '¡Agregado a favoritos!',
      text: product ? `${product.name} se ha agregado a tus favoritos` : 'Producto agregado a favoritos',
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    });
  } else {
    // Quitar de favoritos
    favoriteItems.splice(index, 1);
    Swal.fire({
      icon: 'info',
      title: 'Eliminado de favoritos',
      text: product ? `${product.name} se ha eliminado de tus favoritos` : 'Producto eliminado de favoritos',
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    });
  }
  
  // Guardar en localStorage
  localStorage.setItem('favorites', JSON.stringify(favoriteItems));
  
  // Actualizar badge
  updateFavoritesBadge();
  
  // Actualizar botón en el modal si está abierto
  const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
  if (modalFavoriteBtn && modalFavoriteBtn.dataset.productId === productId) {
    const isFavorite = favoriteItems.includes(productId);
    modalFavoriteBtn.classList.toggle('active', isFavorite);
    // Actualizar el SVG fill
    const svg = modalFavoriteBtn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', isFavorite ? 'currentColor' : 'none');
    }
    // Actualizar el texto - el texto está después del SVG
    const textNodes = Array.from(modalFavoriteBtn.childNodes).filter(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
    if (textNodes.length > 0) {
      textNodes[0].textContent = isFavorite ? 'En Favoritos' : 'Agregar a Favoritos';
    }
  }
  
  // Renderizar productos para actualizar los corazones en las tarjetas
  renderProducts();
}

function updateFavoritesBadge() {
  const badge = document.getElementById('favoriteBadge');
  if (badge) {
    badge.textContent = favoriteItems.length;
    if (favoriteItems.length > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function showFavorites() {
  if (favoriteItems.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'No tienes favoritos',
      text: 'Agrega productos a tus favoritos haciendo clic en el corazón',
      confirmButtonText: 'OK',
      confirmButtonColor: '#000'
    });
    return;
  }
  
  const favoriteProducts = PRODUCTS.filter(p => favoriteItems.includes(p.id));
  let favoritesList = '<div style="text-align: left; max-height: 400px; overflow-y: auto;">';
  favoritesList += favoriteProducts.map(product => `
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-bottom: 1px solid #e5e7eb;">
      <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
      <div style="flex: 1;">
        <h3 style="margin: 0; font-size: 1rem;">${product.name}</h3>
        <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">${product.category}</p>
        <p style="margin: 0.5rem 0 0 0; font-weight: 600;">$${product.price.toLocaleString()}</p>
      </div>
      <button onclick="toggleFavorite('${product.id}'); Swal.close();" style="background: none; border: none; cursor: pointer; color: #ef4444;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
  `).join('');
  favoritesList += '</div>';
  
  Swal.fire({
    title: 'Mis Favoritos',
    html: favoritesList,
    width: '600px',
    showConfirmButton: true,
    confirmButtonText: 'Cerrar',
    confirmButtonColor: '#000'
  });
}

// Hacer funciones globales para onclick
window.updateQuantity = updateQuantity;
window.removeItem = removeItem;
window.toggleFavorite = toggleFavorite;

