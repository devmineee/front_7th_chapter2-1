// Vanilla JS Store 구현
class Store {
  constructor() {
    this.state = {
      cart: [],
      filters: {
        search: "",
        category1: "",
        category2: "",
        sort: "price_asc",
        limit: 20,
      },
    };
    this.listeners = [];
    this.loadCartFromStorage();
  }

  // 상태 구독
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  // 상태 변경 알림
  notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  // 장바구니 관련 메서드
  loadCartFromStorage() {
    const cartData = localStorage.getItem("shopping_cart");
    if (cartData) {
      try {
        this.state.cart = JSON.parse(cartData);
      } catch {
        this.state.cart = [];
      }
    }
  }

  saveCartToStorage() {
    localStorage.setItem("shopping_cart", JSON.stringify(this.state.cart));
  }

  addToCart(product, quantity = 1) {
    const existingItem = this.state.cart.find((item) => item.productId === product.productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.state.cart.push({
        ...product,
        quantity,
      });
    }

    this.saveCartToStorage();
    this.notify();
  }

  updateCartItemQuantity(productId, quantity) {
    const item = this.state.cart.find((item) => item.productId === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCartToStorage();
      this.notify();
    }
  }

  removeFromCart(productId) {
    this.state.cart = this.state.cart.filter((item) => item.productId !== productId);
    this.saveCartToStorage();
    this.notify();
  }

  clearCart() {
    this.state.cart = [];
    this.saveCartToStorage();
    this.notify();
  }

  getCart() {
    return this.state.cart;
  }

  getCartCount() {
    return this.state.cart.length;
  }

  // 필터 관련 메서드
  setFilters(filters) {
    this.state.filters = { ...this.state.filters, ...filters };
    this.notify();
  }

  getFilters() {
    return this.state.filters;
  }
}

// Singleton 인스턴스
export const store = new Store();
