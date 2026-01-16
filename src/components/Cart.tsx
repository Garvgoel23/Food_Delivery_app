import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

const Cart = () => {
  const cartItems = useSelector((store: RootState) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch({ type: "cart/clearCart" });
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-3xl mb-4">Cart</h1>

      {cartItems.length === 0 ? (
        <h2 className="text-gray-600">Your cart is empty</h2>
      ) : (
        <div className="w-6/12 mx-auto">
          <button
            className="mb-4 px-4 py-2 bg-black text-white rounded hover:bg-shadow-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 mb-3 border rounded bg-white"
            >
              <div className="text-left">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ₹{(item.price ?? item.defaultPrice ?? 0) / 100}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
