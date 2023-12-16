import { useAddToCart} from "@/hooks/useAddToCart"
import { cn } from "@/lib/utils/mergeCss";

function useAddToCart({ className, label }) {
    const addToCart = useAddToCart((state) => state.addToCart);

    function handleClick(e) {
        addToCart();
    }

    return (
        <button onClick={handleClick} type="button"></button>
    );
}

export {addToCart}