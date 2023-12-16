"use client";
import {create} from "zustand"

const useAddToCart = create((set) => ({
    cart: 0,
    addToCart: () => set((state) => ({ cart: state.cart + 1})),
    removeFromCart: () => set({ cart: 0}),
}));

export { useAddToCart };