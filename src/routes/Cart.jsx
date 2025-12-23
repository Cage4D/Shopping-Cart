import React from "react";
import { useOutletContext } from "react-router";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cart, setCart } = useOutletContext();
  const sum = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function deleteItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <section className="flex flex-col w-full mx-auto py-2 px-1 md:w-[60vw]">
      <div className="font-clash font-bold border-b-2 border-slate-400 text-slate-700">
        <p className="w-full text-end text-xl tracking-wider">{`${
          cart.length
        } ${cart.length === 1 ? "item" : "items"}`}</p>
        <p className="w-full text-end text-xl tracking-wide">
          Total: {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(sum)}
        </p>
      </div>
      {cart.map((item) => (
        <div key={item.id} className="flex border-b-2 border-slate-400 py-1 gap-2">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-30 aspect-square object-contain md:max-h-40"
          />
          <div className="flex flex-col justify-around w-full">
            <div className="flex justify-between items-start w-full">
              <p className="font-semibold font-clash tracking-wider text-md leading-tight max-w-[10ch] md:max-w-[50ch] md:text-lg">
                {item.title}
              </p>
              <p className="font-semibold font-clash text-md md:text-lg">${item.price}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold font-clash text-md md:text-lg">
                Quantity: {item.quantity}
              </p>
              <button
                className="flex gap-1 font-clash font-semibold items-center text-white bg-slate-800 rounded-lg h-8 p-1.5 md:h-min"
                onClick={() => deleteItem(item.id)}
              >
                <MdDelete size={24} />
                <span className="text-md md:text-lg">Remove</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cart;
