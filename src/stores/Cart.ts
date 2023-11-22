import {
  types,
  getParent,
  destroy,
  Instance,
  SnapshotIn,
} from 'mobx-state-tree';

// Cart Item
export const CartItem = types
  .model({
    id: types.number,
    title: types.string,
    price: types.number,
    image: types.string,
    quantity: types.number,
  })
  .actions((self) => ({
    remove() {
      getParent<typeof Cart>(self, 2).removeFromCart(self);
    },
    increaseQuantity() {
      self.quantity += 1;
    },
    decreaseQuantity() {
      if (self.quantity == 1) {
        this.remove();
      }
      self.quantity -= 1;
    },
  }))
  .views((self) => ({
    get totalPrice() {
      return self.quantity * self.price;
    },
  }));

// Cart
export const Cart = types
  .model({
    cartItems: types.optional(types.array(CartItem), []),
  })
  .actions((self) => ({
    addToCart(
      product: SnapshotIn<typeof CartItem> | Instance<typeof CartItem>
    ) {
      const existProduct = self.cartItems.find((p) => p.id === product.id);
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        self.cartItems.push(product);
      }
    },
    removeFromCart(product: SnapshotIn<typeof CartItem>) {
      destroy(product);
    },
  }))
  .views((self) => ({
    get totalItems() {
      return self.cartItems.length;
    },
    get totalPrice() {
      return self.cartItems.reduce((sum, entry) => sum + entry.totalPrice, 0);
    },
    get totalProducts() {
      return self.cartItems.reduce((sum, entry) => sum + entry.quantity, 0);
    },
  }));
