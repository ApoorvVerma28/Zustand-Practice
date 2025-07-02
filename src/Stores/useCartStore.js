import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],
  
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find(i => i.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter(item => item.id !== id),
    })),

  clearCart: () => set({ items: [] }),
}));
export default useCartStore;
