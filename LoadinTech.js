// Product data
const products = [
    // CPUs
    {
        id: 1,
        name: "Intel Core i9-13900K",
        category: "cpu",
        price: 589.99,
        image: "🔧",
        description: "High-performance 24-core processor for gaming and content creation",
        specs: "24 cores, 32 threads, 5.8GHz boost",
        brand: "Intel"
    },
    {
        id: 5,
        name: "AMD Ryzen 9 7950X",
        category: "cpu",
        price: 699.99,
        image: "🔧",
        description: "16-core powerhouse for professional workloads",
        specs: "16 cores, 32 threads, 5.7GHz boost",
        brand: "AMD"
    },
    // GPUs
    {
        id: 2,
        name: "NVIDIA RTX 4080",
        category: "gpu",
        price: 1199.99,
        image: "🎮",
        description: "Flagship graphics card for 4K gaming and ray tracing",
        specs: "16GB GDDR6X, 2505MHz boost clock",
        brand: "NVIDIA"
    },
    {
        id: 6,
        name: "NVIDIA RTX 4070",
        category: "gpu",
        price: 599.99,
        image: "🎮",
        description: "Excellent 1440p gaming performance with DLSS 3",
        specs: "12GB GDDR6X, 2475MHz boost clock",
        brand: "NVIDIA"
    },
    {
        id: 3,// RAM
        name: "Corsair Vengeance 32GB DDR5",
        category: "ram",
        price: 299.99,
        image: "💾",
        description: "High-speed DDR5 memory kit for demanding applications",
        specs: "32GB (2x16GB), 5600MHz, CL36",
        brand: "Corsair"
    },
    {
         id: 7,
         name: "G.Skill Trident Z5 16GB",
         category: "ram",
         price: 149.99,
         image: "💾",
         description: "Premium DDR5 memory with RGB lighting",
         specs: "16GB (2x8GB), 6000MHz, CL30",
         brand: "G.Skill"
    },
    {
        id: 4,// Storage
        name: "Samsung 980 PRO 2TB",
        category: "storage",
        price: 199.99,
        image: "💿",
        description: "Ultra-fast NVMe SSD for lightning-quick load times",
        specs: "2TB capacity, 7000MB/s read speed",
        brand: "Samsung"
    },
    {
        id: 8,
        name: "WD Black SN850X 1TB",
        category: "storage",
        price: 129.99,
        image: "💿",
        description: "Gaming-optimized NVMe SSD with heatsink",
        specs: "1TB capacity, 7300MB/s read speed",
        brand: "Western Digital"
    },
    {
        id: 9,// Motherboards
        name: "ASUS ROG Strix Z790-E",
        category: "motherboard",
        price: 449.99,
        image: "🔌",
        description: "Premium Z790 motherboard with WiFi 6E and DDR5 support",
        specs: "LGA1700, DDR5-7200, PCIe 5.0, WiFi 6E",
        brand: "ASUS"
    },
    {
        id: 10,
        name: "MSI MAG B650 Tomahawk",
        category: "motherboard",
        price: 229.99,
        image: "🔌",
        description: "Feature-rich AM5 motherboard for Ryzen 7000 series",
        specs: "AM5, DDR5-5600, PCIe 4.0, USB 3.2 Gen2",
        brand: "MSI"
    },
    {
        id: 11,// Power Supplies
        name: "Corsair RM850x 850W",
        category: "psu",
        price: 149.99,
        image: "⚡",
        description: "80+ Gold modular power supply with zero RPM mode",
        specs: "850W, 80+ Gold, Fully Modular, 10-year warranty",
        brand: "Corsair"
    },
    {
        id: 12,
        name: "EVGA SuperNOVA 750W",
        category: "psu",
        price: 119.99,
        image: "⚡",
        description: "Reliable 80+ Gold PSU for high-end gaming builds",
        specs: "750W, 80+ Gold, Semi-Modular, 7-year warranty",
        brand: "EVGA"
    },
    {
        id: 13,// Cooling
        name: "Noctua NH-D15",
        category: "cooling",
        price: 109.99,
        image: "❄️",
        description: "Premium dual-tower CPU cooler with exceptional performance",
        specs: "Dual 140mm fans, 6 heat pipes, AM5/LGA1700 compatible",
        brand: "Noctua"
            },
            {
        id: 14,
        name: "Corsair H100i RGB Elite",
        category: "cooling",
        price: 149.99,
        image: "❄️",
        description: "240mm AIO liquid cooler with RGB lighting",
        specs: "240mm radiator, RGB pump head, iCUE software",
        brand: "Corsair"
            },
            // Cases
            {
        id: 15,
        name: "Fractal Design Define 7",
        category: "case",
        price: 169.99,
        image: "📦",
        description: "Silent mid-tower case with excellent build quality",
        specs: "Mid-tower, Sound dampening, 9 expansion slots",
        brand: "Fractal Design"
            },
            {
        id: 16,
        name: "NZXT H7 Flow",
        category: "case",
        price: 129.99,
        image: "📦",
        description: "High-airflow gaming case with tempered glass",
        specs: "Mid-tower, Tempered glass, 3x 120mm fans included",
        brand: "NZXT"
            },
            // Laptops
            {
        id: 17,
        name: "ASUS ROG Strix G15",
        category: "laptop",
        price: 1299.99,
        image: "💻",
        description: "Gaming laptop with RTX 4060 and Ryzen 7",
        specs: "15.6\" 144Hz, RTX 4060, Ryzen 7 7735HS, 16GB RAM",
        brand: "ASUS"
            },
            {
        id: 18,
        name: "MacBook Pro 14-inch",
        category: "laptop",
        price: 1999.99,
        image: "💻",
        description: "Professional laptop with M3 Pro chip",
        specs: "14\" Liquid Retina XDR, M3 Pro, 18GB RAM, 512GB SSD",
        brand: "Apple"
            },
            // Monitors
            {
        id: 19,
        name: "LG 27GP850-B",
        category: "monitor",
        price: 349.99,
        image: "🖥️",
        description: "27-inch 1440p gaming monitor with 165Hz",
        specs: "27\" QHD, 165Hz, 1ms, G-Sync Compatible, HDR10",
        brand: "LG"
            },
            {
        id: 20,
        name: "Samsung Odyssey G7",
        category: "monitor",
        price: 599.99,
        image: "🖥️",
        description: "32-inch curved gaming monitor with 240Hz",
        specs: "32\" QHD, 240Hz, 1ms, G-Sync, 1000R curve",
        brand: "Samsung"
            },
            // Keyboards
            {
        id: 21,
        name: "Logitech G Pro X",
        category: "keyboard",
        price: 129.99,
        image: "⌨️",
        description: "Tenkeyless mechanical gaming keyboard",
        specs: "TKL, Hot-swappable switches, RGB, USB-C",
        brand: "Logitech"
          },
            {
        id: 22,
        name: "Razer BlackWidow V4",
        category: "keyboard",
        price: 179.99,
        image: "⌨️",
        description: "Full-size mechanical keyboard with macro keys",
        specs: "Full-size, Green switches, RGB, Macro keys",
        brand: "Razer"
            },
            // Mice
            {
        id: 23,
        name: "Logitech G Pro X Superlight",
        category: "mouse",
        price: 149.99,
        image: "🖱️",
        description: "Ultra-lightweight wireless gaming mouse",
        specs: "63g weight, 25K DPI, 70-hour battery, HERO sensor",
        brand: "Logitech"
            },
            {
        id: 24,
        name: "Razer DeathAdder V3",
        category: "mouse",
        price: 89.99,
        image: "🖱️",
        description: "Ergonomic gaming mouse with Focus Pro sensor",
        specs: "30K DPI, Focus Pro 30K sensor, 90-hour battery",
        brand: "Razer"
            },
            // Headsets
            {
        id: 25,
        name: "SteelSeries Arctis 7P",
        category: "headset",
        price: 149.99,
        image: "🎧",
        description: "Wireless gaming headset with lossless audio",
        specs: "2.4GHz wireless, 24-hour battery, DTS Headphone:X",
        brand: "SteelSeries"
            },
            {
        id: 26,
        name: "HyperX Cloud Alpha",
        category: "headset",
        price: 99.99,
        image: "🎧",
        description: "Wired gaming headset with dual chamber drivers",
        specs: "Dual chamber drivers, Detachable mic, Aluminum frame",
        brand: "HyperX"
            },
            // Webcams
            {
        id: 27,
        name: "Logitech C920s HD Pro",
        category: "webcam",
        price: 69.99,
        image: "📹",
        description: "Full HD webcam with privacy shutter",
        specs: "1080p 30fps, Auto-focus, Privacy shutter, Stereo audio",
        brand: "Logitech"
            },
            // Speakers
            {
        id: 28,
        name: "Creative Pebble V3",
        category: "speaker",
        price: 39.99,
        image: "🔊",
        description: "Compact desktop speakers with RGB lighting",
        specs: "USB-C powered, RGB lighting, Clear Dialog enhancement",
        brand: "Creative"
            },
            // Tablets
            {
        id: 29,
        name: "iPad Pro 12.9-inch",
        category: "tablet",
        price: 1099.99,
        image: "📱",
        description: "Professional tablet with M2 chip and Liquid Retina display",
        specs: "12.9\" Liquid Retina XDR, M2 chip, 128GB, Wi-Fi",
        brand: "Apple"
            },
            {
        id: 30,
        name: "Samsung Galaxy Tab S9",
        category: "tablet",
        price: 799.99,
        image: "📱",
        description: "Android tablet with S Pen and 120Hz display",
        specs: "11\" LTPS TFT, Snapdragon 8 Gen 2, 128GB, S Pen included",
        brand: "Samsung"
            }
        ];

        // Flash sale products with discounts
        const flashSaleProducts = [
            {
                id: 101,
                name: "AMD Ryzen 7 7700X",
                category: "cpu",
                originalPrice: 399.99,
                salePrice: 279.99,
                discount: 30,
                image: "🔧",
                description: "8-core gaming processor with excellent performance",
                specs: "8 cores, 16 threads, 5.4GHz boost",
                stock: 15
            },
            {
                id: 102,
                name: "NVIDIA RTX 4060 Ti",
                category: "gpu",
                originalPrice: 499.99,
                salePrice: 349.99,
                discount: 30,
                image: "🎮",
                description: "Perfect for 1440p gaming with DLSS 3",
                specs: "16GB GDDR6, 2310MHz boost clock",
                stock: 8
            },
            {
                id: 103,
                name: "Crucial Ballistix 16GB DDR4",
                category: "ram",
                originalPrice: 89.99,
                salePrice: 53.99,
                discount: 40,
                image: "💾",
                description: "High-performance gaming memory",
                specs: "16GB (2x8GB), 3200MHz, CL16",
                stock: 25
            }
];

// Enhanced shop functionality
let cart = [];
let wishlist = [];
let compareList = [];
let currentFilter = 'all';
let currentBrand = null;
let currentSort = 'name';
let currentView = 'grid';
let searchQuery = '';
let priceRange = 'all';
let brandFilter = 'all';
let featuredProducts = [];
let isFullCatalogOpen = false;

// User authentication
let currentUser = null;
let isLoggedIn = false;

// Chat functionality
let chatMessages = [];
let isChatOpen = false;
let chatSessionId = null;

