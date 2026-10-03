import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function Cart() {
  const [cart, setCart] = useState<Product[]>([
    {
      id: 1,
      name: "T-Shirt",
      price: 599,
      quantity: 1,
    },
    {
      id: 2,
      name: "Jeans",
      price: 999,
      quantity: 2,
    },
  ]);

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <button onClick={() => decreaseQuantity(item.id)}>-</button>

          <span> {item.quantity} </span>

          <button onClick={() => increaseQuantity(item.id)}>+</button>

          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
