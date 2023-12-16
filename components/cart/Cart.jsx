"use client";
import { FiShoppingCart } from "react-icons/fi"; 
import { useAddToCart } from "@/hooks/useAddToCart"; 
function Cart({ children }) {
const cartItems = useAddToCart((state) => state.cart);
 return (
<figure className="flex gap-x-0.5 cursor-pointer"> <FiShoppingCart className="w-6 h-6" />

<figcaption>
    <p>{cartItems}</p>
</figcaption>
</figure>
);
}
export { Cart };