// Simulated Database using localStorage
const Database = {
    users: JSON.parse(localStorage.getItem('techhub_users') || '[]'),
    products: products,
    orders: JSON.parse(localStorage.getItem('techhub_orders') || '[]'),
    chatMessages: JSON.parse(localStorage.getItem('techhub_chat_messages') || '[]'),
    chatSessions: JSON.parse(localStorage.getItem('techhub_chat_sessions') || '[]'),
    wishlistData: JSON.parse(localStorage.getItem('techhub_wishlist') || '[]'),
    cartData: JSON.parse(localStorage.getItem('techhub_cart') || '[]'),

    save: function(table) {
        localStorage.setItem(`techhub_${table}`, JSON.stringify(this[table]));
    },
            
    createUser: function(userData) {
        const user = {
            id: Date.now(),
            ...userData,
            createdAt: new Date().toISOString(),
            isActive: true
        };
        this.users.push(user);
        this.save('users');
        return user;
    },
            
    findUser: function(email) {
        return this.users.find(user => user.email === email && user.isActive);
    },
            
    createOrder: function(orderData) {
        const order = {
            id: Date.now(),
            orderNumber: 'TH' + Date.now().toString().slice(-6),
            ...orderData,
            orderDate: new Date().toISOString(),
            status: 'Processing'
        };
        this.orders.push(order);
        this.save('orders');
        return order;
    },
            
    getUserOrders: function(userId) {
        return this.orders.filter(order => order.userId === userId);
    },
            
    createChatSession: function(userId) {
        const session = {
            id: Date.now(),
            userId: userId,
            sessionToken: 'session_' + Date.now(),
            startTime: new Date().toISOString(),
            status: 'Active'
        };
                this.chatSessions.push(session);
                this.save('chatSessions');
                return session;
            },
            
            saveChatMessage: function(sessionId, senderType, senderName, message) {
                const chatMessage = {
                    id: Date.now(),
                    sessionId: sessionId,
                    senderType: senderType,
                    senderName: senderName,
                    message: message,
                    timestamp: new Date().toISOString(),
                    isRead: false
                };
                this.chatMessages.push(chatMessage);
                this.save('chatMessages');
                return chatMessage;
            },
            
            getChatHistory: function(sessionId) {
                return this.chatMessages.filter(msg => msg.sessionId === sessionId);
            },
            
            addToWishlist: function(userId, productId) {
                const wishlistItem = {
                    id: Date.now(),
                    userId: userId,
                    productId: productId,
                    addedDate: new Date().toISOString()
                };
                this.wishlistData.push(wishlistItem);
                this.save('wishlistData');
                return wishlistItem;
            },
            
            removeFromWishlist: function(userId, productId) {
                this.wishlistData = this.wishlistData.filter(
                    item => !(item.userId === userId && item.productId === productId)
                );
                this.save('wishlistData');
            },
            
            getUserWishlist: function(userId) {
                return this.wishlistData.filter(item => item.userId === userId);
            },
            
            addToCart: function(userId, productId, quantity = 1) {
                const existingItem = this.cartData.find(
                    item => item.userId === userId && item.productId === productId
                );
                
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    const cartItem = {
                        id: Date.now(),
                        userId: userId,
                        productId: productId,
                        quantity: quantity,
                        addedDate: new Date().toISOString()
                    };
                    this.cartData.push(cartItem);
                }
                this.save('cartData');
            },
            
            getUserCart: function(userId) {
                return this.cartData.filter(item => item.userId === userId);
            },
            
            clearUserCart: function(userId) {
                this.cartData = this.cartData.filter(item => item.userId !== userId);
                this.save('cartData');
            }
        };

        // DOM elements
        const productGrid = document.getElementById('productGrid');
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const notification = document.getElementById('notification');
        const checkoutBtn = document.getElementById('checkoutBtn');

        // Load user's persistent data from database
        function loadUserData() {
            if (!currentUser) return;
            
            // Load wishlist
            const userWishlist = Database.getUserWishlist(currentUser.id);
            wishlist = userWishlist.map(item => item.productId);
            updateWishlistUI();
            
            // Load persistent cart
            const userCart = Database.getUserCart(currentUser.id);
            cart = userCart.map(cartItem => {
                const product = products.find(p => p.id === cartItem.productId);
                return product ? { ...product, quantity: cartItem.quantity } : null;
            }).filter(item => item !== null);
            updateCartUI();
            
            // Load orders
            const userOrders = Database.getUserOrders(currentUser.id);
            currentUser.orders = userOrders.map(order => ({
                id: order.orderNumber,
                date: new Date(order.orderDate).toLocaleDateString(),
                items: order.items || [],
                total: order.totalAmount,
                status: order.status
            }));
        }

        // Initialize the shop
        function init() {
            selectFeaturedProducts();
            renderFeaturedProducts();
            renderFlashSale();
            updateCartUI();
            startFlashTimer();
            
            // Event listeners
            document.getElementById('cartToggle').addEventListener('click', openCart);
            document.getElementById('closeCart').addEventListener('click', closeCart);
            document.getElementById('cartOverlay').addEventListener('click', closeCart);
            checkoutBtn.addEventListener('click', checkout);
            
            // Search functionality
            document.getElementById('searchInput').addEventListener('input', handleSearch);
            
            // Contact form
            document.getElementById('contactForm').addEventListener('submit', handleContactForm);
        }
        
        // Select featured products for homepage
        function selectFeaturedProducts() {
            // Select 8 diverse products across different categories
            const categories = ['cpu', 'gpu', 'ram', 'storage', 'laptop', 'monitor', 'keyboard', 'mouse'];
            featuredProducts = [];
            
            categories.forEach(category => {
                const categoryProducts = products.filter(p => p.category === category);
                if (categoryProducts.length > 0) {
                    // Pick a random product from each category
                    const randomProduct = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
                    featuredProducts.push(randomProduct);
                }
            });
            
            // If we need more products, add some popular ones
            while (featuredProducts.length < 8) {
                const remainingProducts = products.filter(p => !featuredProducts.includes(p));
                if (remainingProducts.length > 0) {
                    featuredProducts.push(remainingProducts[0]);
                } else {
                    break;
                }
            }
        }
        
        // Render featured products in horizontal scroll
        function renderFeaturedProducts() {
            const productGrid = document.getElementById('productGrid');
            productGrid.innerHTML = featuredProducts.map(product => `
                <div class="product-card product-card-horizontal bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <div class="p-6 text-center">
                        <div class="text-6xl mb-4">${product.image}</div>
                        <h4 class="text-xl font-bold text-[#6B9080] mb-2">${product.name}</h4>
                        <p class="text-gray-600 mb-2 text-sm">${product.description}</p>
                        <p class="text-xs text-gray-500 mb-2">${product.specs}</p>
                        <p class="text-xs text-[#6B9080] font-semibold mb-4">${product.brand}</p>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-2xl font-bold text-[#6B9080]">$${product.price}</span>
                            <div class="flex items-center space-x-1">
                                <button onclick="toggleWishlist(${product.id})" 
                                        class="p-2 text-gray-400 hover:text-pink-500 transition-colors ${wishlist.includes(product.id) ? 'text-pink-500' : ''}" 
                                        title="Add to Wishlist">
                                    ❤️
                                </button>
                                <button onclick="showProductDetails(${product.id})" 
                                       class="p-2 text-gray-400 hover:text-[#6B9080] transition-colors" 
                                        title="Quick View">
                                    👁️
                                </button>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <button onclick="addToCart(${product.id})" 
                                    class="w-full bg-[#6B9080] text-white px-4 py-2 rounded-lg hover:bg-[#A4C3B2] transition-colors font-semibold">
                                🛒 Add to Cart
                            </button>
                            <button onclick="buyNow(${product.id})" 
                                    class="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                                ⚡ Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        // Horizontal scroll functionality
        function scrollProducts(direction) {
            const scroller = document.getElementById('productScroller');
            const scrollAmount = 300; // Adjust scroll distance
            
            if (direction === 'left') {
                scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
        
        // Filter products by category (used by dropdown)
        function filterProducts(category) {
            showFullCatalog(category);
        }
        
        // Show full catalog modal with filters
        function showFullCatalog(category = 'all') {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl w-full max-w-7xl h-full max-h-[90vh] flex flex-col">
                    <!-- Header -->
                    <div class="flex justify-between items-center p-6 border-b border-[#CCE3DE]">
                        <h3 class="text-3xl font-bold gradient-text">Product Catalog</h3>
                        <button onclick="closeCatalogModal()" class="text-gray-500 hover:text-gray-700 text-3xl">×</button>
                    </div>
                    
                    <!-- Filters -->
                    <div class="p-6 border-b border-[#CCE3DE] bg-gradient-to-r from-[#F6FFF8] to-[#EAF4F4]">
                        <div class="flex flex-wrap gap-4 justify-between items-center">
                            <!-- Category Filter -->
                            <div class="flex items-center space-x-2">
                                <label class="text-sm font-medium text-[#6B9080]">Category:</label>
                                <select id="catalogCategoryFilter" onchange="applyCatalogFilters()" class="px-3 py-2 border border-[#CCE3DE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B9080]">
                                    <option value="all">All Categories</option>
                                    <option value="cpu">Processors</option>
                                    <option value="gpu">Graphics Cards</option>
                                    <option value="motherboard">Motherboards</option>
                                    <option value="ram">Memory</option>
                                    <option value="storage">Storage</option>
                                    <option value="psu">Power Supplies</option>
                                    <option value="cooling">Cooling</option>
                                    <option value="case">PC Cases</option>
                                    <option value="laptop">Laptops</option>
                                    <option value="monitor">Monitors</option>
                                    <option value="keyboard">Keyboards</option>
                                    <option value="mouse">Gaming Mice</option>
                                    <option value="headset">Headsets</option>
                                    <option value="webcam">Webcams</option>
                                    <option value="speaker">Speakers</option>
                                    <option value="tablet">Tablets</option>
                                </select>
                            </div>
                            
                            <!-- Price Filter -->
                            <div class="flex items-center space-x-2">
                                <label class="text-sm font-medium text-[#6B9080]">Price:</label>
                                <select id="catalogPriceFilter" onchange="applyCatalogFilters()" class="px-3 py-2 border border-[#CCE3DE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B9080]">
                                    <option value="all">All Prices</option>
                                    <option value="0-100">Under $100</option>
                                    <option value="100-300">$100 - $300</option>
                                    <option value="300-600">$300 - $600</option>
                                    <option value="600-1000">$600 - $1000</option>
                                    <option value="1000+">$1000+</option>
                                </select>
                            </div>
                            
                            <!-- Brand Filter -->
                            <div class="flex items-center space-x-2">
                                <label class="text-sm font-medium text-[#6B9080]">Brand:</label>
                                <select id="catalogBrandFilter" onchange="applyCatalogFilters()" class="px-3 py-2 border border-[#CCE3DE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B9080]">
                                    <option value="all">All Brands</option>
                                    <option value="Intel">Intel</option>
                                    <option value="AMD">AMD</option>
                                    <option value="NVIDIA">NVIDIA</option>
                                    <option value="Corsair">Corsair</option>
                                    <option value="ASUS">ASUS</option>
                                    <option value="Samsung">Samsung</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Logitech">Logitech</option>
                                    <option value="Razer">Razer</option>
                                </select>
                            </div>
                            
                            <!-- Sort Options -->
                            <div class="flex items-center space-x-2">
                                <label class="text-sm font-medium text-[#6B9080]">Sort by:</label>
                                <select id="catalogSortFilter" onchange="applyCatalogFilters()" class="px-3 py-2 border border-[#CCE3DE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B9080]">
                                    <option value="name">Name A-Z</option>
                                    <option value="name-desc">Name Z-A</option>
                                    <option value="price">Price Low-High</option>
                                    <option value="price-desc">Price High-Low</option>
                                    <option value="brand">Brand A-Z</option>
                                    <option value="category">Category</option>
                                </select>
                            </div>
                            
                            <!-- Search -->
                            <div class="flex items-center space-x-2">
                                <input type="text" id="catalogSearchInput" placeholder="Search products..." 
                                       onkeyup="applyCatalogFilters()"
                                       class="px-3 py-2 border border-[#CCE3DE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B9080] w-48">
                            </div>
                            
                            <!-- Results Count -->
                            <div class="text-sm text-[#6B9080] font-medium">
                                <span id="catalogResultsCount">30 products</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Products Grid -->
                    <div class="flex-1 overflow-y-auto p-6">
                        <div id="catalogProductGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <!-- Products will be loaded here -->
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            isFullCatalogOpen = true;
            
            // Set initial category filter
            if (category !== 'all') {
                document.getElementById('catalogCategoryFilter').value = category;
            }
            
            // Load products
            applyCatalogFilters();
            
            window.closeCatalogModal = function() {
                document.body.removeChild(modal);
                isFullCatalogOpen = false;
            };
        }
        
        // Apply filters in catalog modal
        function applyCatalogFilters() {
            if (!isFullCatalogOpen) return;
            
            let filteredProducts = [...products];
            
            // Get filter values
            const categoryFilter = document.getElementById('catalogCategoryFilter').value;
            const priceFilter = document.getElementById('catalogPriceFilter').value;
            const brandFilter = document.getElementById('catalogBrandFilter').value;
            const sortFilter = document.getElementById('catalogSortFilter').value;
            const searchInput = document.getElementById('catalogSearchInput').value.toLowerCase();
            
            // Apply search filter
            if (searchInput) {
                filteredProducts = filteredProducts.filter(product => 
                    product.name.toLowerCase().includes(searchInput) ||
                    product.description.toLowerCase().includes(searchInput) ||
                    product.brand.toLowerCase().includes(searchInput) ||
                    product.specs.toLowerCase().includes(searchInput)
                );
            }
            
            // Apply category filter
            if (categoryFilter !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
            }
            
            // Apply brand filter
            if (brandFilter !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.brand === brandFilter);
            }
            
            // Apply price filter
            if (priceFilter !== 'all') {
                if (priceFilter === '0-100') {
                    filteredProducts = filteredProducts.filter(product => product.price < 100);
                } else if (priceFilter === '100-300') {
                    filteredProducts = filteredProducts.filter(product => product.price >= 100 && product.price < 300);
                } else if (priceFilter === '300-600') {
                    filteredProducts = filteredProducts.filter(product => product.price >= 300 && product.price < 600);
                } else if (priceFilter === '600-1000') {
                    filteredProducts = filteredProducts.filter(product => product.price >= 600 && product.price < 1000);
                } else if (priceFilter === '1000+') {
                    filteredProducts = filteredProducts.filter(product => product.price >= 1000);
                }
            }
            
            // Apply sorting
            switch (sortFilter) {
                case 'name':
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'price':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'brand':
                    filteredProducts.sort((a, b) => a.brand.localeCompare(b.brand));
                    break;
                case 'category':
                    filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
                    break;
            }
            
            // Render filtered products
            renderCatalogProducts(filteredProducts);
            
            // Update results count
            document.getElementById('catalogResultsCount').textContent = `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
        }
        
        // Render products in catalog modal
        function renderCatalogProducts(filteredProducts) {
            const catalogGrid = document.getElementById('catalogProductGrid');
            catalogGrid.innerHTML = filteredProducts.map(product => `
                <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <div class="p-6 text-center">
                        <div class="text-6xl mb-4">${product.image}</div>
                        <h4 class="text-xl font-bold text-[#6B9080] mb-2">${product.name}</h4>
                        <p class="text-gray-600 mb-2 text-sm">${product.description}</p>
                        <p class="text-xs text-gray-500 mb-2">${product.specs}</p>
                        <p class="text-xs text-[#6B9080] font-semibold mb-4">${product.brand}</p>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-2xl font-bold text-[#6B9080]">$${product.price}</span>
                            <div class="flex items-center space-x-1">
                                <button onclick="toggleWishlist(${product.id})" 
                                        class="p-2 text-gray-400 hover:text-pink-500 transition-colors ${wishlist.includes(product.id) ? 'text-pink-500' : ''}" 
                                        title="Add to Wishlist">
                                    ❤️
                                </button>
                                <button onclick="toggleCompare(${product.id})" 
                                        class="p-2 text-gray-400 hover:text-blue-500 transition-colors ${compareList.includes(product.id) ? 'text-blue-500' : ''}" 
                                        title="Add to Compare">
                                    ⚖️
                                </button>
                                <button onclick="showProductDetails(${product.id})" 
                                        class="p-2 text-gray-400 hover:text-[#6B9080] transition-colors" 
                                        title="Quick View">
                                    👁️
                                </button>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <button onclick="addToCart(${product.id})" 
                                    class="w-full bg-[#6B9080] text-white px-4 py-2 rounded-lg hover:bg-[#A4C3B2] transition-colors font-semibold">
                                🛒 Add to Cart
                            </button>
                            <button onclick="buyNow(${product.id})" 
                                    class="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                                ⚡ Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Search functionality
        function handleSearch(e) {
            searchQuery = e.target.value.toLowerCase();
            
            if (searchQuery.length > 0) {
                showSearchResults(searchQuery);
            } else {
                hideSearchResults();
            }
        }
        
        // Show search results in dropdown
        function showSearchResults(query) {
            const searchResults = document.getElementById('searchResults');
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query) ||
                product.specs.toLowerCase().includes(query)
            ).slice(0, 5); // Show only first 5 results
            
            if (filteredProducts.length > 0) {
                searchResults.innerHTML = filteredProducts.map(product => `
                    <div class="flex items-center space-x-3 p-2 hover:bg-[#F6FFF8] rounded-lg cursor-pointer transition-colors" onclick="selectSearchResult(${product.id})">
                        <div class="text-2xl">${product.image}</div>
                        <div class="flex-1">
                            <div class="font-semibold text-sm">${product.name}</div>
                            <div class="text-xs text-gray-600">${product.brand} - $${product.price}</div>
                        </div>
                    </div>
                `).join('');
                searchResults.classList.remove('hidden');
            } else {
                searchResults.innerHTML = '<div class="text-center text-gray-500 py-2 text-sm">No products found</div>';
                searchResults.classList.remove('hidden');
            }
        }
        
        // Hide search results
        function hideSearchResults() {
            const searchResults = document.getElementById('searchResults');
            searchResults.classList.add('hidden');
        }
        
        // Select search result
        function selectSearchResult(productId) {
            showProductDetails(productId);
            hideSearchResults();
            document.getElementById('searchInput').value = '';
        }

        // Advanced filtering system
        function applyFilters() {
            let filteredProducts = [...products];
            
            // Apply search filter
            if (searchQuery) {
                filteredProducts = filteredProducts.filter(product => 
                    product.name.toLowerCase().includes(searchQuery) ||
                    product.description.toLowerCase().includes(searchQuery) ||
                    product.brand.toLowerCase().includes(searchQuery) ||
                    product.specs.toLowerCase().includes(searchQuery)
                );
            }
            
            // Apply category filter
            if (currentFilter !== 'all' && currentFilter !== 'brand') {
                filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
            }
            
            // Apply brand filter
            const brandSelect = document.getElementById('brandFilter');
            if (brandSelect && brandSelect.value !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.brand === brandSelect.value);
            }
            
            // Apply price filter
            const priceSelect = document.getElementById('priceFilter');
            if (priceSelect && priceSelect.value !== 'all') {
                const priceRange = priceSelect.value;
                if (priceRange === '0-100') {
                    filteredProducts = filteredProducts.filter(product => product.price < 100);
                } else if (priceRange === '100-300') {
                    filteredProducts = filteredProducts.filter(product => product.price >= 100 && product.price < 300);
                } else if (priceRange === '300-600') {
                    filteredProducts = filteredProducts.filter(product => product.price >= 300 && product.price < 600);
                } else if (priceRange === '600-1000') {
                    filteredProducts = filteredProducts.filter(product => product.price >= 600 && product.price < 1000);
                } else if (priceRange === '1000+') {
                    filteredProducts = filteredProducts.filter(product => product.price >= 1000);
                }
            }
            
            // Apply sorting
            const sortSelect = document.getElementById('sortFilter');
            if (sortSelect) {
                const sortValue = sortSelect.value;
                switch (sortValue) {
                    case 'name':
                        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case 'name-desc':
                        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                        break;
                    case 'price':
                        filteredProducts.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-desc':
                        filteredProducts.sort((a, b) => b.price - a.price);
                        break;
                    case 'brand':
                        filteredProducts.sort((a, b) => a.brand.localeCompare(b.brand));
                        break;
                    case 'category':
                        filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
                        break;
                }
            }
            
            renderFilteredProducts(filteredProducts);
            updateResultsCount(filteredProducts.length);
        }

        // Set grid view
        function setGridView(view) {
            currentView = view;
            const gridBtn = document.getElementById('gridViewBtn');
            const listBtn = document.getElementById('listViewBtn');
            
            if (view === 'grid') {
                gridBtn.className = 'px-3 py-1 bg-[#6B9080] text-white rounded-lg text-sm hover:bg-[#A4C3B2] transition-colors';
                listBtn.className = 'px-3 py-1 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400 transition-colors';
                productGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10';
            } else {
                listBtn.className = 'px-3 py-1 bg-[#6B9080] text-white rounded-lg text-sm hover:bg-[#A4C3B2] transition-colors';
                gridBtn.className = 'px-3 py-1 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400 transition-colors';
                productGrid.className = 'space-y-4 relative z-10';
            }
            
            applyFilters();
        }

        // Update results count
        function updateResultsCount(count) {
            const resultsElement = document.getElementById('resultsCount');
            if (resultsElement) {
                resultsElement.textContent = `${count} product${count !== 1 ? 's' : ''}`;
            }
        }

        // Render flash sale products
        function renderFlashSale() {
            const flashGrid = document.getElementById('flashProducts');
            flashGrid.innerHTML = flashSaleProducts.map(product => `
                <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-300 relative">
                    <div class="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -${product.discount}%
                    </div>
                    <div class="p-6 text-center">
                        <div class="text-6xl mb-4">${product.image}</div>
                        <h4 class="text-xl font-bold text-[#6B9080] mb-2">${product.name}</h4>
                        <p class="text-gray-600 mb-2">${product.description}</p>
                        <p class="text-sm text-gray-500 mb-4">${product.specs}</p>
                        <div class="mb-4">
                            <div class="flex items-center justify-center space-x-2 mb-2">
                                <span class="text-lg text-gray-500 line-through">$${product.originalPrice}</span>
                                <span class="text-2xl font-bold text-red-600">$${product.salePrice}</span>
                            </div>
                            <div class="text-sm text-gray-600">Only ${product.stock} left in stock!</div>
                        </div>
                        <button onclick="addFlashToCart(${product.id})" 
                                class="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                            🔥 Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Flash sale timer
        function startFlashTimer() {
            const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
            
            function updateTimer() {
                const now = new Date().getTime();
                const timeLeft = endTime - now;
                
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
                
                if (timeLeft < 0) {
                    document.getElementById('flashTimer').innerHTML = '<div class="text-2xl font-bold text-red-300">Sale Ended!</div>';
                }
            }
            
            updateTimer();
            setInterval(updateTimer, 1000);
        }

        // Add flash sale item to cart
        function addFlashToCart(productId) {
            const product = flashSaleProducts.find(p => p.id === productId);
            if (!product) return;
            
            // Convert flash sale product to cart format
            const cartProduct = {
                ...product,
                price: product.salePrice,
                isFlashSale: true
            };
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...cartProduct, quantity: 1 });
            }
            
            updateCartUI();
            showNotification(`🔥 ${product.name} added to cart at flash sale price!`);
        }

        // Handle contact form submission
        function handleContactForm(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simulate form submission
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = '✓ Message Sent!';
                submitBtn.className = submitBtn.className.replace('from-[#2D5016] via-[#6B9080] to-[#A4C3B2]', 'from-green-600 via-green-500 to-green-400');
                
                // Reset form
                e.target.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.className = submitBtn.className.replace('from-green-600 via-green-500 to-green-400', 'from-[#2D5016] via-[#6B9080] to-[#A4C3B2]');
                }, 2000);
                
                showNotification(`Thank you ${name}! We'll get back to you soon.`);
            }, 1500);
        }

        // Show guest checkout option
        function showGuestCheckoutOption() {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-md w-full">
                    <h3 class="text-2xl font-bold text-[#6B9080] mb-4 text-center">Complete Your Order</h3>
                    <p class="text-gray-600 mb-6 text-center">Choose how you'd like to proceed with your order</p>
                    
                    <div class="space-y-3">
                        <button onclick="proceedAsGuest(); closeGuestModal();" 
                                class="w-full bg-[#6B9080] text-white py-3 rounded-lg font-semibold hover:bg-[#A4C3B2] transition-colors">
                            🛒 Continue as Guest
                        </button>
                        <button onclick="closeGuestModal(); showLogin();" 
                                class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            🔐 Login to Account
                        </button>
                        <button onclick="closeGuestModal(); showRegister();" 
                                class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            📝 Create New Account
                        </button>
                        <button onclick="closeGuestModal();" 
                                class="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                            Cancel
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeGuestModal = function() {
                document.body.removeChild(modal);
            };
        }

        // Proceed as guest
        function proceedAsGuest() {
            // Create temporary guest user
            currentUser = {
                id: 'guest_' + Date.now(),
                name: 'Guest User',
                email: 'guest@example.com',
                isGuest: true,
                avatar: {
                    backgroundColor: '#6B9080',
                    initials: 'GU'
                }
            };
            isLoggedIn = true;
            
            // Proceed with checkout
            setTimeout(() => {
                checkout();
            }, 100);
        }

        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartUI();
            showNotification(`${product.name} added to cart!`);
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => String(item.id) !== String(productId)); // Convert both to strings for comparison
            updateCartUI();
        }

        // Update quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => String(item.id) === String(productId)); // Convert both to strings for comparison
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        // Update cart UI
        function updateCartUI() {
            // Update cart count - show/hide like wishlist
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (totalItems > 0) {
                cartCount.textContent = totalItems;
                cartCount.classList.remove('hidden');
            } else {
                cartCount.classList.add('hidden');
            }
            
            // Update cart items
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
                checkoutBtn.disabled = true;
            } else {
                cartItems.innerHTML = cart.map(item => {
                    // Handle prebuilt systems differently
                    if (item.isBuild) {
                        return `
                            <div class="p-4 bg-gradient-to-r from-white via-[#F6FFF8] to-[#EAF4F4] rounded-lg border border-[#CCE3DE] hover:border-[#A4C3B2] transition-all duration-300">
                                <div class="flex items-center space-x-4 mb-3">
                                    <div class="text-2xl">${item.image}</div>
                                    <div class="flex-1">
                                        <h5 class="font-semibold bg-gradient-to-r from-gray-800 to-[#6B9080] bg-clip-text text-transparent">${item.name}</h5>
                                        <p class="text-sm text-gray-600">${item.description}</p>
                                        <p class="bg-gradient-to-r from-[#2D5016] to-[#6B9080] bg-clip-text text-transparent font-bold">$${item.price}</p>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <button onclick="updateQuantity('${item.id}', -1)" 
                                                class="w-10 h-10 bg-white border-2 border-gray-300 text-gray-600 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md font-bold text-lg flex items-center justify-center">−</button>
                                        <div class="bg-gradient-to-r from-[#F6FFF8] to-[#EAF4F4] px-4 py-2 rounded-lg border border-[#CCE3DE]">
                                            <span class="font-bold text-lg bg-gradient-to-r from-[#6B9080] to-[#A4C3B2] bg-clip-text text-transparent">${item.quantity}</span>
                                        </div>
                                        <button onclick="updateQuantity('${item.id}', 1)" 
                                                class="w-10 h-10 bg-white border-2 border-gray-300 text-gray-600 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md font-bold text-lg flex items-center justify-center">+</button>
                                    </div>
                                    <button onclick="removeFromCart('${item.id}')" 
                                            class="text-red-500 hover:text-red-700 text-xl">×</button>
                                </div>
                                
                                <!-- Component Breakdown -->
                                <div class="mt-3 pt-3 border-t border-[#CCE3DE]">
                                    <div class="text-xs font-semibold text-[#6B9080] mb-2">Included Components:</div>
                                    <div class="grid grid-cols-2 gap-1 text-xs">
                                        ${Object.entries(item.buildComponents || {}).map(([type, component]) => 
                                            component ? `
                                                <div class="flex justify-between">
                                                    <span class="text-gray-600 capitalize">${type}:</span>
                                                    <span class="text-gray-800">$${component.price}</span>
                                                </div>
                                            ` : ''
                                        ).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    } else {
                        // Regular products
                        return `
                            <div class="flex items-center space-x-4 p-4 bg-gradient-to-r from-white via-[#F6FFF8] to-[#EAF4F4] rounded-lg border border-[#CCE3DE] hover:border-[#A4C3B2] transition-all duration-300">
                                <div class="text-2xl">${item.image}</div>
                                <div class="flex-1">
                                    <h5 class="font-semibold bg-gradient-to-r from-gray-800 to-[#6B9080] bg-clip-text text-transparent">${item.name}</h5>
                                    <p class="bg-gradient-to-r from-[#2D5016] to-[#6B9080] bg-clip-text text-transparent font-bold">$${item.price}</p>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <button onclick="updateQuantity('${item.id}', -1)" 
                                            class="w-10 h-10 bg-white border-2 border-gray-300 text-gray-600 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md font-bold text-lg flex items-center justify-center">−</button>
                                    <div class="bg-gradient-to-r from-[#F6FFF8] to-[#EAF4F4] px-4 py-2 rounded-lg border border-[#CCE3DE]">
                                        <span class="font-bold text-lg bg-gradient-to-r from-[#6B9080] to-[#A4C3B2] bg-clip-text text-transparent">${item.quantity}</span>
                                    </div>
                                    <button onclick="updateQuantity('${item.id}', 1)" 
                                            class="w-10 h-10 bg-white border-2 border-gray-300 text-gray-600 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md font-bold text-lg flex items-center justify-center">+</button>
                                </div>
                                <button onclick="removeFromCart('${item.id}')" 
                                        class="text-red-500 hover:text-red-700 text-xl">×</button>
                            </div>
                        `;
                    }
                }).join('');
                checkoutBtn.disabled = false;
            }
            
            // Update total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }

        // Cart controls
        function openCart() {
            cartSidebar.classList.add('open');
            cartOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeCart() {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Show notification
        function showNotification(message) {
            document.getElementById('notificationText').textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Checkout
        function checkout() {
            if (cart.length === 0) return;
            
            // Check if user is logged in
            if (!isLoggedIn) {
                showGuestCheckoutOption();
                closeCart();
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            // Create checkout summary
            const checkoutModal = document.createElement('div');
            checkoutModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            checkoutModal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
                    <h3 class="text-2xl font-bold mb-4 text-center">Order Summary</h3>
                    
                    <!-- User Info -->
                    <div class="bg-gradient-to-r from-[#F6FFF8] to-[#EAF4F4] p-4 rounded-lg mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                 style="background: ${currentUser.avatar.backgroundColor};">
                                ${currentUser.avatar.initials}
                            </div>
                            <div>
                                <div class="font-semibold text-[#6B9080]">${currentUser.name}</div>
                                <div class="text-sm text-gray-600">${currentUser.email}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="space-y-2 mb-6">
                        <div class="flex justify-between">
                            <span>Items (${itemCount}):</span>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Shipping:</span>
                            <span class="text-green-600">FREE</span>
                        </div>
                        <div class="border-t pt-2 flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span class="text-blue-600">$${total.toFixed(2)}</span>
                        </div>
                    </div>
                    
                    <!-- Payment Method Selection -->
                    <div class="mb-6">
                        <h4 class="font-bold text-[#6B9080] mb-3">Select Payment Method:</h4>
                        <div class="space-y-2">
                            <label class="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:border-[#6B9080] cursor-pointer">
                                <input type="radio" name="paymentMethod" value="cod" class="text-[#6B9080]" checked>
                                <div class="flex items-center space-x-2">
                                    <span class="text-2xl">💵</span>
                                    <div>
                                        <div class="font-semibold">Cash on Delivery</div>
                                        <div class="text-xs text-gray-600">Pay when you receive your order</div>
                                    </div>
                                </div>
                            </label>
                            
                            <label class="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:border-[#6B9080] cursor-pointer">
                                <input type="radio" name="paymentMethod" value="card" class="text-[#6B9080]">
                                <div class="flex items-center space-x-2">
                                    <span class="text-2xl">💳</span>
                                    <div>
                                        <div class="font-semibold">Credit/Debit Card</div>
                                        <div class="text-xs text-gray-600">Visa, MasterCard, American Express</div>
                                    </div>
                                </div>
                            </label>
                            
                            <label class="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:border-[#6B9080] cursor-pointer">
                                <input type="radio" name="paymentMethod" value="bkash" class="text-[#6B9080]">
                                <div class="flex items-center space-x-2">
                                    <span class="text-2xl">📱</span>
                                    <div>
                                        <div class="font-semibold">bKash</div>
                                        <div class="text-xs text-gray-600">Mobile banking payment</div>
                                    </div>
                                </div>
                            </label>
                            
                            <label class="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:border-[#6B9080] cursor-pointer">
                                <input type="radio" name="paymentMethod" value="nagad" class="text-[#6B9080]">
                                <div class="flex items-center space-x-2">
                                    <span class="text-2xl">📲</span>
                                    <div>
                                        <div class="font-semibold">Nagad</div>
                                        <div class="text-xs text-gray-600">Digital financial service</div>
                                    </div>
                                </div>
                            </label>
                            
                            <label class="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:border-[#6B9080] cursor-pointer">
                                <input type="radio" name="paymentMethod" value="rocket" class="text-[#6B9080]">
                                <div class="flex items-center space-x-2">
                                    <span class="text-2xl">🚀</span>
                                    <div>
                                        <div class="font-semibold">Rocket</div>
                                        <div class="text-xs text-gray-600">Dutch-Bangla Bank mobile banking</div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                    
                    <div class="text-center space-y-4">
                        <div class="space-y-2">
                            <button onclick="processPayment()" class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                Complete Order
                            </button>
                            <button onclick="closeCheckout()" class="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(checkoutModal);
            
            window.processPayment = function() {
                const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked').value;
                const paymentMethods = {
                    cod: 'Cash on Delivery',
                    card: 'Credit/Debit Card',
                    bkash: 'bKash',
                    nagad: 'Nagad',
                    rocket: 'Rocket'
                };
                
                // Create order in database
                const orderData = {
                    userId: currentUser.id,
                    items: [...cart],
                    totalAmount: parseFloat(total.toFixed(2)),
                    paymentMethod: paymentMethods[selectedPayment],
                    paymentStatus: selectedPayment === 'cod' ? 'Pending' : 'Completed'
                };
                
                const newOrder = Database.createOrder(orderData);
                
                // Clear cart from database and local storage
                if (isLoggedIn && currentUser && !currentUser.isGuest) {
                    Database.clearUserCart(currentUser.id);
                }
                
                cart = [];
                updateCartUI();
                closeCart();
                document.body.removeChild(checkoutModal);
                
                // Show success message based on payment method
                let successMessage = `Order #${newOrder.orderNumber} placed successfully!`;
                if (selectedPayment === 'cod') {
                    successMessage += ' You will pay when your order is delivered.';
                } else {
                    successMessage += ` Payment via ${paymentMethods[selectedPayment]} completed.`;
                }
                
                showNotification(successMessage);
                
                // Reload user data to show new order (only for registered users)
                if (!currentUser.isGuest) {
                    loadUserData();
                }
            };
            
            window.closeCheckout = function() {
                document.body.removeChild(checkoutModal);
            };
        }

        // Show brands modal
        function showBrands() {
            const brands = [...new Set(products.map(p => p.brand))].sort();
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold gradient-text">Shop by Brand</h3>
                        <button onclick="closeBrandModal()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        ${brands.map(brand => `
                            <button onclick="filterByBrand('${brand}')" 
                                    class="p-4 border border-[#CCE3DE] rounded-lg hover:border-[#6B9080] hover:bg-[#F6FFF8] transition-all duration-300 text-left">
                                <div class="font-semibold text-[#6B9080]">${brand}</div>
                                <div class="text-sm text-gray-600">${products.filter(p => p.brand === brand).length} products</div>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeBrandModal = function() {
                document.body.removeChild(modal);
            };
            
            window.filterByBrand = function(brand) {
                document.body.removeChild(modal);
                showFullCatalog('all');
                // Set brand filter after modal opens
                setTimeout(() => {
                    const brandFilter = document.getElementById('catalogBrandFilter');
                    if (brandFilter) {
                        brandFilter.value = brand;
                        applyCatalogFilters();
                    }
                }, 100);
                showNotification(`Showing ${brand} products`);
            };
        }

        // Wishlist functionality
        function toggleWishlist(productId) {
            const index = wishlist.indexOf(productId);
            if (index > -1) {
                wishlist.splice(index, 1);
                showNotification('Removed from wishlist');
            } else {
                wishlist.push(productId);
                showNotification('Added to wishlist!');
            }
            updateWishlistUI();
            applyFilters(); // Refresh to update heart colors
        }

        function removeFromWishlist(productId) {
            const index = wishlist.indexOf(productId);
            if (index > -1) {
                wishlist.splice(index, 1);
                updateWishlistUI();
                showNotification('Removed from wishlist');
                // Close and reopen wishlist modal to refresh
                closeWishlistModal();
                setTimeout(() => showWishlist(), 100);
            }
        }

        function updateWishlistUI() {
            const wishlistCountEl = document.getElementById('wishlistCount');
            if (wishlist.length > 0) {
                wishlistCountEl.textContent = wishlist.length;
                wishlistCountEl.classList.remove('hidden');
            } else {
                wishlistCountEl.classList.add('hidden');
            }
        }

        function showWishlist() {
            const wishlistProducts = products.filter(p => wishlist.includes(p.id));
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-4xl w-full max-h-96 overflow-y-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold gradient-text">❤️ My Wishlist</h3>
                        <button onclick="closeWishlistModal()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>
                    ${wishlistProducts.length === 0 ? 
                        '<p class="text-center text-gray-500 py-8">Your wishlist is empty</p>' :
                        `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            ${wishlistProducts.map(product => `
                                <div class="border border-pink-300 rounded-lg p-4 bg-gradient-to-br from-pink-50 to-pink-100">
                                    <div class="text-center">
                                        <div class="text-3xl mb-2">${product.image}</div>
                                        <h4 class="font-bold text-sm mb-2">${product.name}</h4>
                                        <div class="text-lg font-bold text-pink-600 mb-2">$${product.price}</div>
                                        <div class="space-y-2">
                                            <button onclick="addToCart(${product.id}); closeWishlistModal();" 
                                                    class="w-full bg-pink-600 text-white py-2 px-3 rounded text-sm hover:bg-pink-700 transition-colors">
                                                Add to Cart
                                            </button>
                                            <button onclick="removeFromWishlist(${product.id})" 
                                                    class="w-full bg-gray-300 text-gray-700 py-1 px-3 rounded text-sm hover:bg-gray-400 transition-colors">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>`
                    }
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeWishlistModal = function() {
                document.body.removeChild(modal);
            };
        }

        // Compare functionality
        function toggleCompare(productId) {
            const index = compareList.indexOf(productId);
            if (index > -1) {
                compareList.splice(index, 1);
                showNotification('Removed from compare');
            } else {
                if (compareList.length >= 4) {
                    showNotification('Maximum 4 products can be compared');
                    return;
                }
                compareList.push(productId);
                showNotification('Added to compare!');
            }
            updateCompareUI();
            applyFilters(); // Refresh to update compare colors
        }

        function removeFromCompare(productId) {
            const index = compareList.indexOf(productId);
            if (index > -1) {
                compareList.splice(index, 1);
                updateCompareUI();
                showNotification('Removed from compare');
                // Close and reopen compare modal to refresh
                closeCompareModal();
                setTimeout(() => showCompare(), 100);
            }
        }

        function updateCompareUI() {
            const compareCountEl = document.getElementById('compareCount');
            if (compareList.length > 0) {
                compareCountEl.textContent = compareList.length;
                compareCountEl.classList.remove('hidden');
            } else {
                compareCountEl.classList.add('hidden');
            }
        }

        function showCompare() {
            const compareProducts = products.filter(p => compareList.includes(p.id));
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-6xl w-full max-h-96 overflow-y-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold gradient-text">⚖️ Product Comparison</h3>
                        <button onclick="closeCompareModal()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>
                    ${compareProducts.length === 0 ? 
                        '<p class="text-center text-gray-500 py-8">No products to compare</p>' :
                        `<div class="overflow-x-auto">
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th class="border p-2 bg-gray-100">Feature</th>
                                        ${compareProducts.map(product => `
                                            <th class="border p-2 bg-blue-50 text-center">
                                                <div class="text-2xl mb-2">${product.image}</div>
                                                <div class="font-bold text-sm">${product.name}</div>
                                            </th>
                                        `).join('')}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border p-2 font-semibold">Price</td>
                                        ${compareProducts.map(product => `<td class="border p-2 text-center font-bold text-blue-600">$${product.price}</td>`).join('')}
                                    </tr>
                                    <tr>
                                        <td class="border p-2 font-semibold">Brand</td>
                                        ${compareProducts.map(product => `<td class="border p-2 text-center">${product.brand}</td>`).join('')}
                                    </tr>
                                    <tr>
                                        <td class="border p-2 font-semibold">Specs</td>
                                        ${compareProducts.map(product => `<td class="border p-2 text-center text-sm">${product.specs}</td>`).join('')}
                                    </tr>
                                    <tr>
                                        <td class="border p-2 font-semibold">Actions</td>
                                        ${compareProducts.map(product => `
                                            <td class="border p-2 text-center space-y-1">
                                                <button onclick="addToCart(${product.id})" class="w-full bg-blue-600 text-white py-1 px-2 rounded text-xs hover:bg-blue-700">Add to Cart</button>
                                                <button onclick="removeFromCompare(${product.id})" class="w-full bg-gray-300 text-gray-700 py-1 px-2 rounded text-xs hover:bg-gray-400">Remove</button>
                                            </td>
                                        `).join('')}
                                    </tr>
                                </tbody>
                            </table>
                        </div>`
                    }
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeCompareModal = function() {
                document.body.removeChild(modal);
            };
        }

        // Buy Now functionality
        function buyNow(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            // Add to cart first
            addToCart(productId);
            
            // Open cart and trigger checkout
            setTimeout(() => {
                openCart();
                setTimeout(() => {
                    checkout();
                }, 500);
            }, 300);
        }

        // Product details modal
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-2xl w-full">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold gradient-text">Product Details</h3>
                        <button onclick="closeProductModal()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="text-center">
                            <div class="text-8xl mb-4">${product.image}</div>
                            <div class="text-3xl font-bold gradient-text mb-2">$${product.price}</div>
                            <div class="text-sm text-[#6B9080] font-semibold">${product.brand}</div>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold mb-4">${product.name}</h4>
                            <p class="text-gray-600 mb-4">${product.description}</p>
                            <div class="mb-4">
                                <h5 class="font-semibold mb-2">Specifications:</h5>
                                <p class="text-sm text-gray-600">${product.specs}</p>
                            </div>
                            <div class="space-y-3">
                                <button onclick="addToCart(${product.id}); closeProductModal();" 
                                        class="w-full bg-[#6B9080] text-white py-3 rounded-lg font-semibold hover:bg-[#A4C3B2] transition-colors">
                                    🛒 Add to Cart
                                </button>
                                <button onclick="buyNow(${product.id}); closeProductModal();" 
                                        class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-colors">
                                    ⚡ Buy Now
                                </button>
                                <div class="flex space-x-2">
                                    <button onclick="toggleWishlist(${product.id})" 
                                            class="flex-1 bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-200 transition-colors">
                                        ❤️ Wishlist
                                    </button>
                                    <button onclick="toggleCompare(${product.id})" 
                                            class="flex-1 bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                                        ⚖️ Compare
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeProductModal = function() {
                document.body.removeChild(modal);
            };
        }

        // PC Builder functionality
        let pcBuild = {
            cpu: null,
            gpu: null,
            motherboard: null,
            ram: null,
            storage: null,
            psu: null,
            cooling: null,
            case: null
        };

        function showPCBuilder() {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl w-full max-w-7xl h-full max-h-[95vh] flex flex-col">
                    <!-- Header -->
                    <div class="flex justify-between items-center p-6 border-b border-[#CCE3DE] bg-white">
                        <h3 class="text-3xl font-bold gradient-text">🔧 PC Builder</h3>
                        <button onclick="closePCBuilderModal()" class="text-gray-500 hover:text-gray-700 text-3xl">×</button>
                    </div>
                    
                    <div class="flex-1 flex overflow-hidden min-h-0">
                        <!-- Component Selection -->
                        <div class="w-2/3 flex flex-col border-r border-[#CCE3DE]">
                            <!-- Component Categories -->
                            <div class="p-6 border-b border-[#CCE3DE] bg-gradient-to-r from-[#F6FFF8] to-[#EAF4F4]">
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    ${Object.keys(pcBuild).map(component => `
                                        <button onclick="selectComponent('${component}')" 
                                                class="component-btn p-3 border-2 border-[#CCE3DE] rounded-lg hover:border-[#6B9080] transition-all duration-300 ${pcBuild[component] ? 'bg-green-50 border-green-400' : 'bg-white'}"
                                                data-component="${component}">
                                            <div class="text-2xl mb-1">${getComponentIcon(component)}</div>
                                            <div class="font-semibold text-xs capitalize">${component.replace('_', ' ')}</div>
                                            <div class="text-xs text-gray-500 mt-1" id="${component}-status">
                                                ${pcBuild[component] ? '✓ Selected' : 'Not selected'}
                                            </div>
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <!-- Component Products - Scrollable -->
                            <div class="flex-1 overflow-y-auto p-6">
                                <div id="componentProducts" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="text-center text-gray-500 py-8 col-span-full">
                                        Select a component category above to see available products
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Build Summary -->
                        <div class="w-1/3 bg-gradient-to-b from-[#F6FFF8] to-[#EAF4F4] flex flex-col">
                            <!-- Header -->
                            <div class="p-4 border-b border-[#CCE3DE] bg-white">
                                <h4 class="text-xl font-bold text-[#6B9080] mb-3">Your Build</h4>
                                
                                <!-- Company Build Options -->
                                <button onclick="showCompanyBuilds()" 
                                        class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-colors text-sm">
                                    🏢 Browse Company Builds
                                </button>
                            </div>
                            
                            <!-- Scrollable Build Summary -->
                            <div class="flex-1 overflow-y-auto p-4" style="max-height: calc(100vh - 300px);">
                                <div class="space-y-2 mb-4" id="buildSummary">
                                    ${Object.keys(pcBuild).map(component => `
                                        <div class="flex items-center justify-between p-2 bg-white rounded-lg border border-[#CCE3DE] text-sm">
                                            <div class="flex items-center space-x-2">
                                                <span class="text-base">${getComponentIcon(component)}</span>
                                                <span class="font-medium capitalize text-xs">${component.replace('_', ' ')}</span>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-xs text-gray-500" id="${component}-name">Not selected</div>
                                                <div class="text-sm font-bold text-[#6B9080]" id="${component}-price">$0</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <!-- Compatibility Check -->
                                <div class="mb-4 p-3 bg-white rounded-lg border border-[#CCE3DE]">
                                    <div class="text-sm font-semibold mb-2">Compatibility:</div>
                                    <div id="compatibilityStatus" class="text-xs text-green-600">✓ All components compatible</div>
                                </div>
                            </div>
                            
                            <!-- Fixed Bottom Actions -->
                            <div class="p-4 border-t border-[#CCE3DE] bg-white">
                                <div class="flex justify-between items-center mb-3">
                                    <span class="text-lg font-bold">Total:</span>
                                    <span id="buildTotal" class="text-xl font-bold text-[#6B9080]">$0.00</span>
                                </div>
                                
                                <div class="space-y-2">
                                    <button onclick="addBuildToCart()" 
                                            class="w-full bg-[#6B9080] text-white py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition-colors disabled:bg-gray-400 text-sm"
                                            id="addBuildBtn" disabled>
                                        🛒 Add Build to Cart
                                    </button>
                                    <button onclick="saveBuild()" 
                                            class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                                        💾 Save Build
                                    </button>
                                    <button onclick="clearBuild()" 
                                            class="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm">
                                        🗑️ Clear Build
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            updateBuildSummary();
            
            window.closePCBuilderModal = function() {
                document.body.removeChild(modal);
            };
        }

        function getComponentIcon(component) {
            const icons = {
                cpu: '🔧',
                gpu: '🎮',
                motherboard: '🔌',
                ram: '💾',
                storage: '💿',
                psu: '⚡',
                cooling: '❄️',
                case: '📦'
            };
            return icons[component] || '🔧';
        }

        function selectComponent(component) {
            // Highlight selected component
            document.querySelectorAll('.component-btn').forEach(btn => {
                btn.classList.remove('ring-2', 'ring-[#6B9080]');
            });
            document.querySelector(`[data-component="${component}"]`).classList.add('ring-2', 'ring-[#6B9080]');
            
            // Show products for this component
            const componentProducts = products.filter(p => p.category === component);
            const productsContainer = document.getElementById('componentProducts');
            
            if (componentProducts.length === 0) {
                productsContainer.innerHTML = `
                    <div class="text-center text-gray-500 py-8 col-span-full">
                        No ${component} products available
                    </div>
                `;
                return;
            }
            
            productsContainer.innerHTML = componentProducts.map(product => `
                <div class="border border-[#CCE3DE] rounded-lg p-4 hover:border-[#6B9080] transition-all duration-300 ${pcBuild[component]?.id === product.id ? 'bg-green-50 border-green-400' : 'bg-white'}">
                    <div class="text-center">
                        <div class="text-4xl mb-2">${product.image}</div>
                        <h5 class="font-bold text-sm mb-2">${product.name}</h5>
                        <p class="text-xs text-gray-600 mb-2">${product.specs}</p>
                        <div class="text-lg font-bold text-[#6B9080] mb-3">$${product.price}</div>
                        <button onclick="addComponentToBuild('${component}', ${product.id})" 
                                class="w-full py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${pcBuild[component]?.id === product.id ? 'bg-green-600 text-white' : 'bg-[#6B9080] text-white hover:bg-[#A4C3B2]'}">
                            ${pcBuild[component]?.id === product.id ? '✓ Selected' : 'Select'}
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function addComponentToBuild(component, productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            pcBuild[component] = product;
            updateBuildSummary();
            
            // Update component button status
            const statusEl = document.getElementById(`${component}-status`);
            if (statusEl) statusEl.textContent = '✓ Selected';
            
            const componentBtn = document.querySelector(`[data-component="${component}"]`);
            if (componentBtn) {
                componentBtn.classList.add('bg-green-50', 'border-green-400');
                componentBtn.classList.remove('bg-white');
            }
            
            // Refresh the component selection view
            selectComponent(component);
            
            showNotification(`${product.name} added to build!`);
        }

        function updateBuildSummary() {
            let total = 0;
            let hasComponents = false;
            
            Object.keys(pcBuild).forEach(component => {
                const nameEl = document.getElementById(`${component}-name`);
                const priceEl = document.getElementById(`${component}-price`);
                
                if (pcBuild[component]) {
                    nameEl.textContent = pcBuild[component].name.substring(0, 20) + '...';
                    priceEl.textContent = `$${pcBuild[component].price}`;
                    total += pcBuild[component].price;
                    hasComponents = true;
                } else {
                    nameEl.textContent = 'Not selected';
                    priceEl.textContent = '$0';
                }
            });
            
            document.getElementById('buildTotal').textContent = `$${total.toFixed(2)}`;
            
            // Enable/disable add to cart button
            const addBuildBtn = document.getElementById('addBuildBtn');
            if (addBuildBtn) {
                addBuildBtn.disabled = !hasComponents;
            }
            
            // Update compatibility status
            updateCompatibilityStatus();
        }

        function updateCompatibilityStatus() {
            const statusEl = document.getElementById('compatibilityStatus');
            if (!statusEl) return;
            
            let warnings = [];
            
            // Basic compatibility checks
            if (pcBuild.cpu && pcBuild.motherboard) {
                // Simplified compatibility check based on brand
                if ((pcBuild.cpu.brand === 'Intel' && pcBuild.motherboard.name.includes('AM5')) ||
                    (pcBuild.cpu.brand === 'AMD' && pcBuild.motherboard.name.includes('Z790'))) {
                    warnings.push('CPU and motherboard may not be compatible');
                }
            }
            
            if (pcBuild.gpu && pcBuild.psu) {
                // Check if PSU has enough power (simplified)
                const psuWattage = parseInt(pcBuild.psu.name.match(/(\d+)W/)?.[1] || '0');
                if (psuWattage < 650 && pcBuild.gpu.name.includes('RTX 4080')) {
                    warnings.push('PSU may not provide enough power for GPU');
                }
            }
            
            if (warnings.length === 0) {
                statusEl.innerHTML = '✓ All components compatible';
                statusEl.className = 'text-xs text-green-600';
            } else {
                statusEl.innerHTML = '⚠️ ' + warnings.join('<br>⚠️ ');
                statusEl.className = 'text-xs text-orange-600';
            }
        }

        function addBuildToCart() {
            const selectedComponents = Object.values(pcBuild).filter(component => component !== null);
            
            if (selectedComponents.length === 0) {
                showNotification('Please select at least one component');
                return;
            }
            
            selectedComponents.forEach(component => {
                const existingItem = cart.find(item => item.id === component.id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ ...component, quantity: 1 });
                }
            });
            
            updateCartUI();
            closePCBuilderModal();
            showNotification(`Added ${selectedComponents.length} components to cart!`);
        }

        function saveBuild() {
            const buildName = prompt('Enter a name for your build:') || 'My PC Build';
            const buildData = {
                name: buildName,
                components: pcBuild,
                total: Object.values(pcBuild).reduce((sum, component) => sum + (component?.price || 0), 0),
                date: new Date().toLocaleDateString()
            };
            
            // Save to localStorage (in a real app, this would be saved to a database)
            const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
            savedBuilds.push(buildData);
            localStorage.setItem('savedBuilds', JSON.stringify(savedBuilds));
            
            showNotification(`Build "${buildName}" saved successfully!`);
        }

        function clearBuild() {
            // Create custom confirmation modal instead of browser confirm
            const confirmModal = document.createElement('div');
            confirmModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            confirmModal.innerHTML = `
                <div class="bg-white rounded-xl p-6 max-w-md w-full">
                    <h4 class="text-xl font-bold text-[#6B9080] mb-4">Clear Build?</h4>
                    <p class="text-gray-600 mb-6">Are you sure you want to clear your current build? This action cannot be undone.</p>
                    <div class="flex space-x-3">
                        <button onclick="confirmClearBuild()" class="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                            Yes, Clear Build
                        </button>
                        <button onclick="cancelClearBuild()" class="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors">
                            Cancel
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(confirmModal);
            
            window.confirmClearBuild = function() {
                pcBuild = {
                    cpu: null,
                    gpu: null,
                    motherboard: null,
                    ram: null,
                    storage: null,
                    psu: null,
                    cooling: null,
                    case: null
                };
                
                updateBuildSummary();
                
                // Reset component buttons
                document.querySelectorAll('.component-btn').forEach(btn => {
                    btn.classList.remove('bg-green-50', 'border-green-400', 'ring-2', 'ring-[#6B9080]');
                    btn.classList.add('bg-white');
                });
                
                // Reset status text
                Object.keys(pcBuild).forEach(component => {
                    const statusEl = document.getElementById(`${component}-status`);
                    if (statusEl) statusEl.textContent = 'Not selected';
                });
                
                // Clear products view
                const productsContainer = document.getElementById('componentProducts');
                if (productsContainer) {
                    productsContainer.innerHTML = `
                        <div class="text-center text-gray-500 py-8 col-span-full">
                            Select a component category above to see available products
                        </div>
                    `;
                }
                
                document.body.removeChild(confirmModal);
                showNotification('Build cleared successfully!');
            };
            
            window.cancelClearBuild = function() {
                document.body.removeChild(confirmModal);
            };
        }

        // Company builds data
        const companyBuilds = [
            {
                id: 1,
                name: "Gaming Beast Pro",
                company: "TechHub Gaming",
                price: 2499.99,
                image: "🎮",
                description: "Ultimate 4K gaming experience with RTX 4080",
                components: {
                    cpu: products.find(p => p.name.includes("Intel Core i9-13900K")),
                    gpu: products.find(p => p.name.includes("NVIDIA RTX 4080")),
                    ram: products.find(p => p.name.includes("Corsair Vengeance 32GB")),
                    storage: products.find(p => p.name.includes("Samsung 980 PRO 2TB")),
                    motherboard: products.find(p => p.name.includes("ASUS ROG Strix Z790-E")),
                    psu: products.find(p => p.name.includes("Corsair RM850x")),
                    cooling: products.find(p => p.name.includes("Corsair H100i")),
                    case: products.find(p => p.name.includes("NZXT H7 Flow"))
                },
                warranty: "3 years",
                rating: 4.9
            },
            {
                id: 2,
                name: "Content Creator Studio",
                company: "TechHub Pro",
                price: 3299.99,
                image: "🎬",
                description: "Professional workstation for video editing and 3D rendering",
                components: {
                    cpu: products.find(p => p.name.includes("AMD Ryzen 9 7950X")),
                    gpu: products.find(p => p.name.includes("NVIDIA RTX 4080")),
                    ram: products.find(p => p.name.includes("Corsair Vengeance 32GB")),
                    storage: products.find(p => p.name.includes("Samsung 980 PRO 2TB")),
                    motherboard: products.find(p => p.name.includes("MSI MAG B650")),
                    psu: products.find(p => p.name.includes("Corsair RM850x")),
                    cooling: products.find(p => p.name.includes("Noctua NH-D15")),
                    case: products.find(p => p.name.includes("Fractal Design Define 7"))
                },
                warranty: "3 years",
                rating: 4.8
            },
            {
                id: 3,
                name: "Budget Gaming Starter",
                company: "TechHub Value",
                price: 899.99,
                image: "💰",
                description: "Affordable 1080p gaming build with great performance",
                components: {
                    cpu: products.find(p => p.name.includes("AMD Ryzen 7 7700X")),
                    gpu: products.find(p => p.name.includes("NVIDIA RTX 4060 Ti")),
                    ram: products.find(p => p.name.includes("G.Skill Trident Z5 16GB")),
                    storage: products.find(p => p.name.includes("WD Black SN850X 1TB")),
                    motherboard: products.find(p => p.name.includes("MSI MAG B650")),
                    psu: products.find(p => p.name.includes("EVGA SuperNOVA 750W")),
                    cooling: products.find(p => p.name.includes("Noctua NH-D15")),
                    case: products.find(p => p.name.includes("NZXT H7 Flow"))
                },
                warranty: "2 years",
                rating: 4.7
            }
        ];

        // Generate Ghibli-style avatar
        function generateGhibliAvatar(name) {
            const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
            const patterns = ['🌸', '🍃', '⭐', '🌙', '🦋', '🌺', '🍀', '✨'];
            
            const nameHash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
            const colorIndex = nameHash % colors.length;
            const patternIndex = nameHash % patterns.length;
            
            return {
                backgroundColor: colors[colorIndex],
                pattern: patterns[patternIndex],
                initials: name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
            };
        }

        // Show company builds
        function showCompanyBuilds() {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-center p-6 border-b border-[#CCE3DE]">
                        <h3 class="text-3xl font-bold gradient-text">🏢 Pre-Built Systems</h3>
                        <button onclick="closeCompanyBuildsModal()" class="text-gray-500 hover:text-gray-700 text-3xl">×</button>
                    </div>
                    
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            ${companyBuilds.map(build => `
                                <div class="border-2 border-[#CCE3DE] rounded-xl p-6 hover:border-[#6B9080] transition-all duration-300 bg-gradient-to-br from-white to-[#F6FFF8]">
                                    <div class="text-center mb-4">
                                        <div class="text-6xl mb-2">${build.image}</div>
                                        <h4 class="text-xl font-bold text-[#6B9080] mb-1">${build.name}</h4>
                                        <p class="text-sm text-gray-600 mb-2">${build.company}</p>
                                        <p class="text-sm text-gray-700 mb-3">${build.description}</p>
                                        <div class="flex items-center justify-center space-x-1 mb-2">
                                            ${'⭐'.repeat(Math.floor(build.rating))}
                                            <span class="text-sm text-gray-600">(${build.rating})</span>
                                        </div>
                                        <div class="text-2xl font-bold text-[#6B9080] mb-2">$${build.price}</div>
                                        <div class="text-xs text-gray-500 mb-4">${build.warranty} warranty included</div>
                                    </div>
                                    
                                    <div class="space-y-2 mb-4">
                                        <button onclick="viewBuildDetails(${build.id})" 
                                                class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                                            📋 View Details
                                        </button>
                                        <button onclick="addCompanyBuildToCart(${build.id})" 
                                                class="w-full bg-[#6B9080] text-white py-2 rounded-lg font-semibold hover:bg-[#A4C3B2] transition-colors text-sm">
                                            🛒 Add to Cart
                                        </button>

                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeCompanyBuildsModal = function() {
                document.body.removeChild(modal);
            };
        }

        // Add company build to cart
        function addCompanyBuildToCart(buildId) {
            const build = companyBuilds.find(b => b.id === buildId);
            if (!build) return;
            
            // Create a special cart item for the complete build
            const buildItem = {
                id: `build_${buildId}`,
                name: build.name,
                price: build.price,
                image: build.image,
                description: `Complete ${build.company} system`,
                specs: `${build.warranty} warranty included`,
                brand: build.company,
                isBuild: true,
                buildComponents: build.components
            };
            
            const existingItem = cart.find(item => item.id === buildItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...buildItem, quantity: 1 });
            }
            
            updateCartUI();
            closeCompanyBuildsModal();
            showNotification(`${build.name} added to cart!`);
        }

        function showLogin() {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-md w-full">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold gradient-text">🔐 Login</h3>
                        <button onclick="closeLoginModal()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>

                    <form id="loginForm" class="space-y-4">
                        <div>
                            <label for="loginEmail" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="loginEmail" required 
                                   class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                   placeholder="Enter your registered email">
                        </div>
                        <div>
                            <label for="loginPassword" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" id="loginPassword" required 
                                   class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                   placeholder="Enter your password">
                        </div>
                        <button type="submit" 
                                class="w-full bg-[#6B9080] text-white py-3 rounded-lg font-semibold hover:bg-[#A4C3B2] transition-colors">
                            Login
                        </button>
                    </form>
                    
                    <div class="mt-4 text-center">
                        <p class="text-sm text-gray-600">Don't have an account? 
                            <button onclick="closeLoginModal(); showRegister();" class="text-[#6B9080] hover:underline font-semibold">Register here</button>
                        </p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value.trim();
                const password = document.getElementById('loginPassword').value;
                
                if (!email || !password) {
                    showNotification('Please enter both email and password');
                    return;
                }
                
                const user = Database.findUser(email);
                
                if (!user) {
                    showNotification('No account found with this email. Please register first.');
                    return;
                }
                
                if (user.passwordHash !== btoa(password)) {
                    showNotification('Incorrect password. Please try again.');
                    return;
                }
                
                // Successful login
                currentUser = user;
                isLoggedIn = true;
                
                loadUserData();
                closeLoginModal();
                showNotification(`Welcome back, ${user.name}!`);
            });
            
            window.closeLoginModal = function() {
                document.body.removeChild(modal);
            };
        }

        function showRegister() {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-md w-full">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold gradient-text">📝 Register</h3>
                        <button onclick="closeRegisterModal()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>
                    
                    <form id="registerForm" class="space-y-4">
                        <div>
                            <label for="registerName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" id="registerName" required 
                                   class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                   placeholder="Enter your full name">
                        </div>
                        <div>
                            <label for="registerEmail" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="registerEmail" required 
                                   class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                   placeholder="Enter your email">
                        </div>
                        <div>
                            <label for="registerPassword" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" id="registerPassword" required 
                                   class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                   placeholder="Create a password">
                        </div>
                        <button type="submit" 
                                class="w-full bg-[#6B9080] text-white py-3 rounded-lg font-semibold hover:bg-[#A4C3B2] transition-colors">
                            Create Account
                        </button>
                    </form>
                    
                    <div class="mt-4 text-center">
                        <p class="text-sm text-gray-600">Already have an account? 
                            <button onclick="closeRegisterModal(); showLogin();" class="text-[#6B9080] hover:underline">Login here</button>
                        </p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            document.getElementById('registerForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('registerName').value;
                const email = document.getElementById('registerEmail').value;
                const password = document.getElementById('registerPassword').value;
                
                if (name && email && password) {
                    const existingUser = Database.findUser(email);
                    if (existingUser) {
                        showNotification('User with this email already exists');
                        return;
                    }
                    
                    const userData = {
                        email: email,
                        name: name,
                        passwordHash: btoa(password),
                        joinDate: new Date().toLocaleDateString(),
                        avatar: {
                            backgroundColor: '#6B9080',
                            initials: name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
                        }
                    };
                    
                    const newUser = Database.createUser(userData);
                    
                    closeRegisterModal();
                    showNotification('Account created successfully! Please login to continue.');
                    
                    // Show login modal after successful registration
                    setTimeout(() => {
                        showLogin();
                    }, 1000);
                } else {
                    showNotification('Please fill in all fields');
                }
            });
            
            window.closeRegisterModal = function() {
                document.body.removeChild(modal);
            };
        }

        function showOrders() {
            if (!isLoggedIn) {
                showNotification('Please login to view your orders');
                showLogin();
                return;
            }
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold gradient-text">📦 My Orders</h3>
                        <button onclick="closeOrdersModal()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>
                    
                    ${currentUser.orders.length === 0 ? 
                        '<div class="text-center py-8"><p class="text-gray-500">No orders yet. Start shopping to see your orders here!</p></div>' :
                        `<div class="space-y-4">
                            ${currentUser.orders.map(order => `
                                <div class="border border-[#CCE3DE] rounded-lg p-4">
                                    <div class="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 class="font-bold">Order #${order.id}</h4>
                                            <p class="text-sm text-gray-600">${order.date}</p>
                                        </div>
                                        <div class="text-right">
                                            <div class="font-bold text-[#6B9080]">$${order.total}</div>
                                            <div class="text-sm text-green-600">${order.status}</div>
                                        </div>
                                    </div>
                                    <div class="text-sm text-gray-700">
                                        ${order.items.length} item${order.items.length !== 1 ? 's' : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>`
                    }
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeOrdersModal = function() {
                document.body.removeChild(modal);
            };
        }

        function showProfile() {
            if (!isLoggedIn) {
                showNotification('Please login to view your profile');
                return;
            }
            
            const userOrders = Database.getUserOrders(currentUser.id);
            const userWishlist = Database.getUserWishlist(currentUser.id);
            const userCart = Database.getUserCart(currentUser.id);
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
                    <!-- Header -->
                    <div class="flex justify-between items-center p-6 border-b border-[#CCE3DE] bg-gradient-to-r from-[#F6FFF8] to-[#EAF4F4]">
                        <h3 class="text-3xl font-bold gradient-text">👤 My Profile</h3>
                        <button onclick="closeProfileModal()" class="text-gray-500 hover:text-gray-700 text-3xl">×</button>
                    </div>
                    
                    <!-- Profile Content -->
                    <div class="flex-1 overflow-y-auto">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                            <!-- Left Column - User Info -->
                            <div class="lg:col-span-1">
                                <!-- User Avatar & Basic Info -->
                                <div class="bg-gradient-to-br from-[#F6FFF8] to-[#EAF4F4] rounded-xl p-6 mb-6 border border-[#CCE3DE]">
                                    <div class="text-center">
                                        <div class="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                                             style="background: ${currentUser.avatar.backgroundColor};">
                                            ${currentUser.avatar.initials}
                                        </div>
                                        <h4 class="text-xl font-bold text-[#6B9080] mb-2">${currentUser.name}</h4>
                                        <p class="text-gray-600 mb-2">${currentUser.email}</p>
                                        <p class="text-sm text-gray-500">Member since ${currentUser.joinDate || new Date(currentUser.createdAt).toLocaleDateString()}</p>
                                        
                                        <button onclick="editProfile()" 
                                                class="mt-4 w-full bg-[#6B9080] text-white py-2 rounded-lg hover:bg-[#A4C3B2] transition-colors">
                                            ✏️ Edit Profile
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- Quick Stats -->
                                <div class="bg-white rounded-xl p-6 border border-[#CCE3DE] shadow-sm">
                                    <h5 class="font-bold text-[#6B9080] mb-4">📊 Account Stats</h5>
                                    <div class="space-y-3">
                                        <div class="flex justify-between items-center">
                                            <span class="text-gray-600">Total Orders:</span>
                                            <span class="font-bold text-[#6B9080]">${userOrders.length}</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <span class="text-gray-600">Wishlist Items:</span>
                                            <span class="font-bold text-pink-600">${userWishlist.length}</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <span class="text-gray-600">Cart Items:</span>
                                            <span class="font-bold text-blue-600">${userCart.length}</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <span class="text-gray-600">Total Spent:</span>
                                            <span class="font-bold text-green-600">$${userOrders.reduce((sum, order) => sum + order.totalAmount, 0).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Right Column - Tabs Content -->
                            <div class="lg:col-span-2">
                                <!-- Tab Navigation -->
                                <div class="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
                                    <button onclick="switchProfileTab('orders')" id="ordersTab" 
                                            class="flex-1 py-2 px-4 rounded-md font-medium transition-colors bg-white text-[#6B9080] shadow-sm">
                                        📦 Orders
                                    </button>
                                    <button onclick="switchProfileTab('settings')" id="settingsTab" 
                                            class="flex-1 py-2 px-4 rounded-md font-medium transition-colors text-gray-600 hover:text-[#6B9080]">
                                        ⚙️ Settings
                                    </button>
                                    <button onclick="switchProfileTab('security')" id="securityTab" 
                                            class="flex-1 py-2 px-4 rounded-md font-medium transition-colors text-gray-600 hover:text-[#6B9080]">
                                        🔒 Security
                                    </button>
                                </div>
                                
                                <!-- Tab Content Container - This ensures all tabs stay in the right column -->
                                <div class="tab-container">
                                    <!-- Orders Tab -->
                                    <div id="ordersContent" class="tab-content">
                                        <div class="bg-white rounded-xl border border-[#CCE3DE] shadow-sm">
                                            <div class="p-6 border-b border-[#CCE3DE]">
                                                <h5 class="font-bold text-[#6B9080] text-lg">📦 Order History</h5>
                                            </div>
                                            <div class="p-6">
                                                ${userOrders.length === 0 ? 
                                                    '<div class="text-center py-8 text-gray-500">No orders yet. <button onclick="closeProfileModal();" class="text-[#6B9080] hover:underline">Start shopping!</button></div>' :
                                                    `<div class="space-y-4 max-h-96 overflow-y-auto">
                                                        ${userOrders.map(order => `
                                                            <div class="border border-gray-200 rounded-lg p-4 hover:border-[#6B9080] transition-colors">
                                                                <div class="flex justify-between items-start mb-3">
                                                                    <div>
                                                                        <div class="font-bold text-[#6B9080]">Order #${order.orderNumber}</div>
                                                                        <div class="text-sm text-gray-600">${new Date(order.orderDate).toLocaleDateString()}</div>
                                                                    </div>
                                                                    <div class="text-right">
                                                                        <div class="font-bold text-lg">$${order.totalAmount.toFixed(2)}</div>
                                                                        <span class="px-2 py-1 rounded-full text-xs font-medium ${
                                                                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                                                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                                            'bg-gray-100 text-gray-800'
                                                                        }">${order.status}</span>
                                                                    </div>
                                                                </div>
                                                                <div class="text-sm text-gray-600 mb-2">
                                                                    Payment: ${order.paymentMethod} (${order.paymentStatus})
                                                                </div>
                                                                <div class="text-sm text-gray-600">
                                                                    ${order.items ? order.items.length : 0} item(s)
                                                                </div>
                                                                <div class="mt-3 flex space-x-2">
                                                                    <button onclick="viewOrderDetails('${order.orderNumber}')" 
                                                                            class="px-3 py-1 bg-[#6B9080] text-white rounded text-sm hover:bg-[#A4C3B2] transition-colors">
                                                                        View Details
                                                                    </button>
                                                                    ${order.status === 'Processing' ? 
                                                                        '<button onclick="cancelOrder(\'' + order.orderNumber + '\')" class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors">Cancel</button>' : 
                                                                        ''
                                                                    }
                                                                </div>
                                                            </div>
                                                        `).join('')}
                                                    </div>`
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Settings Tab -->
                                    <div id="settingsContent" class="tab-content hidden">
                                        <div class="space-y-6">
                                            <!-- Personal Information -->
                                            <div class="bg-white rounded-xl border border-[#CCE3DE] shadow-sm">
                                                <div class="p-6 border-b border-[#CCE3DE]">
                                                    <h5 class="font-bold text-[#6B9080] text-lg">👤 Personal Information</h5>
                                                </div>
                                                <div class="p-6">
                                                    <form id="personalInfoForm" class="space-y-4">
                                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div>
                                                                <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                                <input type="text" id="profileName" value="${currentUser.name}" 
                                                                       class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]">
                                                            </div>
                                                            <div>
                                                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                                                <input type="email" id="profileEmail" value="${currentUser.email}" readonly
                                                                       class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]">
                                                            </div>
                                                            <div>
                                                                <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                                                <input type="tel" id="profilePhone" value="${currentUser.phone || ''}" 
                                                                       class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                                                       placeholder="Enter phone number">
                                                            </div>
                                                            <div>
                                                                <label class="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                                                <input type="date" id="profileDob" value="${currentUser.dateOfBirth || ''}" 
                                                                       class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]">
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                                            <textarea id="profileAddress" rows="3" 
                                                                      class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                                                      placeholder="Enter your address">${currentUser.address || ''}</textarea>
                                                        </div>
                                                        <button type="submit" 
                                                                class="bg-[#6B9080] text-white px-6 py-2 rounded-lg hover:bg-[#A4C3B2] transition-colors">
                                                            💾 Save Changes
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            
                                            <!-- Preferences -->
                                            <div class="bg-white rounded-xl border border-[#CCE3DE] shadow-sm">
                                                <div class="p-6 border-b border-[#CCE3DE]">
                                                    <h5 class="font-bold text-[#6B9080] text-lg">🎛️ Preferences</h5>
                                                </div>
                                                <div class="p-6 space-y-4">
                                                    <div class="flex items-center justify-between">
                                                        <div>
                                                            <div class="font-medium">Email Notifications</div>
                                                            <div class="text-sm text-gray-600">Receive order updates and promotions</div>
                                                        </div>
                                                        <label class="relative inline-flex items-center cursor-pointer">
                                                            <input type="checkbox" class="sr-only peer" ${currentUser.emailNotifications !== false ? 'checked' : ''}>
                                                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B9080]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B9080]"></div>
                                                        </label>
                                                    </div>
                                                    <div class="flex items-center justify-between">
                                                        <div>
                                                            <div class="font-medium">SMS Notifications</div>
                                                            <div class="text-sm text-gray-600">Get text updates for orders</div>
                                                        </div>
                                                        <label class="relative inline-flex items-center cursor-pointer">
                                                            <input type="checkbox" class="sr-only peer" ${currentUser.smsNotifications ? 'checked' : ''}>
                                                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B9080]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B9080]"></div>
                                                        </label>
                                                    </div>
                                                    <div class="flex items-center justify-between">
                                                        <div>
                                                            <div class="font-medium">Marketing Emails</div>
                                                            <div class="text-sm text-gray-600">Receive deals and product recommendations</div>
                                                        </div>
                                                        <label class="relative inline-flex items-center cursor-pointer">
                                                            <input type="checkbox" class="sr-only peer" ${currentUser.marketingEmails ? 'checked' : ''}>
                                                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B9080]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B9080]"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Security Tab -->
                                    <div id="securityContent" class="tab-content hidden">
                                        <div class="space-y-6">
                                            <!-- Change Password -->
                                            <div class="bg-white rounded-xl border border-[#CCE3DE] shadow-sm">
                                                <div class="p-6 border-b border-[#CCE3DE]">
                                                    <h5 class="font-bold text-[#6B9080] text-lg">🔒 Change Password</h5>
                                                </div>
                                                <div class="p-6">
                                                    <form id="changePasswordForm" class="space-y-4">
                                                        <div>
                                                            <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                                            <input type="password" id="currentPassword" 
                                                                   class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                                                   placeholder="Enter current password">
                                                        </div>
                                                        <div>
                                                            <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                                            <input type="password" id="newPassword" 
                                                                   class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                                                   placeholder="Enter new password">
                                                        </div>
                                                        <div>
                                                            <label class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                                            <input type="password" id="confirmPassword" 
                                                                   class="w-full px-3 py-2 border border-[#CCE3DE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9080]"
                                                                   placeholder="Confirm new password">
                                                        </div>
                                                        <button type="submit" 
                                                                class="bg-[#6B9080] text-white px-6 py-2 rounded-lg hover:bg-[#A4C3B2] transition-colors">
                                                            🔐 Update Password
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            
                                            <!-- Account Actions -->
                                            <div class="bg-white rounded-xl border border-[#CCE3DE] shadow-sm">
                                                <div class="p-6 border-b border-[#CCE3DE]">
                                                    <h5 class="font-bold text-[#6B9080] text-lg">⚠️ Account Actions</h5>
                                                </div>
                                                <div class="p-6 space-y-4">
                                                    <div class="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                                        <div>
                                                            <div class="font-medium text-yellow-800">Logout from all devices</div>
                                                            <div class="text-sm text-yellow-600">Sign out from all active sessions</div>
                                                        </div>
                                                        <button onclick="logoutAllDevices()" 
                                                                class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                                                            Logout All
                                                        </button>
                                                    </div>
                                                    <div class="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                                                        <div>
                                                            <div class="font-medium text-red-800">Delete Account</div>
                                                            <div class="text-sm text-red-600">Permanently delete your account and data</div>
                                                        </div>
                                                        <button onclick="deleteAccount()" 
                                                                class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                                            Delete Account
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Add event listeners for forms
            document.getElementById('personalInfoForm').addEventListener('submit', function(e) {
                e.preventDefault();
                updatePersonalInfo();
            });
            
            document.getElementById('changePasswordForm').addEventListener('submit', function(e) {
                e.preventDefault();
                changePassword();
            });
            
            // Profile modal functions
            window.closeProfileModal = function() {
                document.body.removeChild(modal);
            };
            
            window.switchProfileTab = function(tabName) {
                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                });
                
                // Remove active class from all tabs
                document.querySelectorAll('[id$="Tab"]').forEach(tab => {
                    tab.className = 'flex-1 py-2 px-4 rounded-md font-medium transition-colors text-gray-600 hover:text-[#6B9080]';
                });
                
                // Show selected tab content
                document.getElementById(tabName + 'Content').classList.remove('hidden');
                
                // Add active class to selected tab
                document.getElementById(tabName + 'Tab').className = 'flex-1 py-2 px-4 rounded-md font-medium transition-colors bg-white text-[#6B9080] shadow-sm';
            };
            
            window.editProfile = function() {
                switchProfileTab('settings');
            };
            
            window.viewOrderDetails = function(orderNumber) {
                const order = userOrders.find(o => o.orderNumber === orderNumber);
                if (order) {
                    const detailsModal = document.createElement('div');
                    detailsModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4';
                    detailsModal.innerHTML = `
                        <div class="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-2xl font-bold text-[#6B9080]">Order Details</h3>
                                <button onclick="closeOrderDetails()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                            </div>
                            
                            <div class="space-y-4">
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <div class="text-sm text-gray-600">Order Number</div>
                                        <div class="font-bold">#${order.orderNumber}</div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-gray-600">Order Date</div>
                                        <div class="font-bold">${new Date(order.orderDate).toLocaleDateString()}</div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-gray-600">Status</div>
                                        <span class="px-2 py-1 rounded-full text-xs font-medium ${
                                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                            'bg-gray-100 text-gray-800'
                                        }">${order.status}</span>
                                    </div>
                                    <div>
                                        <div class="text-sm text-gray-600">Total Amount</div>
                                        <div class="font-bold text-lg text-[#6B9080]">$${order.totalAmount.toFixed(2)}</div>
                                    </div>
                                </div>
                                
                                <div class="border-t pt-4">
                                    <h4 class="font-bold mb-3">Items Ordered</h4>
                                    <div class="space-y-2">
                                        ${order.items ? order.items.map(item => `
                                            <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <div>
                                                    <div class="font-medium">${item.name}</div>
                                                    <div class="text-sm text-gray-600">Quantity: ${item.quantity}</div>
                                                </div>
                                                <div class="font-bold">$${item.price.toFixed(2)}</div>
                                            </div>
                                        `).join('') : '<div class="text-gray-500">No items found</div>'}
                                    </div>
                                </div>
                                
                                <div class="border-t pt-4">
                                    <div class="flex justify-between items-center">
                                        <span class="font-bold">Payment Method:</span>
                                        <span>${order.paymentMethod} (${order.paymentStatus})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(detailsModal);
                    
                    window.closeOrderDetails = function() {
                        document.body.removeChild(detailsModal);
                    };
                }
            };
            
            window.cancelOrder = function(orderNumber) {
                const confirmModal = document.createElement('div');
                confirmModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4';
                confirmModal.innerHTML = `
                    <div class="bg-white rounded-xl p-8 max-w-md w-full">
                        <h3 class="text-xl font-bold text-red-600 mb-4">Cancel Order</h3>
                        <p class="text-gray-600 mb-6">Are you sure you want to cancel order #${orderNumber}? This action cannot be undone.</p>
                        <div class="flex space-x-3">
                            <button onclick="confirmCancelOrder('${orderNumber}')" 
                                    class="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                                Yes, Cancel Order
                            </button>
                            <button onclick="closeCancelModal()" 
                                    class="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                                Keep Order
                            </button>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(confirmModal);
                
                window.confirmCancelOrder = function(orderNum) {
                    // Update order status in database
                    const orderIndex = Database.orders.findIndex(o => o.orderNumber === orderNum);
                    if (orderIndex !== -1) {
                        Database.orders[orderIndex].status = 'Cancelled';
                        Database.save('orders');
                        showNotification(`Order #${orderNum} has been cancelled`);
                        document.body.removeChild(confirmModal);
                        closeProfileModal();
                        showProfile(); // Refresh the profile modal
                    }
                };
                
                window.closeCancelModal = function() {
                    document.body.removeChild(confirmModal);
                };
            };
            
            window.updatePersonalInfo = function() {
                const name = document.getElementById('profileName').value;
                const email = document.getElementById('profileEmail').value;
                const phone = document.getElementById('profilePhone').value;
                const dob = document.getElementById('profileDob').value;
                const address = document.getElementById('profileAddress').value;
                
                // Update current user object
                currentUser.name = name;
                currentUser.email = email;
                currentUser.phone = phone;
                currentUser.dateOfBirth = dob;
                currentUser.address = address;
                
                // Update avatar initials if name changed
                currentUser.avatar.initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
                
                showNotification('Profile updated successfully!');
            };
            
            window.changePassword = function() {
                const currentPass = document.getElementById('currentPassword').value;
                const newPass = document.getElementById('newPassword').value;
                const confirmPass = document.getElementById('confirmPassword').value;
                
                if (!currentPass || !newPass || !confirmPass) {
                    showNotification('Please fill in all password fields');
                    return;
                }
                
                if (btoa(currentPass) !== currentUser.passwordHash) {
                    showNotification('Current password is incorrect');
                    return;
                }
                
                if (newPass !== confirmPass) {
                    showNotification('New passwords do not match');
                    return;
                }
                
                if (newPass.length < 6) {
                    showNotification('New password must be at least 6 characters');
                    return;
                }
                
                // Update password
                currentUser.passwordHash = btoa(newPass);
                
                showNotification('Password updated successfully!');
                
                // Clear form
                document.getElementById('changePasswordForm').reset();
            };
            
            window.logoutAllDevices = function() {
                showNotification('Logged out from all devices');
                // In a real app, this would invalidate all sessions
            };
            
            window.deleteAccount = function() {
                const confirmModal = document.createElement('div');
                confirmModal.className = 'fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4';
                confirmModal.innerHTML = `
                    <div class="bg-white rounded-xl p-8 max-w-md w-full">
                        <h3 class="text-xl font-bold text-red-600 mb-4">⚠️ Delete Account</h3>
                        <p class="text-gray-600 mb-4">This will permanently delete your account and all associated data including:</p>
                        <ul class="text-sm text-gray-600 mb-6 list-disc list-inside space-y-1">
                            <li>Order history</li>
                            <li>Wishlist items</li>
                            <li>Personal information</li>
                            <li>Account preferences</li>
                        </ul>
                        <p class="text-red-600 font-medium mb-6">This action cannot be undone!</p>
                        <div class="space-y-3">
                            <button onclick="confirmDeleteAccount()" 
                                    class="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                                Yes, Delete My Account
                            </button>
                            <button onclick="closeDeleteModal()" 
                                    class="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                                Cancel
                            </button>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(confirmModal);
                
                window.confirmDeleteAccount = function() {
                    // Remove user from database
                    Database.users = Database.users.filter(u => u.id !== currentUser.id);
                    Database.save('users');
                    
                    // Clear user data
                    Database.wishlistData = Database.wishlistData.filter(w => w.userId !== currentUser.id);
                    Database.cartData = Database.cartData.filter(c => c.userId !== currentUser.id);
                    Database.save('wishlistData');
                    Database.save('cartData');
                    
                    // Logout
                    currentUser = null;
                    isLoggedIn = false;
                    
                    document.body.removeChild(confirmModal);
                    closeProfileModal();
                    showNotification('Account deleted successfully');
                };
                
                window.closeDeleteModal = function() {
                    document.body.removeChild(confirmModal);
                };
            };
        }

        // Show notification function
        function showNotification(message) {
            document.getElementById('notificationText').textContent = message;
            document.getElementById('notification').classList.add('show');
            
            setTimeout(() => {
                document.getElementById('notification').classList.remove('show');
            }, 3000);
        }
        // Update user interface based on login status
        function updateUserUI() {
            // This would update the account dropdown to show user info
            // For now, we'll just update the notification
        }

        // Logout function
        function logout() {
            currentUser = null;
            isLoggedIn = false;
            cart = []; // Clear cart on logout
            updateCartUI();
            closeProfileModal();
            showNotification('Logged out successfully');
        }

        // Show deals page
        function showDeals() {
            const dealProducts = products.filter(p => Math.random() > 0.7); // Random deals for demo
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl p-8 max-w-4xl w-full max-h-96 overflow-y-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold gradient-text">🔥 Special Deals</h3>
                        <button onclick="closeDealsModal()" class="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        ${dealProducts.map(product => {
                            const discount = Math.floor(Math.random() * 30) + 10;
                            const salePrice = (product.price * (1 - discount / 100)).toFixed(2);
                            return `
                                <div class="border border-red-300 rounded-lg p-4 bg-gradient-to-br from-red-50 to-red-100">
                                    <div class="text-center">
                                        <div class="text-3xl mb-2">${product.image}</div>
                                        <h4 class="font-bold text-sm mb-2">${product.name}</h4>
                                        <div class="flex items-center justify-center space-x-2 mb-2">
                                            <span class="text-sm text-gray-500 line-through">$${product.price}</span>
                                            <span class="text-lg font-bold text-red-600">$${salePrice}</span>
                                        </div>
                                        <div class="text-xs text-red-600 font-bold">-${discount}% OFF</div>
                                        <button onclick="addToCart(${product.id}); closeDealsModal();" 
                                                class="w-full mt-2 bg-red-600 text-white py-2 px-3 rounded text-sm hover:bg-red-700 transition-colors">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeDealsModal = function() {
                document.body.removeChild(modal);
            };
        }

        // Show gaming setup details
        function showSetupDetails(setupType) {
            const setups = {
                budget: {
                    name: "Budget Gamer",
                    price: 899,
                    description: "Perfect entry-level gaming PC for 1080p gaming at high settings",
                    components: [
                        { name: "AMD Ryzen 5 7600X", price: 229, type: "CPU" },
                        { name: "NVIDIA RTX 4060", price: 299, type: "GPU" },
                        { name: "16GB DDR5-5600", price: 89, type: "RAM" },
                        { name: "1TB NVMe SSD", price: 79, type: "Storage" },
                        { name: "B650 Motherboard", price: 129, type: "Motherboard" },
                        { name: "650W 80+ Gold PSU", price: 89, type: "Power Supply" },
                        { name: "Mid-Tower Case", price: 69, type: "Case" }
                    ],
                    performance: "60+ FPS at 1080p High settings in most games",
                    warranty: "2 years full warranty"
                },
                performance: {
                    name: "Performance Pro",
                    price: 1599,
                    description: "High-performance gaming PC for 1440p gaming at ultra settings",
                    components: [
                        { name: "AMD Ryzen 7 7700X", price: 349, type: "CPU" },
                        { name: "NVIDIA RTX 4070 Ti", price: 799, type: "GPU" },
                        { name: "32GB DDR5-6000", price: 179, type: "RAM" },
                        { name: "2TB NVMe SSD", price: 149, type: "Storage" },
                        { name: "X670 Motherboard", price: 229, type: "Motherboard" },
                        { name: "850W 80+ Gold PSU", price: 129, type: "Power Supply" },
                        { name: "Premium Mid-Tower Case", price: 99, type: "Case" }
                    ],
                    performance: "100+ FPS at 1440p Ultra settings in most games",
                    warranty: "3 years full warranty"
                },
                ultimate: {
                    name: "Ultimate Beast",
                    price: 3299,
                    description: "Top-tier gaming workstation for 4K gaming and content creation",
                    components: [
                        { name: "Intel Core i9-13900K", price: 589, type: "CPU" },
                        { name: "NVIDIA RTX 4090", price: 1599, type: "GPU" },
                        { name: "64GB DDR5-6400", price: 399, type: "RAM" },
                        { name: "4TB NVMe SSD", price: 299, type: "Storage" },
                        { name: "Z790 Motherboard", price: 349, type: "Motherboard" },
                        { name: "1000W 80+ Platinum PSU", price: 199, type: "Power Supply" },
                        { name: "Full-Tower Case", price: 149, type: "Case" }
                    ],
                    performance: "60+ FPS at 4K Ultra settings, excellent for streaming and content creation",
                    warranty: "3 years full warranty + priority support"
                }
            };
            
            const setup = setups[setupType];
            if (!setup) return;
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-center p-6 border-b border-[#CCE3DE]">
                        <h3 class="text-3xl font-bold gradient-text">${setup.name} - Complete Setup</h3>
                        <button onclick="closeSetupModal()" class="text-gray-500 hover:text-gray-700 text-3xl">×</button>
                    </div>
                    
                    <div class="p-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Setup Info -->
                            <div>
                                <div class="text-4xl font-bold text-[#6B9080] mb-4">$${setup.price}</div>
                                <p class="text-gray-600 mb-6">${setup.description}</p>
                                
                                <div class="bg-gradient-to-br from-[#F6FFF8] to-[#EAF4F4] p-4 rounded-lg mb-6">
                                    <h4 class="font-bold text-[#6B9080] mb-2">Performance:</h4>
                                    <p class="text-sm text-gray-700">${setup.performance}</p>
                                </div>
                                
                                <div class="bg-gradient-to-br from-[#F6FFF8] to-[#EAF4F4] p-4 rounded-lg mb-6">
                                    <h4 class="font-bold text-[#6B9080] mb-2">Warranty:</h4>
                                    <p class="text-sm text-gray-700">${setup.warranty}</p>
                                </div>
                                
                                <div class="space-y-3">
                                    <button onclick="addSetupToCart('${setupType}')" 
                                            class="w-full bg-[#6B9080] text-white py-3 rounded-lg font-semibold hover:bg-[#A4C3B2] transition-colors">
                                        🛒 Add Complete Setup to Cart
                                    </button>
                                    <button onclick="customizeSetup('${setupType}')" 
                                            class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        🔧 Customize This Setup
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Component Breakdown -->
                            <div>
                                <h4 class="text-xl font-bold text-[#6B9080] mb-4">Included Components:</h4>
                                <div class="space-y-3">
                                    ${setup.components.map(component => `
                                        <div class="flex justify-between items-center p-3 bg-gradient-to-r from-white to-[#F6FFF8] rounded-lg border border-[#CCE3DE]">
                                            <div>
                                                <div class="font-semibold text-sm">${component.name}</div>
                                                <div class="text-xs text-gray-500">${component.type}</div>
                                            </div>
                                            <div class="text-[#6B9080] font-bold">$${component.price}</div>
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <div class="mt-4 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                                    <div class="flex justify-between items-center">
                                        <span class="font-bold">Total Value:</span>
                                        <span class="text-xl font-bold text-green-600">$${setup.components.reduce((sum, c) => sum + c.price, 0)}</span>
                                    </div>
                                    <div class="text-sm text-green-700 mt-1">
                                        You save $${setup.components.reduce((sum, c) => sum + c.price, 0) - setup.price} with this bundle!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeSetupModal = function() {
                document.body.removeChild(modal);
            };
        }
        
        // Add gaming setup to cart
        function addSetupToCart(setupType) {
            const setups = {
                budget: { name: "Budget Gamer Complete Setup", price: 899, image: "💰" },
                performance: { name: "Performance Pro Complete Setup", price: 1599, image: "🚀" },
                ultimate: { name: "Ultimate Beast Complete Setup", price: 3299, image: "👑" }
            };
            
            const setup = setups[setupType];
            if (!setup) return;
            
            const setupItem = {
                id: `setup_${setupType}`,
                name: setup.name,
                price: setup.price,
                image: setup.image,
                description: "Complete gaming setup with all components",
                specs: "Professionally assembled and tested",
                brand: "TechHub Gaming",
                isSetup: true
            };
            
            const existingItem = cart.find(item => item.id === setupItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...setupItem, quantity: 1 });
            }
            
            updateCartUI();
            if (typeof closeSetupModal === 'function') closeSetupModal();
            showNotification(`${setup.name} added to cart!`);
        }
        
        // Customize gaming setup
        function customizeSetup(setupType) {
            if (typeof closeSetupModal === 'function') closeSetupModal();
            showPCBuilder();
            showNotification(`Opening PC Builder with ${setupType} setup as starting point`);
        }

        // Filter by brand function
        function filterByBrand(brand) {
            showFullCatalog('all');
            // Set brand filter after modal opens
            setTimeout(() => {
                const brandFilter = document.getElementById('catalogBrandFilter');
                if (brandFilter) {
                    brandFilter.value = brand;
                    applyCatalogFilters();
                }
            }, 100);
            showNotification(`Showing ${brand} products`);
        }

        // Add service to cart
        function addServiceToCart(serviceType) {
            const services = {
                assembly: {
                    name: "PC Assembly Service",
                    price: 99,
                    image: "🔧",
                    description: "Professional PC assembly with cable management and testing"
                },
                tuning: {
                    name: "Performance Tuning Service", 
                    price: 79,
                    image: "⚡",
                    description: "System optimization for maximum performance"
                },
                warranty: {
                    name: "Extended Warranty Service",
                    price: 149,
                    image: "🛡️", 
                    description: "3-year comprehensive coverage beyond manufacturer warranty"
                },
                homesetup: {
                    name: "Home Setup Service",
                    price: 199,
                    image: "🏠",
                    description: "Complete in-home installation and setup"
                }
            };
            
            const service = services[serviceType];
            if (!service) return;
            
            const serviceItem = {
                id: `service_${serviceType}`,
                name: service.name,
                price: service.price,
                image: service.image,
                description: service.description,
                specs: "Professional service",
                brand: "TechHub Services",
                isService: true
            };
            
            const existingItem = cart.find(item => item.id === serviceItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...serviceItem, quantity: 1 });
            }
            
            updateCartUI();
            showNotification(`${service.name} added to cart!`);
        }

        // Show article function
        function showArticle(articleType) {
            const articles = {
                rtx5000: {
                    title: "NVIDIA RTX 5000 Series: What to Expect",
                    content: `
                        <h3 class="text-2xl font-bold text-[#6B9080] mb-4">🚀 Next-Gen Graphics Revolution</h3>
                        <p class="mb-4">NVIDIA's upcoming RTX 5000 series promises to revolutionize gaming and content creation with groundbreaking improvements:</p>
                        
                        <h4 class="text-lg font-bold text-[#6B9080] mb-2">Key Features:</h4>
                        <ul class="list-disc list-inside mb-4 space-y-2">
                            <li><strong>Ada Lovelace Next Architecture:</strong> Enhanced RT cores and Tensor cores for better ray tracing and AI performance</li>
                            <li><strong>DLSS 4.0:</strong> Revolutionary AI upscaling with even better image quality and performance gains</li>
                            <li><strong>AV1 Encoding:</strong> Hardware-accelerated streaming with 40% better compression</li>
                            <li><strong>24GB VRAM:</strong> Flagship models with massive memory for 4K gaming and content creation</li>
                        </ul>
                        
                        <h4 class="text-lg font-bold text-[#6B9080] mb-2">Expected Performance:</h4>
                        <p class="mb-4">Early benchmarks suggest 30-40% performance improvements over RTX 4000 series, with exceptional ray tracing capabilities making 4K gaming at max settings more accessible than ever.</p>
                        
                        <p class="text-sm text-gray-600">Expected release: Q2 2025 | Starting price: $599 (RTX 5060)</p>
                    `
                },
                buildguide: {
                    title: "First-Time PC Builder's Complete Guide", 
                    content: `
                        <h3 class="text-2xl font-bold text-[#6B9080] mb-4">🔧 Building Your First Gaming PC</h3>
                        <p class="mb-4">Building a PC might seem intimidating, but with the right guidance, it's like assembling high-tech LEGO blocks!</p>
                        
                        <h4 class="text-lg font-bold text-[#6B9080] mb-2">Step-by-Step Process:</h4>
                        <ol class="list-decimal list-inside mb-4 space-y-2">
                            <li><strong>Plan Your Build:</strong> Determine your budget and use case (gaming, work, content creation)</li>
                            <li><strong>Choose Components:</strong> CPU, GPU, motherboard, RAM, storage, PSU, case, cooling</li>
                            <li><strong>Prepare Workspace:</strong> Clean, well-lit area with anti-static precautions</li>
                            <li><strong>Install CPU & RAM:</strong> Start with motherboard outside the case</li>
                            <li><strong>Mount Motherboard:</strong> Install I/O shield, then secure motherboard in case</li>
                            <li><strong>Install Storage & GPU:</strong> Mount drives and graphics card</li>
                            <li><strong>Connect Cables:</strong> Power, data, and front panel connectors</li>
                            <li><strong>First Boot:</strong> Test system and install operating system</li>
                        </ol>
                        
                        <h4 class="text-lg font-bold text-[#6B9080] mb-2">Pro Tips:</h4>
                        <ul class="list-disc list-inside mb-4 space-y-1">
                            <li>Take your time - rushing leads to mistakes</li>
                            <li>Keep motherboard manual handy for connector locations</li>
                            <li>Don't force components - they should fit naturally</li>
                            <li>Cable management makes future upgrades easier</li>
                        </ul>
                        
                        <p class="text-sm text-gray-600">Estimated build time: 2-4 hours for first-time builders</p>
                    `
                },
                optimization: {
                    title: "Optimize Your PC for Maximum Gaming Performance",
                    content: `
                        <h3 class="text-2xl font-bold text-[#6B9080] mb-4">⚡ Squeeze Every Frame from Your Rig</h3>
                        <p class="mb-4">Get the most performance from your gaming PC with these professional optimization techniques:</p>
                        
                        <h4 class="text-lg font-bold text-[#6B9080] mb-2">Hardware Optimizations:</h4>
                        <ul class="list-disc list-inside mb-4 space-y-2">
                            <li><strong>Memory Overclocking:</strong> Enable XMP/DOCP profiles for rated speeds</li>
                            <li><strong>GPU Tuning:</strong> Use MSI Afterburner for safe overclocking</li>
                            <li><strong>CPU Optimization:</strong> Enable Precision Boost (AMD) or Turbo Boost (Intel)</li>
                            <li><strong>Thermal Management:</strong> Ensure proper airflow and clean dust regularly</li>
                        </ul>
                        
                        <h4 class="text-lg font-bold text-[#6B9080] mb-2">Software Tweaks:</h4>
                        <ul class="list-disc list-inside mb-4 space-y-2">
                            <li><strong>Windows Game Mode:</strong> Prioritizes gaming performance</li>
                            <li><strong>Disable Fullscreen Optimization:</strong> Better frame pacing in games</li>
                            <li><strong>Update Drivers:</strong> Latest GPU drivers for optimal performance</li>
                            <li><strong>Background Apps:</strong> Close unnecessary programs while gaming</li>
                        </ul>
                        
                        <h4 class="text-lg font-bold text-[#6B9080] mb-2">Advanced Settings:</h4>
                        <ul class="list-disc list-inside mb-4 space-y-1">
                            <li>Set Windows power plan to "High Performance"</li>
                            <li>Disable Windows automatic updates during gaming</li>
                            <li>Use NVIDIA Control Panel or AMD Software for game-specific settings</li>
                            <li>Monitor temperatures with HWiNFO64 or similar tools</li>
                        </ul>
                        
                        <p class="text-sm text-gray-600">Expected performance gain: 10-25% depending on system configuration</p>
                    `
                }
            };
            
            const article = articles[articleType];
            if (!article) return;
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-center p-6 border-b border-[#CCE3DE]">
                        <h3 class="text-2xl font-bold gradient-text">${article.title}</h3>
                        <button onclick="closeArticleModal()" class="text-gray-500 hover:text-gray-700 text-3xl">×</button>
                    </div>
                    
                    <div class="p-6">
                        ${article.content}
                        
                        <div class="mt-8 p-4 bg-gradient-to-r from-[#F6FFF8] to-[#EAF4F4] rounded-lg">
                            <h4 class="font-bold text-[#6B9080] mb-2">Related Products:</h4>
                            <div class="flex space-x-4">
                                <button onclick="showFullCatalog('gpu')" class="bg-[#6B9080] text-white px-4 py-2 rounded-lg hover:bg-[#A4C3B2] transition-colors text-sm">
                                    🎮 Graphics Cards
                                </button>
                                <button onclick="showFullCatalog('cpu')" class="bg-[#6B9080] text-white px-4 py-2 rounded-lg hover:bg-[#A4C3B2] transition-colors text-sm">
                                    🔧 Processors
                                </button>
                                <button onclick="showPCBuilder()" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                    🛠️ PC Builder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            window.closeArticleModal = function() {
                document.body.removeChild(modal);
            };
        }

        // Chat Functions
        function toggleChat() {
            const chatWidget = document.getElementById('chatWidget');
            const chatFloatingBtn = document.getElementById('chatFloatingBtn');
            
            if (isChatOpen) {
                chatWidget.classList.add('hidden');
                chatFloatingBtn.classList.remove('hidden');
                isChatOpen = false;
            } else {
                chatWidget.classList.remove('hidden');
                chatFloatingBtn.classList.add('hidden');
                isChatOpen = true;
                
                if (!chatSessionId) {
                    initializeChatSession();
                }
                
                const chatBadge = document.getElementById('chatBadge');
                chatBadge.classList.add('hidden');
            }
        }

        function initializeChatSession() {
            const userId = currentUser ? currentUser.id : null;
            const session = Database.createChatSession(userId);
            chatSessionId = session.id;
            
            const existingMessages = Database.getChatHistory(chatSessionId);
            
            if (existingMessages.length === 0) {
                const welcomeMessage = Database.saveChatMessage(
                    chatSessionId,
                    'support',
                    'TechHub Support',
                    'Hi! Welcome to TechHub! How can I help you today? 😊'
                );
                
                chatMessages = [welcomeMessage];
            } else {
                chatMessages = existingMessages;
                existingMessages.forEach(msg => {
                    const messageObj = {
                        sender: msg.senderType,
                        message: msg.message,
                        timestamp: new Date(msg.timestamp)
                    };
                    addMessageToChat(messageObj);
                });
            }
        }

        function sendMessage() {
            const chatInput = document.getElementById('chatInput');
            const message = chatInput.value.trim();
            
            if (!message) return;
            
            const userName = currentUser ? currentUser.name : 'Guest';
            const userMessage = Database.saveChatMessage(
                chatSessionId,
                'user',
                userName,
                message
            );
            
            chatMessages.push(userMessage);
            const userMessageObj = {
                sender: 'user',
                message: message,
                timestamp: new Date(userMessage.timestamp)
            };
            addMessageToChat(userMessageObj);
            
            chatInput.value = '';
            
            setTimeout(() => {
                const supportResponse = generateSupportResponse(message);
                
                const supportMessage = Database.saveChatMessage(
                    chatSessionId,
                    'support',
                    'TechHub Support',
                    supportResponse
                );
                
                chatMessages.push(supportMessage);
                const supportMessageObj = {
                    sender: 'support',
                    message: supportResponse,
                    timestamp: new Date(supportMessage.timestamp)
                };
                addMessageToChat(supportMessageObj);
                
                if (!isChatOpen) {
                    const chatBadge = document.getElementById('chatBadge');
                    chatBadge.classList.remove('hidden');
                }
            }, 1000 + Math.random() * 2000);
        }

        function sendQuickMessage(message) {
            const chatInput = document.getElementById('chatInput');
            chatInput.value = message;
            sendMessage();
        }

        function handleChatKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function addMessageToChat(messageObj) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            
            if (messageObj.sender === 'user') {
                messageDiv.className = 'flex items-start space-x-2 justify-end';
                messageDiv.innerHTML = `
                    <div class="bg-[#6B9080] text-white rounded-lg p-3 shadow-sm max-w-xs">
                        <p class="text-sm">${messageObj.message}</p>
                        <span class="text-xs opacity-75">${formatTime(messageObj.timestamp)}</span>
                    </div>
                    <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                        ${currentUser ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                `;
            } else {
                messageDiv.className = 'flex items-start space-x-2';
                messageDiv.innerHTML = `
                    <div class="w-6 h-6 bg-[#6B9080] rounded-full flex items-center justify-center text-white text-xs">
                        T
                    </div>
                    <div class="bg-white rounded-lg p-3 shadow-sm border border-[#CCE3DE] max-w-xs">
                        <p class="text-sm">${messageObj.message}</p>
                        <span class="text-xs text-gray-500">${formatTime(messageObj.timestamp)}</span>
                    </div>
                `;
            }
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function formatTime(timestamp) {
            const now = new Date();
            const diff = now - timestamp;
            
            if (diff < 60000) {
                return 'Just now';
            } else if (diff < 3600000) {
                return `${Math.floor(diff / 60000)}m ago`;
            } else {
                return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
        }

        function generateSupportResponse(userMessage) {
            const message = userMessage.toLowerCase();
            
            if (message.includes('order') || message.includes('delivery') || message.includes('shipping')) {
                const responses = [
                    "I'd be happy to help you with your order! Could you please provide your order number?",
                    "Let me check on your order status. What's your order number or email address?",
                    "For order inquiries, I can help you track your shipment. Do you have your order confirmation?"
                ];
                return responses[Math.floor(Math.random() * responses.length)];
            }
            
            if (message.includes('technical') || message.includes('problem') || message.includes('issue') || message.includes('help')) {
                const responses = [
                    "I'm here to help with technical issues! Can you describe what specific problem you're experiencing?",
                    "Let me assist you with that technical question. What component or product are you having trouble with?",
                    "I'd be glad to help troubleshoot! Could you provide more details about the issue?"
                ];
                return responses[Math.floor(Math.random() * responses.length)];
            }
            
            if (message.includes('return') || message.includes('refund') || message.includes('exchange')) {
                const responses = [
                    "I can help you with returns and exchanges. Our return policy allows 30 days for most items. What would you like to return?",
                    "Returns are easy with TechHub! Do you have your order number? I can start the return process for you.",
                    "I'll be happy to process your return. Which item would you like to return and what's the reason?"
                ];
                return responses[Math.floor(Math.random() * responses.length)];
            }
            
            if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
                const responses = [
                    "Hello! Welcome to TechHub support. How can I assist you today?",
                    "Hi there! I'm here to help with any questions about our products or services.",
                    "Hey! Thanks for reaching out. What can I help you with?"
                ];
                return responses[Math.floor(Math.random() * responses.length)];
            }
            
            const defaultResponses = [
                "Thanks for your message! Could you provide a bit more detail so I can better assist you?",
                "I want to make sure I give you the best help possible. Can you tell me more about what you're looking for?",
                "I'm here to help! Could you clarify what specific assistance you need?",
                "Let me connect you with the right information. What would you like to know more about?"
            ];
            
            return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }

        // Initialize the shop when page loads
        init();